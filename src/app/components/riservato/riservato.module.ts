import { NgModule } from '@angular/core';
import { RiservatoComponent } from './riservato.component';
import { CommonModule } from '@angular/common';
import { RiservatoRoutingModule } from './riservato-routing.module';


@NgModule({
  declarations: [
    RiservatoComponent,

  ],
  imports: [
   CommonModule,
    RiservatoRoutingModule
  ],
  providers: [],
  bootstrap: [RiservatoComponent]
})
export class RiservatoModule { }
