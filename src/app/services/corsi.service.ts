import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/environment';
import { use } from 'echarts';

@Injectable({
  providedIn: 'root'
})
export class CorsiService {

  private courses:string = '/corso'
  private preferiti:string = '/preferiti'


  constructor(private http:HttpClient) { }


  getAllCourses(page?:number){
    if(!page){
    return this.http.get(environment.API_URL+this.courses)
    }else{
    return this.http.get(environment.API_URL+this.courses+`?page=${page}`)
  }
  }

  savePreferiti(preferiti:{}){
return this.http.post(environment.API_URL+this.preferiti,preferiti)
  }

  getPreferitiByUserId(userId:number){
    return this.http.get(environment.API_URL+this.preferiti+`/user/${userId}`)
  }
  putPreferitiById(preferitiId:number,preferiti:{}){
    return this.http.put(environment.API_URL+this.preferiti+`/${preferitiId}`,preferiti)
  }
  svuotaPreferitiById(preferitiId:number){
    return this.http.get(environment.API_URL+this.preferiti+`/svuota/${preferitiId}`)
  }
}
