import { AfterViewInit, Component } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ShowCorsoComponent } from 'src/app/shared/show-corso/show-corso.component';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.scss']
})
export class CorsiComponent implements AfterViewInit{
  search!:FormGroup
  corso:string[]=['','','','','','','','','','','','','','','','','','','','','','','','',''
  ,'','','','','','','','','','','','','','','','','','']
cors:any[]=[
  {
    title: "Corso uno",
    autore:{
      nome:"Osvaldo Urso"
        },
    categoriaList:[
      {
        nome:"web3"
      },
      {
nome:"Blockchain"
      }
    ],
    img:'assets/home-images/slider/Angular.png',
    description:"dsfadsfdsfds as fasdfasdfasd as asd fasdgfarge rergertwg  erger ger gerg  rgew gre ewrgerw hytjh uyiytuo8iyunfgcnbfgnfgfdhrty htr"
  }
]


constructor(private matDialog: MatDialog){}

  ngAfterViewInit(): void {
this.search = new FormGroup({
search: new FormControl('',Validators.required)
})
}

showCourse(course:any){
const dialogRef= this.matDialog.open(ShowCorsoComponent,{data:course})

dialogRef.afterClosed().subscribe((data:any)=>{})
}
}
