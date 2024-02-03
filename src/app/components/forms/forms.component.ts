import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FormsService } from 'src/app/services/forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{

loginForm!:FormGroup
signupForm!:FormGroup
section:string=''

constructor(private formService:AuthService,private toastr:ToastrService,private router:Router){}

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
if(this.loginForm.valid&&this.loginForm.controls['email'].value!='raffaelecaravetta13@gmail.com'){
  this.formService.logIn(
    {email:this.loginForm.controls['email'].value,password:this.loginForm.controls['password'].value}
  ).subscribe(
    (tokens:any)=>{
      if(tokens){
        this.formService.token=tokens.tokens.accessToken
        this.formService.refreshToken=tokens.tokens.refreshToken
        localStorage.setItem('accessToken',this.formService.token)
        localStorage.setItem('refreshToken',this.formService.refreshToken)
        this.formService.authenticateUser(true)
        this.formService.verifyToken(this.formService.token).subscribe((user:any)=>{
          localStorage.setItem('user',JSON.stringify(user))
          this.router.navigate(['/corsi'])
        this.toastr.success("Accesso effettuato come " + user.nome + " " + user.cognome)
        },err=>{
        this.formService.verifyRefreshToken(this.formService.refreshToken).subscribe((tkns:any)=>{
          if(tkns){
            this.formService.setToken(tkns.accessToken)
            this.formService.setRefreshToken(tkns.refreshToken)
            localStorage.setItem('accessToke',this.formService.token)
            localStorage.setItem('refreshToken',this.formService.refreshToken)
            this.formService.authenticateUser(true)
            this.formService.verifyToken(this.formService.token).subscribe((user:any)=>{
              if(user){
                localStorage.setItem('user',JSON.stringify(user))
                this.router.navigate(['/corsi'])
              }
            })
          }
        })
        })

        }  this.toastr.success("Accesso effettuato con successo.")
        },err=>{
          this.toastr.error(err.error.message||"Accesso respinto.")
        })
        }else if(this.loginForm.controls['email'].value=='raffaelecaravetta13@gmail.com'){
        this.toastr.error("Devi accedere dall'area riservata")
        }
        else{
          this.toastr.error("Completa il form.")

        }
}
signup(){
  if(this.signupForm.valid&&this.signupForm.controls['password'].value==this.signupForm.controls['ripetiPassword'].value){
    this.formService.signUp(
      {
        nome:this.signupForm.controls['nome'].value,
        cognome:this.signupForm.controls['cognome'].value,
        email:this.signupForm.controls['email'].value,
        eta:this.signupForm.controls['eta'].value,
        password:this.signupForm.controls['password'].value
      }
    ).subscribe((user:any)=>{
      if(user){
        this.toastr.success("User registrato")
      this.signupForm.reset()
      this.section='login'
      }
    },err=>{
      this.toastr.error(err.error.message||"User non inserito")
    })
    }else{
      this.toastr.error("Completa il form o assicurati che le password coincidano")
    }
  }
}
