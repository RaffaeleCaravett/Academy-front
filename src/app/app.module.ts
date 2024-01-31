import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConfermaComponent } from './components/conferma/conferma.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './core/auth.guard';
import { TokenInterceptor } from './core/token.interceptor';
import { NgxEchartsModule } from 'ngx-echarts';
import { ShowCorsoComponent } from './shared/show-corso/show-corso.component';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConfermaComponent,
    NotfoundComponent,
    ShowCorsoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    HttpClientModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
    NgxPayPalModule,

  ],
  providers: [AuthGuard,
    provideAnimations(),
    provideToastr(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
