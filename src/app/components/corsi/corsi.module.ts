import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { CorsiComponent } from './corsi.component';
import { CorsiRoutingModule } from './corsi-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
CorsiComponent
  ],
  imports: [
   CommonModule,
    CorsiRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CorsiModule { }
