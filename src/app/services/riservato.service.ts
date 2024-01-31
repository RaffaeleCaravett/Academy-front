import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../core/environment';

@Injectable({
  providedIn: 'root'
})
export class RiservatoService {

  private login:string = '/auth/login'
  private courses:string = '/corso'
  private subjects:string = '/materia'
  private teachers:string = '/docente'
  private users:string = '/user'


  constructor(private http:HttpClient) { }

  log(log:any){
    return this.http.post(environment.API_URL+this.login,log)
  }

  getAllCourses(){
    return this.http.get(environment.API_URL+this.courses)
  }
  getAllSubjects(){
    return this.http.get(environment.API_URL+this.subjects)
  }
  getAllTeachers(){
    return this.http.get(environment.API_URL+this.teachers)
  }
  getAllTeachersList(){
    return this.http.get(environment.API_URL+this.teachers+'/list')
  }
  getAllUsers(page?:number){
    if(!page){
          return this.http.get(environment.API_URL+'/auth'+this.users)
          console.log(1)
    }else{
      return this.http.get(environment.API_URL+'/auth'+this.users+`?page=${page}`)
      console.log(2)
    }
  }
  saveCourse(course:{}){
    return this.http.post(environment.API_URL+this.courses,course)
  }
  saveSubject(subject:{}){
    return this.http.post(environment.API_URL+this.subjects,subject)
  }
  saveTeacher(teacher:{}){
    return this.http.post(environment.API_URL+this.teachers,teacher)
  }
  saveUser(user:{}){
    return this.http.post(environment.API_URL+this.users,user)
  }
  deleteCourse(id:number){
    return this.http.delete(environment.API_URL+this.courses+`/${id}`)
  }
  deleteSubject(id:number){
    return this.http.delete(environment.API_URL+this.subjects+`/${id}`)
  }
  deleteTeacher(id:number){
    return this.http.delete(environment.API_URL+this.teachers+`/${id}`)
  }
  deleteUser(id:number){
    return this.http.delete(environment.API_URL+this.users+`/${id}`)
  }
  putCourses(id:number,course:{}){
    return this.http.put(environment.API_URL+this.courses+`/${id}`,course)
  }
  putSubjects(id:number,subject:{}){
    return this.http.put(environment.API_URL+this.subjects+`/${id}`,subject)
  }
  putTeachers(id:number,teacher:{}){
    return this.http.put(environment.API_URL+this.teachers+`/${id}`,teacher)
  }
  putUsers(id:number,user:{}){
    return this.http.put(environment.API_URL+this.users+`/${id}`,user)
  }
  getCourseById(id:number){
    return this.http.get(environment.API_URL+this.courses+`/${id}`)
  }
  getSubjectById(id:number){
    return this.http.get(environment.API_URL+this.subjects+`/${id}`)
  }
  getTeacherById(id:number){
    return this.http.get(environment.API_URL+this.teachers+`/${id}`)
  }
  getUserById(id:number){
    return this.http.get(environment.API_URL+this.users+`/${id}`)
  }
  getCoursesByParams(nome?:string,descrizione?:string,prezzo?:number,docente_id?:number,materia_id?:number){
  return this.http.get(environment.API_URL+this.courses+`/params?nome=${nome||''}&prezzo=${prezzo||''}&descrizione=${descrizione||''}&docente_id=${docente_id||''}&materia_id=${materia_id||''}`)
  }

}
