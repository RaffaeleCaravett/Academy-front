import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CorsiService } from 'src/app/services/corsi.service';
import { ShowCorsoComponent } from 'src/app/shared/show-corso/show-corso.component';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.scss']
})
export class CorsiComponent implements AfterViewInit, OnInit{
  search!:FormGroup
corsi:any
user:any
preferiti:any
carrello:any
constructor(private matDialog: MatDialog, private corsoService: CorsiService,private toastr:ToastrService){}
  ngOnInit(): void {
    this.search = new FormGroup({
      search: new FormControl('',Validators.required)
      })
  if(localStorage.getItem('user')){
        this.user=JSON.parse(localStorage.getItem('user')!)
        if(this.user){
this.corsoService.getPreferitiByUserId(this.user.id).subscribe((preferiti:any)=>{
  this.preferiti=preferiti
})
this.corsoService.getCarrelloByUserId(this.user.id).subscribe((carrello:any)=>{
  if(carrello){
    this.carrello=carrello
  }
},err=>{
  this.toastr.error(err.error.message||"Carrello non trovato per questo utente")
});

}
  }


    }

  ngAfterViewInit(): void {
    this.corsoService.getAllCourses().subscribe((data:any)=>{
      this.corsi=data
    })
}

showCourse(course:any){
const dialogRef= this.matDialog.open(ShowCorsoComponent,{data:[course]})

dialogRef.afterClosed().subscribe((data:any)=>{
if(data=='preferiti')
{
  if(!this.preferiti){
this.corsoService.savePreferiti(
    {
user_id:this.user.id,
corso_id:[course.id]
    }
  ).subscribe((preferiti:any)=>{
    this.preferiti=preferiti
  })
  }else{
    let preferiti:any[]=[]
    this.preferiti.corso.forEach((corso:any)=>{
      preferiti.push(corso.id)
    })

    preferiti.push(course.id)
this.corsoService.putPreferitiById(this.preferiti.id,
  {
    user_id:this.user.id,
    corso_id:preferiti
  }).subscribe((preferiti:any)=>{
    this.preferiti=preferiti
  })
  }
}
})
}
removeItemFromPreferiti(cors:any){
let newPreferiti:any[]=[]
this.preferiti.corso.forEach((corso:any)=>{
  if(corso.id!=cors.id){
    newPreferiti.push(corso.id)
  }
})
this.corsoService.putPreferitiById(this.preferiti.id,
  {
    user_id:this.user.id,
    corso_id:newPreferiti
  }).subscribe((preferiti:any)=>{
    this.preferiti=preferiti
  })
}
svuotaPreferiti(){
this.corsoService.svuotaPreferitiById(this.preferiti.id).subscribe((preferiti:any)=>{this.preferiti=preferiti})
}
aggiungiAlCarrello(prodotto:any){
if(this.carrello){
  let corsi:any[]=[]
  this.carrello.corso.forEach((c:any)=>{
    corsi.push(c.id)
  })
  corsi.push(prodotto.id)
  this.corsoService.updateCarrelloById(this.carrello.id,{
    user_id:this.user.id,
    corso_id:corsi
  }).subscribe((carrello:any)=>{
    this.carrello=carrello
    this.toastr.success("Prodotto aggiunto al carrello")
  },err=>{this.toastr.error(err.error.message||"C'è stato un problema nel salvataggio del carrello")})
}else{
  this.corsoService.saveCarrello({
    user_id:this.user.id,
    corso_id:[prodotto.id]
  }).subscribe((carrello:any)=>{
    this.carrello=carrello
    this.toastr.success("Prodotto aggiunto al carrello")
  },err=>{this.toastr.error(err.error.message||"C'è stato un problema nel salvataggio del carrello")})
}
}
removeFromCarrello(corso:any){
  let corsi:any[]=[]
  this.carrello.corso.forEach((c:any)=>{
    if(c.id!=corso.id){
      corsi.push(c.id)
    }
  })
this.corsoService.updateCarrelloById(this.carrello.id,{user_id:this.user.id,corso_id:corsi}).subscribe((carrello:any)=>{this.carrello=carrello})
}
svuotaCarrello(carrelloId:number){
this.corsoService.svuotaCarrello(carrelloId).subscribe((carrello:any)=>{this.carrello=carrello})
}
}
