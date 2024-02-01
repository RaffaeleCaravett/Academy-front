import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthGuard } from 'src/app/core/auth.guard';
import { AuthService } from 'src/app/services/auth.service';
import { RiservatoService } from 'src/app/services/riservato.service';
import { ModifyComponent } from 'src/app/shared/modify/modify.component';
import { ShowCorsoComponent } from 'src/app/shared/show-corso/show-corso.component';


@Component({
  selector: 'app-riservato',
  templateUrl: './riservato.component.html',
  styleUrls: ['./riservato.component.scss']
})
export class RiservatoComponent implements OnInit, OnDestroy{
materie:any[]=[]
  docenti:any[]=[]
reservedForm!:FormGroup
user:any
section:string=''
option:any
courses:any
subjects:any
teachers:any
users:any
teachersSubjects:any[]=[]
materiePerCorsi:any[]=[]
fake:any[] = [
  {
    image: 'https://placekitten.com/200/300',
    nickname: 'CoolDude1',
    name: 'John1',
  },
  {
    image: 'https://placebear.com/200/300',
    nickname: 'TechEnthusiast1',
    name: 'Alice1',
  },
  {
    image: 'https://placekitten.com/201/301',
    nickname: 'AwesomeCoder1',
    name: 'Bob1',
  },
  {
    image: 'https://placebear.com/201/301',
    nickname: 'SuperStar1',
    name: 'Emily1',
  },
  {
    image: 'https://placekitten.com/202/302',
    nickname: 'GamerGirl1',
    name: 'Charlie1',
  },
];
coursesForm!:FormGroup
subjectsForm!:FormGroup
teachersForm!:FormGroup
usersForm!:FormGroup
constructor(private reservedService:RiservatoService,private authService:AuthService,private toastr:ToastrService,private authGuard:AuthGuard,private matDialog:MatDialog){}
  ngOnDestroy(): void {
this.user=null
this.authService.token=''
this.authService.refreshToken=''
 }

ngOnInit(): void {


  const dataBJ = [
    [1, 55, 9, 56, 0.46, 18, 6, '良'],
    [2, 25, 11, 21, 0.65, 34, 9, '优'],
    [3, 56, 7, 63, 0.3, 14, 5, '良'],
    [4, 33, 7, 29, 0.33, 16, 6, '优'],
    [5, 42, 24, 44, 0.76, 40, 16, '优'],
    [6, 82, 58, 90, 1.77, 68, 33, '良'],
    [7, 74, 49, 77, 1.46, 48, 27, '良'],
    [8, 78, 55, 80, 1.29, 59, 29, '良'],
    [9, 267, 216, 280, 4.8, 108, 64, '重度污染'],
    [10, 185, 127, 216, 2.52, 61, 27, '中度污染'],
    [11, 39, 19, 38, 0.57, 31, 15, '优'],
    [12, 41, 11, 40, 0.43, 21, 7, '优'],
    [13, 64, 38, 74, 1.04, 46, 22, '良'],
    [14, 108, 79, 120, 1.7, 75, 41, '轻度污染'],
    [15, 108, 63, 116, 1.48, 44, 26, '轻度污染'],
    [16, 33, 6, 29, 0.34, 13, 5, '优'],
    [17, 94, 66, 110, 1.54, 62, 31, '良'],
    [18, 186, 142, 192, 3.88, 93, 79, '中度污染'],
    [19, 57, 31, 54, 0.96, 32, 14, '良'],
    [20, 22, 8, 17, 0.48, 23, 10, '优'],
    [21, 39, 15, 36, 0.61, 29, 13, '优'],
    [22, 94, 69, 114, 2.08, 73, 39, '良'],
    [23, 99, 73, 110, 2.43, 76, 48, '良'],
    [24, 31, 12, 30, 0.5, 32, 16, '优'],
    [25, 42, 27, 43, 1, 53, 22, '优'],
    [26, 154, 117, 157, 3.05, 92, 58, '中度污染'],
    [27, 234, 185, 230, 4.09, 123, 69, '重度污染'],
    [28, 160, 120, 186, 2.77, 91, 50, '中度污染'],
    [29, 134, 96, 165, 2.76, 83, 41, '轻度污染'],
    [30, 52, 24, 60, 1.03, 50, 21, '良'],
    [31, 46, 5, 49, 0.28, 10, 6, '优']
  ];

  var dataGZ = [
    [1, 26, 37, 27, 1.163, 27, 13, '优'],
    [2, 85, 62, 71, 1.195, 60, 8, '良'],
    [3, 78, 38, 74, 1.363, 37, 7, '良'],
    [4, 21, 21, 36, 0.634, 40, 9, '优'],
    [5, 41, 42, 46, 0.915, 81, 13, '优'],
    [6, 56, 52, 69, 1.067, 92, 16, '良'],
    [7, 64, 30, 28, 0.924, 51, 2, '良'],
    [8, 55, 48, 74, 1.236, 75, 26, '良'],
    [9, 76, 85, 113, 1.237, 114, 27, '良'],
    [10, 91, 81, 104, 1.041, 56, 40, '良'],
    [11, 84, 39, 60, 0.964, 25, 11, '良'],
    [12, 64, 51, 101, 0.862, 58, 23, '良'],
    [13, 70, 69, 120, 1.198, 65, 36, '良'],
    [14, 77, 105, 178, 2.549, 64, 16, '良'],
    [15, 109, 68, 87, 0.996, 74, 29, '轻度污染'],
    [16, 73, 68, 97, 0.905, 51, 34, '良'],
    [17, 54, 27, 47, 0.592, 53, 12, '良'],
    [18, 51, 61, 97, 0.811, 65, 19, '良'],
    [19, 91, 71, 121, 1.374, 43, 18, '良'],
    [20, 73, 102, 182, 2.787, 44, 19, '良'],
    [21, 73, 50, 76, 0.717, 31, 20, '良'],
    [22, 84, 94, 140, 2.238, 68, 18, '良'],
    [23, 93, 77, 104, 1.165, 53, 7, '良'],
    [24, 99, 130, 227, 3.97, 55, 15, '良'],
    [25, 146, 84, 139, 1.094, 40, 17, '轻度污染'],
    [26, 113, 108, 137, 1.481, 48, 15, '轻度污染'],
    [27, 81, 48, 62, 1.619, 26, 3, '良'],
    [28, 56, 48, 68, 1.336, 37, 9, '良'],
    [29, 82, 92, 174, 3.29, 0, 13, '良'],
    [30, 106, 116, 188, 3.628, 101, 16, '轻度污染'],
    [31, 118, 50, 0, 1.383, 76, 11, '轻度污染']
  ];

  var dataSH = [
    [1, 91, 45, 125, 0.82, 34, 23, '良'],
    [2, 65, 27, 78, 0.86, 45, 29, '良'],
    [3, 83, 60, 84, 1.09, 73, 27, '良'],
    [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
    [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
    [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
    [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
    [8, 89, 65, 78, 0.86, 51, 26, '良'],
    [9, 53, 33, 47, 0.64, 50, 17, '良'],
    [10, 80, 55, 80, 1.01, 75, 24, '良'],
    [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
    [12, 99, 71, 142, 1.1, 62, 42, '良'],
    [13, 95, 69, 130, 1.28, 74, 50, '良'],
    [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
    [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
    [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
    [17, 79, 43, 107, 1.05, 59, 37, '良'],
    [18, 71, 46, 89, 0.86, 64, 25, '良'],
    [19, 97, 71, 113, 1.17, 88, 31, '良'],
    [20, 84, 57, 91, 0.85, 55, 31, '良'],
    [21, 87, 63, 101, 0.9, 56, 41, '良'],
    [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
    [23, 87, 62, 100, 1, 72, 28, '良'],
    [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
    [25, 65, 45, 51, 0.74, 39, 17, '良'],
    [26, 39, 24, 38, 0.61, 47, 17, '优'],
    [27, 39, 24, 39, 0.59, 50, 19, '优'],
    [28, 93, 68, 96, 1.05, 79, 29, '良'],
    [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
    [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
    [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
  ];

  var schema = [
    { name: 'date', index: 0, text: '日期' },
    { name: 'AQIindex', index: 1, text: 'AQI' },
    { name: 'PM25', index: 2, text: 'PM2.5' },
    { name: 'PM10', index: 3, text: 'PM10' },
    { name: 'CO', index: 4, text: ' CO' },
    { name: 'NO2', index: 5, text: 'NO2' },
    { name: 'SO2', index: 6, text: 'SO2' },
    { name: '等级', index: 7, text: '等级' }
  ];

  var lineStyle = {
    width: 1,
    opacity: 0.5
  };

  this.option = {
    backgroundColor: '#333',
    legend: {
      bottom: 30,
      data: ['Beijing', 'Shanghai', 'Guangzhou'],
      itemGap: 20,
      textStyle: {
        color: '#fff',
        fontSize: 14
      }
    },
    tooltip: {
      padding: 10,
      backgroundColor: '#222',
      borderColor: '#777',
      borderWidth: 1
    },
    parallelAxis: [
      {
        dim: 0,
        name: schema[0].text,
        inverse: true,
        max: 31,
        nameLocation: 'start'
      },
      { dim: 1, name: schema[1].text },
      { dim: 2, name: schema[2].text },
      { dim: 3, name: schema[3].text },
      { dim: 4, name: schema[4].text },
      { dim: 5, name: schema[5].text },
      { dim: 6, name: schema[6].text },
      {
        dim: 7,
        name: schema[7].text,
        type: 'category',
        data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
      }
    ],
    visualMap: {
      show: true,
      min: 0,
      max: 150,
      dimension: 2,
      inRange: {
        color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
        // colorAlpha: [0, 1]
      }
    },
    parallel: {
      left: '5%',
      right: '18%',
      bottom: 100,
      parallelAxisDefault: {
        type: 'value',
        name: 'AQI指数',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          color: '#fff',
          fontSize: 12
        },
        axisLine: {
          lineStyle: {
            color: '#aaa'
          }
        },
        axisTick: {
          lineStyle: {
            color: '#777'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      }
    },
    series: [
      {
        name: 'Beijing',
        type: 'parallel',
        lineStyle: lineStyle,
        data: dataBJ
      },
      {
        name: 'Shanghai',
        type: 'parallel',
        lineStyle: lineStyle,
        data: dataSH
      },
      {
        name: 'Guangzhou',
        type: 'parallel',
        lineStyle: lineStyle,
        data: dataGZ
      }
    ]
  }



  this.reservedForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password:new FormControl('',Validators.required)
    })
    this.coursesForm=new FormGroup({
      nome:new FormControl('', Validators.required),
      prezzo:new FormControl('',Validators.required),
      descrizione:new FormControl('',Validators.required),
      docente_id:new FormControl('',Validators.required),
      materia_id:new FormControl('',Validators.required)
    })
this.subjectsForm=new FormGroup({
  nome:new FormControl('', Validators.required)
})
this.teachersForm=new FormGroup({
  nome:new FormControl('', Validators.required),
  materia_id:new FormControl('',Validators.required)
})
this.usersForm=new FormGroup({
  nome: new FormControl('',[Validators.required,Validators.minLength(2)]),
  cognome: new FormControl('',[Validators.required,Validators.minLength(2)]),
  email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  eta:new FormControl('',[Validators.required,Validators.min(18)]),
password:new FormControl('',[Validators.required,Validators.minLength(6)]),
ripetiPassword:new FormControl('',[Validators.required,Validators.minLength(6)])
})
  }

login(){
if(this.reservedForm.valid){
this.reservedService.log(
  {
    email:this.reservedForm.controls['email'].value,
    password:this.reservedForm.controls['password'].value
  }
).subscribe((tokens:any)=>{

if(tokens){
this.authService.token=tokens.tokens.accessToken
this.authService.refreshToken=tokens.tokens.refreshToken
this.authService.verifyToken(this.authService.token).subscribe((user:any)=>{
  this.user=user
this.toastr.success("Accesso effettuato come " + this.user.nome + " " + this.user.cognome)


this.updatedatas()

},err=>{
this.authService.verifyRefreshToken(this.authService.refreshToken).subscribe((tkns:any)=>{
  if(tkns){
    this.authService.setToken(tkns.accessToken)
    this.authService.setRefreshToken(tkns.refreshToken)
    this.authService.verifyToken(this.authService.token).subscribe((user:any)=>{
      if(user){
        this.user=user
      }
    })
  }
})
})

}  this.toastr.success("Accesso effettuato con successo.")
},err=>{
  this.toastr.error(err.error.message||"Accesso respinto.")
})
}else{
  this.toastr.error("Completa il form.")

}
}
getAllCourses(page:number){
  this.reservedService.getAllCourses(page).subscribe((courses:any)=>{
    this.courses=courses
  })
}
getAllUsers(page:number){
  this.reservedService.getAllUsers(page).subscribe((users:any)=>{
    this.users=users
  })
}
getAllSubjects(page:number){
  console.log('ihih')
  this.reservedService.getAllSubjects(page).subscribe((subjects:any)=>{
    this.subjects=subjects
  })
}
getAllTeachers(page:number){
  this.reservedService.getAllTeachers(page).subscribe((teachers:any)=>{
    this.teachers=teachers
  })
}

checkDocente(d:any){
  console.log(d)
}
insertCourse(){
  if(this.coursesForm.valid){
    let materie:any[]=[]
    this.materiePerCorsi.forEach((mat:any)=>{
      materie.push(mat.id)
    })
    this.reservedService.saveCourse(
      {
        nome:this.coursesForm.controls['nome'].value,
        prezzo:this.coursesForm.controls['prezzo'].value,
        descrizione:this.coursesForm.controls['descrizione'].value,
        docente_id:[this.coursesForm.controls['docente_id'].value],
        materia_id:materie
  }
    ).subscribe(
    {
      next: (data: Object) => {
        if(data){
           this.courses.content.push(data)
        this.materiePerCorsi=[]
        this.materie=[]
        }
      },
      error: (err: any) => {
        this.toastr.error(err.error.message||'Corso non salvato')      },
      complete: () => {
        this.coursesForm.reset()
      }
    })
  }else
  {
    this.toastr.error("Completa il form prima.")
  }
}
searchCourse(){
let nome= this.coursesForm.controls['nome'].value
let descrizione = this.coursesForm.controls['descrizione'].value
let prezzo = this.coursesForm.controls['prezzo'].value
let docente_id = this.coursesForm.controls['docente_id'].value
  this.reservedService.getCoursesByParams(
    nome,descrizione,prezzo,docente_id
  ).subscribe((courses:any)=>{
    this.courses=courses
  })
}

updateDocente(docente_id:number){
  let docente:any;
  this.docenti.forEach((d:any)=>{
    if(d.id==docente_id){
docente=d
    }
  })
  this.materie = docente.materia
}

updateMateria(materia_id:number){
   let bool=false
this.materie.forEach((mat:any)=>{
  if(mat.id==materia_id){
    this.materiePerCorsi.forEach((matXCorsi:any)=>{
if(matXCorsi.id==materia_id){
  bool=true
}
    })
    if(!bool){
      this.materiePerCorsi.push(mat)
    }
  }
})
}

saveSubject(){
  if(this.subjectsForm.valid){
    this.reservedService.saveSubject({nome:this.subjectsForm.controls['nome'].value}).subscribe(
      {
        next: (materia: Object) => {
          this.toastr.show("Materia salvata")
          this.updatedatas()
        },
        error: (err: any) => {
          this.toastr.error(err.error.message||"Materia non salvata")
        },
        complete: () => {
          this.subjectsForm.reset()
        }
      }
    )
  }else{
    this.toastr.error("Compila il form")
  }
}

modifySubject(subject:any){
const dialogRef = this.matDialog.open(ModifyComponent,{data:[subject,'subject']})
dialogRef.afterClosed().subscribe((result:any)=>{
  if(result){
      this.toastr.success(result)
      this.updatedatas()
  }
})
}
saveTeacher(){
  if(this.teachersForm.controls['nome'].value&&this.teachersSubjects.length!=0){
    let subjs:any[]=[]
    this.teachersSubjects.forEach((s:any)=>{
subjs.push(s.id)
    })
    this.reservedService.saveTeacher({nome:this.teachersForm.controls['nome'].value,materia_id:subjs}).subscribe(
      {
        next: (materia: Object) => {
          this.toastr.show("Prof. salvata/0")
          this.updatedatas()
          this.teachersForm.reset()
        },
        error: (err: any) => {
          this.toastr.error(err.error.message||"Prof non salvata/o")
        },
        complete: () => {
          this.subjectsForm.reset()
        }
      }
    )
  }else{
    this.toastr.error("Compila il form")
  }
}

modifyTeacher(teacher:any){
const dialogRef = this.matDialog.open(ModifyComponent,{data:[teacher,'teacher',this.subjects.content]})
dialogRef.afterClosed().subscribe((result:any)=>{
  if(result){
      this.toastr.success(result)
      this.updatedatas()
  }
})
}

addToTeachersSubjects(subject:any){
  this.subjects.content.forEach((s:any)=>{
    if(s.id==Number(subject)){
      let bool=false
      this.teachersSubjects.forEach((s:any)=>{
        if(s.id==subject){
          bool=true
        }
      })
      if(!bool){this.teachersSubjects.push(s)}
    }
  })
}

removeTeacherSubject(subject:any){
  let newSubjs:any[]=[]

this.teachersSubjects.forEach((sub:any)=>{
 if(sub.id!=subject.id){
newSubjs.push(sub)
 }
})
this.teachersSubjects=newSubjs
}
removeMateriaPerCorso(subject:any){
  let newSubjs:any[]=[]

this.materiePerCorsi.forEach((sub:any)=>{
 if(sub.id!=subject){
newSubjs.push(sub)
 }
})
this.materiePerCorsi=newSubjs
}
modifyCourses(corso:any){
const dialogRef=this.matDialog.open(ShowCorsoComponent,{data:[corso,"admin"]})
dialogRef.afterClosed().subscribe((result:any)=>{
  if(result&&result=='Eliminato'){
    this.updatedatas()
  }
})
}
updatedatas(){
  this.reservedService.getAllCourses().subscribe((courses:any)=>{
    this.courses=courses})
    this.reservedService.getAllSubjects().subscribe((subjects:any)=>{
      this.subjects=subjects})
    this.reservedService.getAllTeachers().subscribe((teachers:any)=>{
      this.teachers=teachers})
      this.reservedService.getAllUsers().subscribe((users:any)=>{
  this.users=users})
  this.reservedService.getAllTeachersList().subscribe((docenti:any)=>{
    this.docenti=docenti
  })
  }
  aggiungiUtente(){
if(this.usersForm.valid&&this.usersForm.controls['password'].value==this.usersForm.controls['ripetiPassword'].value){
this.reservedService.saveUser(
  {
    nome:this.usersForm.controls['nome'].value,
    cognome:this.usersForm.controls['cognome'].value,
    email:this.usersForm.controls['email'].value,
    eta:this.usersForm.controls['eta'].value,
    password:this.usersForm.controls['password'].value
  }
).subscribe((user:any)=>{
  if(user){
    this.toastr.success("User inserito")
    this.updatedatas()
  this.usersForm.reset()
  }
},err=>{
  this.toastr.error(err.error.message||"User non inserito")
})
}else{
  this.toastr.error("Completa il form o assicurati che le password coincidano")
}
  }
}
