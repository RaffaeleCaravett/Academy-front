import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
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

constructor(private profiloService:ProfiloService,private toastr:ToastrService,private authService:AuthService,private router:Router){

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
logout(){
  localStorage.clear()
  this.authService.authenticateUser(false)
  this.authService.setToken('')
this.authService.setRefreshToken('')
this.router.navigate(['/home'])
}
}
