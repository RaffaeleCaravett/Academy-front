import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorsiComponent } from './corsi.component';

const routes: Routes = [
  {path:'',
component:CorsiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorsiRoutingModule { }
