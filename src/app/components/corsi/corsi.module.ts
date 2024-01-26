import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { CorsiComponent } from './corsi.component';
import { CorsiRoutingModule } from './corsi-routing.module';


@NgModule({
  declarations: [
CorsiComponent
  ],
  imports: [
   CommonModule,
    CorsiRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CorsiModule { }
