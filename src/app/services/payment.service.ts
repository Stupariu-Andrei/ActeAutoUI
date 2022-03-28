import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }

  confirmPayment(paymentPayload:any):Observable<any>{

    return this.http.post<any>('http://localhost:8081/payment/payment-details', paymentPayload);
    
  }
}
