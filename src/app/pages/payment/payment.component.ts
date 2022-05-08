import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payuform: any = {};

  seller: User;
  disablePaymentButton: boolean = true;

  constructor(private authService: AuthService, private paymentService:PaymentService) {

  }

  ngOnInit(): void {
    if(this.authService.getLoggedIn()){
      this.seller = this.authService.getCurrentUser();
    }else{
      this.seller = JSON.parse(localStorage.getItem('seller')!) as User;
    }

    this.payuform.firstname = this.seller.name;
    this.payuform.email = this.seller.email;
    this.payuform.phone = this.seller.phone;
    this.payuform.productinfo = "Contract vanzare-cumparare";
    this.payuform.amount = 100;

  }

  async confirmPayment() {

    const paymentPayload = {
      email: this.payuform.email,
      name: this.payuform.firstname,
      phone: this.payuform.phone,
      productInfo: this.payuform.productinfo,
      amount: this.payuform.amount
    }

     this.paymentService.confirmPayment(paymentPayload).subscribe(
      data => {
        this.payuform.txnid = data.txnId;
        this.payuform.surl = data.sUrl;
        this.payuform.furl = data.furl;
        this.payuform.key = data.key;
        this.payuform.hash = data.hash;
        this.disablePaymentButton = false;
      }, error => {
        console.log(error);
      })

      console.log(paymentPayload);

  }


}
