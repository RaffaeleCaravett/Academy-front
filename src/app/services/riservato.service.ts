import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/environment';

@Injectable({
  providedIn: 'root'
})
export class RiservatoService {

  private login:string = '/auth/login'

  constructor(private http:HttpClient) { }

  log(log:any){
    return this.http.post(environment.API_URL+this.login,log)
  }
}
