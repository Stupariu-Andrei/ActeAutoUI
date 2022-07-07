import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  paymentHandler: any = null;

  constructor(private http: HttpClient, private router:Router) { }

  confirmPayment(paymentPayload:any):Observable<any>{

    return this.http.post<any>('http://localhost:8081/payment/payment-details', paymentPayload);
    
  }

  makePaymenttt(stripeToken: any): Observable<any>{
    const url = 'http://localhost:8080/checkout';

    return this.http.post<any>(url, {token: stripeToken});
  }

  makePayment(amount: number, navigateTo:string){
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key:'pk_test_51L0hnPG96cl6TMWpZyIy19wCMXnhEPSJvBSEzaX2lxw6na2geUZ1MddhJByvybhr8AMAFz6Nri0D5dicxrxMT9Dg00rFYabwij',
      locale: 'auto',
      token: function(stripeToken: any){
          paymentStripe(stripeToken);
      }
    });

    const paymentStripe = (stripeToken: any) => {
        if(stripeToken!= null){
          this.router.navigate([navigateTo]);
        }
    };

    paymentHandler.open({
      name: "ActeAuto Payment",
      description: "Plata pentru a primi vanzari",
      amount: amount*100
    })
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51L0hnPG96cl6TMWpZyIy19wCMXnhEPSJvBSEzaX2lxw6na2geUZ1MddhJByvybhr8AMAFz6Nri0D5dicxrxMT9Dg00rFYabwij',
          //ApiKey = pk_test_51L0hnPG96cl6TMWpZyIy19wCMXnhEPSJvBSEzaX2lxw6na2geUZ1MddhJByvybhr8AMAFz6Nri0D5dicxrxMT9Dg00rFYabwij
          //SecretKey = sk_test_51L0hnPG96cl6TMWpdFwS46pw1WDSbiF2WLllWJWdBcoy3DgoadjXU2regfDbMNSUFHInZGZ667HHhHtokHd9XAVg00op4WfpXb
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }

  
}
