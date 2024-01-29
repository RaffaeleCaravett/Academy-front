import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RiservatoService } from 'src/app/services/riservato.service';

@Component({
  selector: 'app-riservato',
  templateUrl: './riservato.component.html',
  styleUrls: ['./riservato.component.scss']
})
export class RiservatoComponent implements OnInit{

reservedForm!:FormGroup

constructor(private reservedService:RiservatoService,private toastr:ToastrService){}

ngOnInit(): void {
  this.reservedForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',Validators.required)
    })}

login(){
if(this.reservedForm.valid){
this.reservedService.log(
  {
    email:this.reservedForm.controls['email'].value,
    password:this.reservedForm.controls['password'].value
  }
).subscribe((data:any)=>{
  console.log(data)
  this.toastr.success("Accesso effettuato con successo.")
},err=>{
  this.toastr.error(err.error.message||"Accesso respinto.")
})
}else{
  this.toastr.error("Completa il form.")

}
}
}
