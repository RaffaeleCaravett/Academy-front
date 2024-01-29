import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-riservato',
  templateUrl: './riservato.component.html',
  styleUrls: ['./riservato.component.scss']
})
export class RiservatoComponent implements OnInit{

reservedForm!:FormGroup


ngOnInit(): void {
  this.reservedForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',Validators.required)
    })}

login(){

}
}
