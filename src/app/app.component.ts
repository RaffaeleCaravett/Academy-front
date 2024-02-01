import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit {

  title = 'academy';
constructor(private router:Router,private authService:AuthService, private toastr:ToastrService){}

  ngAfterViewInit(): void {
    AOS.init();
    if(localStorage.getItem('accessToken')){
      this.authService.verifyToken(localStorage.getItem('accessToken')||'').subscribe((user:any)=>{
        localStorage.setItem('user',JSON.stringify(user))
        this.authService.setToken(localStorage.getItem('accessToken')!)
        this.authService.authenticateUser(true)
        this.router.navigate(['/corsi'])
      this.toastr.success("Accesso effettuato come " + user.nome + " " + user.cognome)
      },err=>{
      this.authService.verifyRefreshToken(localStorage.getItem('refreshToken')||'').subscribe((tkns:any)=>{
        if(tkns){
          this.authService.setToken(tkns.accessToken)
          this.authService.setRefreshToken(tkns.refreshToken)
          localStorage.setItem('accessToke',this.authService.token)
          localStorage.setItem('refreshToken',this.authService.refreshToken)
          this.authService.authenticateUser(true)
          this.authService.verifyToken(this.authService.token).subscribe((user:any)=>{
            if(user){
              localStorage.setItem('user',JSON.stringify(user))
              this.router.navigate(['/corsi'])
            }
          })
        }
      })
      })
    }
  }
}
