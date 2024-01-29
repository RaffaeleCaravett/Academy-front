import { NgModule } from '@angular/core';
import { RiservatoComponent } from './riservato.component';
import { CommonModule } from '@angular/common';
import { RiservatoRoutingModule } from './riservato-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    RiservatoComponent,

  ],
  imports: [
   CommonModule,
    RiservatoRoutingModule,
    ReactiveFormsModule,
    NgxEchartsModule.forChild(),

  ],
  providers: [],
  bootstrap: [RiservatoComponent]
})
export class RiservatoModule { }
