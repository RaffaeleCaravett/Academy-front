import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RiservatoService } from 'src/app/services/riservato.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrl: './modify.component.scss'
})
export class ModifyComponent implements OnInit{

  subjectForm!:FormGroup
teacherForm!:FormGroup
teacherSubjects:any
  constructor(private dialogRef: MatDialogRef<ModifyComponent>, @Inject(MAT_DIALOG_DATA) public data: any,private reservedService:RiservatoService) {}

  ngOnInit(): void {
  if(this.data[1]=='subject'){
this.subjectForm=new FormGroup({
  nome:new FormControl(this.data[0].nome,Validators.required)
})}else if(this.data[1]=='teacher'){
  this.teacherSubjects=this.data[0].materia
  this.teacherForm=new FormGroup({
    nome:new FormControl(this.data[0].nome,Validators.required),
    materia_id:new FormControl('',Validators.required)
  })
}
}

elimina(id:number){
  if(this.data[1]=='subject'){
  this.reservedService.deleteSubject(id).subscribe((data:any)=>{
    if(data){
      this.closeDialog("Materia eliminata")
    }else{
      this.closeDialog("Materia non eliminata")
    }
  })}else if(this.data[1]=='teacher'){
    this.reservedService.deleteTeacher(id).subscribe((data:any)=>{
      if(data){
        this.closeDialog("Prof. eliminata/0")
      }else{
        this.closeDialog("Prof. non eliminata/0")
      }
    })
  }
}
modifica(id:number){
  if(this.data[1]=='subject'){
  this.reservedService.putSubjects(id,{nome:this.subjectForm.controls['nome'].value}).subscribe((data:any)=>{
    if(data){
      this.closeDialog("Materia modificata")
    }else{
      this.closeDialog("Materia non modificata")
    }
  })}else if(this.data[1]=='teacher'){
    let materie:any[]=[];
this.teacherSubjects.forEach((ma:any)=>{
  materie.push(ma.id)
})

    this.reservedService.putTeachers(id,{nome:this.subjectForm.controls['nome'].value,materia_id:materie}).subscribe((data:any)=>{
      if(data){
        this.closeDialog("Prof. modificata/o")
      }else{
        this.closeDialog("Prof. non modificata/o")
      }
    })
  }
}

  closeDialog(param?:any): void {
    this.dialogRef.close(param||null);
  }

  removeTeacherSubject(id:number){
this.teacherSubjects=this.teacherSubjects.filter((materia:any)=>{
  materia.id!=id
})
  }
}
