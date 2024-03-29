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
    let url = "http://localhost:8080/api/contract/create?operation_id=" + operation_id;;

    return this.httpClient.post<User[]>(url, usersDetails);
  }

  downloadDoc(operationId: any): Observable<Blob> {
    let url = `http://localhost:8087/api/contract/download/${operationId}`;

    return this.httpClient.get(url, {
      responseType: 'blob'
    });
  }

  downloadFiscalDoc(contractId: any): Observable<Blob> {
    let url = `http://localhost:8087/api/contract/download/fiscal/${contractId}`;

    return this.httpClient.get(url, {
      responseType: 'blob'
    });
  }

  sendDocToMail(filename: string){
    let url = `http://localhost:8080/api/contract/send/mail?filename=${filename}`;

    return this.httpClient.post(url, filename);
  }

  getContractFromOperation(operation_id:any){
    let url = `http://localhost:8087/api/contract/all/${operation_id}`;

    return this.httpClient.get(url);
  }

  // saveDocument(operation_id: any, file: any){
  //   const fd = new FormData();
	// 	fd.append('file', file);
	// 	return this.httpClient.post<File>(`http://localhost:8080/api/document/registration/save/${operation_id}`, fd);
  // }

  saveRegistrationOptionDocument(operation_id: any, option_id: any, necessary_document_id: any,  file: any){
    const fd = new FormData();
		fd.append('file', file);
		return this.httpClient.post<File>(
      `http://localhost:8087/api/necessary-documents/save/registration-options?necessary_document_id=${necessary_document_id}&operation_id=${operation_id}&option_id=${option_id}`, fd);
  }

  saveOptionDocument(operation_id: any, option_id: any, necessary_document_id: any,  file: any){
    const fd = new FormData();
		fd.append('file', file);
		return this.httpClient.post<File>(
      `http://localhost:8087/api/necessary-documents/save/option?necessary_document_id=${necessary_document_id}&operation_id=${operation_id}&option_id=${option_id}`, fd);
  }

}
