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

constructor(private matDialog: MatDialog, private corsoService: CorsiService){}
  ngOnInit(): void {
    this.search = new FormGroup({
      search: new FormControl('',Validators.required)
      })

    }

  ngAfterViewInit(): void {
    this.corsoService.getAllCourses().subscribe((data:any)=>{
      this.corsi=data
    })
}

showCourse(course:any){
const dialogRef= this.matDialog.open(ShowCorsoComponent,{data:[course]})

dialogRef.afterClosed().subscribe((data:any)=>{})
}
}
