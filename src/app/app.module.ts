import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { RiservatoComponent } from './components/riservato/riservato.component';
import { ConfermaComponent } from './components/conferma/conferma.component';
import { ShowCorsoComponent } from './shared/show-corso/show-corso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FormsComponent,
    HomeComponent,
    ProfiloComponent,
    RiservatoComponent,
    ConfermaComponent,
    ShowCorsoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
