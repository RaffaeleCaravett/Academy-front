import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProfiloService } from 'src/app/services/profilo.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrls: ['./profilo.component.scss']
})
export class ProfiloComponent implements OnInit{
user:any
acquisti:any
carrello:any
preferiti:any

constructor(private profiloService:ProfiloService,private toastr:ToastrService){

}
  ngOnInit(): void {
if(localStorage.getItem('user'))
{
  this.user=JSON.parse(localStorage.getItem('user')!)
}
if(this.user){
this.profiloService.getPreferitiByUserId(this.user.id).subscribe((preferiti:any)=>{
  this.preferiti=preferiti
})

this.profiloService.getCarrelloByUserId(this.user.id).subscribe((carrello:any)=>{
  if(carrello){
    this.carrello=carrello
    this.profiloService.getAcquistiByCarrelloId(this.carrello.id).subscribe((acquisti:any)=>{
      if(acquisti){
        this.acquisti=acquisti
      }
    },err=>{
      this.toastr.error(err.error.message)
    })
  }
},err=>{
  this.toastr.error(err.error.message)
})
}
}
}
