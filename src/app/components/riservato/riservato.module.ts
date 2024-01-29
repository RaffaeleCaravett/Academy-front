import { NgModule } from '@angular/core';
import { RiservatoComponent } from './riservato.component';
import { CommonModule } from '@angular/common';
import { RiservatoRoutingModule } from './riservato-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RiservatoComponent,

  ],
  imports: [
   CommonModule,
    RiservatoRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [RiservatoComponent]
})
export class RiservatoModule { }
