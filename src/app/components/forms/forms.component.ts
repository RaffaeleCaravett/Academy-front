import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

loginForm!:FormGroup
signupForm!:FormGroup
section:string=''
ngOnInit(): void {
  this.section='login'
  this.loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',Validators.required)
    })
    this.signupForm=new FormGroup({
      nome: new FormControl('',[Validators.required,Validators.minLength(2)]),
      cognome: new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      eta:new FormControl('',[Validators.required,Validators.min(18)]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    ripetiPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
    })

}

login(){

}
signup(){

}
}
