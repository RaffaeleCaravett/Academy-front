import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';
import { AppComponent } from 'src/app/app.component';


@NgModule({
  declarations: [
    FormsComponent,

  ],
  imports: [
   CommonModule,
    FormsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class FormsModule { }
