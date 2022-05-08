import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DocService {

  constructor(private httpClient: HttpClient) { }

  createDoc(usersDetails: User[], operation_id: any): Observable<User[]> {
    let url = "http://localhost:8080/document/create?operation_id=" + operation_id;;

    return this.httpClient.post<User[]>(url, usersDetails);
  }

  downloadDoc(filename: string): Observable<Blob> {
    let url = `http://localhost:8080/document/download?filename=${filename}`;
    return this.httpClient.get(url, {
      responseType: 'blob'
    });
  }

  sendDocToMail(filename: string){
    let url = `http://localhost:8080/document/send/mail?filename=${filename}`;

    return this.httpClient.post(url, filename);
  }

}
