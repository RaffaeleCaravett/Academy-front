import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/environment';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  private courses:string = '/corso'


  constructor(private http:HttpClient) { }


  getAllCourses(page?:number){
    if(!page){
    return this.http.get(environment.API_URL+this.courses)
    }else{
    return this.http.get(environment.API_URL+this.courses+`?page=${page}`)
  }
  }
}
