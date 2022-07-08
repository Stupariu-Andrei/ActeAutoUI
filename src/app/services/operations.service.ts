import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../models/operation';
import { Option } from '../models/option';
import { RegistrationOption } from '../models/registration-option';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  operation: Operation;
  user: User;
  option: Option;

  constructor(private authService: AuthService, private httpClient:HttpClient) {

  }

  getCurrentOption(){
    return this.option;
  }

  setCurrentOption(option: Option){
    this.option = option;
  }

  getCurrentOperation(){
    return this.operation;
  }

  setCurrentOperation(operation: Operation){
    this.operation = operation;
  }

  saveOperation(operation: Operation): Observable<Operation> {
    this.user = this.authService.getCurrentUser();
    const url = "http://localhost:8086/api/operations/create?userId=" + this.user.id;

    return this.httpClient.post<Operation>(url, operation);
  }

  getOperationsList():Observable<Operation[]>{
    this.user = this.authService.getCurrentUser();
    const url = "http://localhost:8086/api/operations/list/" + this.user.id;

    return this.httpClient.get<Operation[]>(url);
  }

  retrieveOptions(): Observable<Option[]> {
    const url = "http://localhost:8086/api/options";

    return this.httpClient.get<Option[]>(url);
  }

  getOptionProgress(operation_id:any, option_id:any){

    const url = "http://localhost:8086/api/operations/option/progress?operation_id=" + operation_id + "&option_id=" + option_id;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }

    return this.httpClient.get<string>(url, requestOptions);

  }

  updateOptionProgress(operation_id: any, option_id: any, progress: string){
    const url = "http://localhost:8086/api/options/progress/save?operation_id=" +operation_id + "&option_id=" + option_id + "&progress=" + progress;
    return this.httpClient.post<Operation>(url, [option_id, progress]);
  }

  saveUserOperationOptionsProgress(operation_id: any, progress:string){

    const url = "http://localhost:8086/api/operations/options/progress/save?operation_id=" + operation_id + "&progress=" + progress;

    return this.httpClient.post<Operation>(url, [operation_id, progress]);
  }

  saveOperationOption(operation_id: any, option_id: any, progress: string){
    const url = "http://localhost:8086/api/operations/option/save?operation_id=" +operation_id + "&option_id=" + option_id + "&progress=" + progress;

    return this.httpClient.post<Operation>(url, [operation_id, option_id, progress]);
  }

  saveRegistrationType(operation_id: any, registration_type: any, option_id: any){
    const url = `http://localhost:8086/api/operations/registrationtype/save?operation_id=${operation_id}&registration_type=${registration_type}&option_id=${option_id}`;

    return this.httpClient.post<Operation>(url,[operation_id, registration_type, option_id]);
  }

  getRegistrationType(operation_id: any, option_id: any){
    const url = `http://localhost:8086/api/operations/registrationtype/get?operation_id=${operation_id}&option_id=${option_id}`;
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return this.httpClient.get<string>(url, requestOptions);
  }

  getRegistrationOptions(): Observable<RegistrationOption[]>{
    const url = `http://localhost:8086/api/operations/registration-options`;

    return this.httpClient.get<RegistrationOption[]>(url);
  }

}
