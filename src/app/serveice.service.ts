import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './components/Model/User';
@Injectable({
  providedIn: 'root'
})
export class ServeiceService {

private url ="http://localhost:8080/"
  constructor(private http:HttpClient) { }

  //SignUp user
addUser(user:User){
  return this.http.post<User>(`${this.url}add`,user)
}

//get user information by id
getUserById(id:number ) :Observable <User>{
  return this.http.get<User>(`${this.url}user/${id}`)
}

//update User
updateUser(id?:number ,user?:any):Observable<any>{
  return this.http.put<any>(`${this.url}update/${id}`,user)
}
}
