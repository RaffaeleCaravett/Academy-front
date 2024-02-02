import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfiloService {

  private preferiti:string ='/preferiti'
  private acquisti:string = '/acquisti'
  private carrello:string = '/carrello'

  constructor(private http:HttpClient) { }

  getPreferitiByUserId(userId:number){
    return this.http.get(environment.API_URL+this.preferiti+`/user/${userId}`)
  }
  getAcquistiByCarrelloId(carrelloId:number){
    return this.http.get(environment.API_URL+this.acquisti+`/carrello/${carrelloId}`)
  }
  getCarrelloByUserId(userId:number){
    return this.http.get(environment.API_URL+this.carrello+`/user/${userId}`)
  }
  updateCarrelloById(carrelloId:number,carrello:{}){
    return this.http.put(environment.API_URL+this.carrello+`/${carrelloId}`,carrello)
  }
  getAllAcquistiByCarrelloId(carrelloId:number){
    return this.http.get(environment.API_URL+this.acquisti+`/carrello/${carrelloId}`)
  }
  svuotaCarrello(carrelloId:number){
   return this.http.get(environment.API_URL+this.carrello+`/${carrelloId}`)
  }
  saveCarrello(carrello:{}){
    return this.http.post(environment.API_URL+this.carrello,carrello)
  }
  saveAcquisto(acquisto:{}){
    return this.http.post(environment.API_URL+this.acquisti,acquisto)
  }
}
