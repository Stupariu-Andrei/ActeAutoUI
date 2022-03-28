import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { DocService } from 'src/app/services/doc.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payuform: any = {};

  userDetails: User;
  disablePaymentButton: boolean = true;

  msg: string;

  constructor(private http: HttpClient, private docServie: DocService, private paymentService:PaymentService) {

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

  }


  ngOnInit(): void {
    this.userDetails = this.docServie.getBuyerDetails();
    this.payuform.firstname = this.userDetails.name;
    this.payuform.email = this.userDetails.email;
    this.payuform.phone = this.userDetails.phone;
    this.payuform.productinfo = "Contract vanzare-cumparare";
    this.payuform.amount = "100";

  }

}
