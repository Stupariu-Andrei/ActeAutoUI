import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  private buyer: User;
  private seller: User;

  constructor(private httpClient: HttpClient) { }

  setBuyerDetails(buyer:User){
     this.buyer = buyer;
  }

  setSellerDetails(seller:User){
    this.seller = seller;
 }

  getBuyerDetails(): User{
    return this.buyer;
  }

  getSellerDetails(): User{
    return this.seller;
  }

  createDoc(usersDetails: User[]): Observable<User[]> {
    const url = "http://localhost:8080/document";

    return this.httpClient.post<User[]>(url, usersDetails);
  }

}
