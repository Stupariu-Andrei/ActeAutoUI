import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Address } from '../models/address';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: User;

  constructor(private httpClient: HttpClient) { }

  setLoggedIn(loggedIn: boolean){
    this.loggedIn.next(loggedIn);
  }

  getLoggedIn():boolean{
    return this.loggedIn.getValue();
  }

  getLoggedInAsObserver(): Observable<boolean> {
    return this.loggedIn
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
    const url = "http://localhost:8085/api/user?username=" + username;

    return this.httpClient.get<User>(url);
  }

  saveUserAddress(address:Address, username: String):Observable<Address>{
    const url = "http://localhost:8085/api/user/address/save?username=" + username;

    return this.httpClient.post<Address>(url,address);
  }

  updateUserOperationsCounter(userId: any, operations_counter: number):Observable<any>{
    const url = `http://localhost:8085/api/user/add/operations_counter/${userId}?operations_counter=${operations_counter}`;

    return this.httpClient.put<any>(url,operations_counter);
  }

  getUserOperationsCounter(userId: any):Observable<any>{
    const url = `http://localhost:8085/api/user/get/operations_counter/${userId}`;

    return this.httpClient.get<any>(url);
  }

}
