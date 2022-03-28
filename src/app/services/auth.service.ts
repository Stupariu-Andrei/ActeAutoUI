import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: boolean = false;
  user: User;

  constructor(private httpClient: HttpClient) { }

  setLoggedIn(loggedIn: boolean){
    this.loggedIn = loggedIn;
  }

  getLoggedIn():boolean{
    return this.loggedIn;
  }

  setCurrentUser(user:User){
    this.user = user;
  }

  getCurrentUser(): User{
    return this.user;
  }

  loginUser(user: User): Observable<boolean> {
    const url = "http://localhost:8082/api/auth/signin";

    return this.httpClient.post<boolean>(url, user);
  }

  registerUser(user: User): Observable<User>{
    const url = "http://localhost:8082/api/auth/signup";

    return this.httpClient.post<User>(url, user);
  }

  getUserByUsername(username: String):Observable<User>{
    const url = "http://localhost:8082/api/auth/user?username=" + username;

    return this.httpClient.get<User>(url);
  }

}
