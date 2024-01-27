import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { CorsiComponent } from './corsi.component';
import { CorsiRoutingModule } from './corsi-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPayPalModule } from 'ngx-paypal';
import { ShowCorsoComponent } from 'src/app/shared/show-corso/show-corso.component';


@NgModule({
  declarations: [
CorsiComponent,
ShowCorsoComponent,

  ],
  imports: [
   CommonModule,
    CorsiRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    NgxPayPalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class CorsiModule { }
