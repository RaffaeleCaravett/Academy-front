import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfermaComponent } from './components/conferma/conferma.component';
import { ShowCorsoComponent } from './shared/show-corso/show-corso.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {
    path:'',
     loadChildren: () => import('../app/components/forms/forms.module').then(m => m.FormsModule)
},
 {
  path:'home',
   loadChildren: () => import('../app/components/home/home.module').then(m => m.HomeModule)},
{
  path:'profilo/:id',
   loadChildren: () => import('../app/components/profilo/profilo.module').then(m => m.ProfiloModule), canActivate:[AuthGuard]},
{
  path:'riservato',
   loadChildren: () => import('../app/components/riservato/riservato.module').then(m => m.RiservatoModule)},
   {
    path:'corsi',
     loadChildren: () => import('../app/components/corsi/corsi.module').then(m => m.CorsiModule), canActivate:[AuthGuard]},
{
  path:'conferma',
  component:ConfermaComponent
},
{
  path:'showCorso/:id',
  component:ShowCorsoComponent
},
{
  path:'**',
  component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
