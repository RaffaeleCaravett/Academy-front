import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiservatoComponent } from './riservato.component';

const routes: Routes = [
  {path:'',
  component:RiservatoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiservatoRoutingModule { }
