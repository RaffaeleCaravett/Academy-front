import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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

constructor(private matDialog: MatDialog, private corsoService: CorsiService){}
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
}
