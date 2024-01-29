import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private toastr: ToastrService) {}


  isAuthenticated:boolean = false;


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if (this.isAuthenticated) {
      return true;
    } else {
this.toastr.error("Devi effettuare il login per accedere a questa area")
      return false;
    }
  }
  authenticateUser(bool?:boolean){
  if(bool){
     this.isAuthenticated=bool
  }else{
    this.isAuthenticated=false
  }
}
}
