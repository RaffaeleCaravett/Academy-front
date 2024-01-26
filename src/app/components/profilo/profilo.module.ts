import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfiloComponent } from './profilo.component';
import { ProfiloRoutingModule } from './profilo-routing.module';

@NgModule({
  declarations: [
    ProfiloComponent,

  ],
  imports: [
   CommonModule,
    ProfiloRoutingModule
  ],
  providers: [],
  bootstrap: [ProfiloComponent]
})
export class ProfiloModule { }
