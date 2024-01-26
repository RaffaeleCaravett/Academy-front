import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConfermaComponent } from './components/conferma/conferma.component';
import { ShowCorsoComponent } from './shared/show-corso/show-corso.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CorsiComponent } from './components/corsi/corsi.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConfermaComponent,
    ShowCorsoComponent,
    NotfoundComponent,
    CorsiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
