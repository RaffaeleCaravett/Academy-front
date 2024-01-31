import { NgModule } from '@angular/core';
import { RiservatoComponent } from './riservato.component';
import { CommonModule } from '@angular/common';
import { RiservatoRoutingModule } from './riservato-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { MatDialogModule } from '@angular/material/dialog';
import { ModifyComponent } from 'src/app/shared/modify/modify.component';


@NgModule({
  declarations: [
    RiservatoComponent,
ModifyComponent
  ],
  imports: [
   CommonModule,
    RiservatoRoutingModule,
    ReactiveFormsModule,
    NgxEchartsModule.forChild(),
MatDialogModule
  ],
  providers: [],
  bootstrap: [RiservatoComponent]
})
export class RiservatoModule { }
