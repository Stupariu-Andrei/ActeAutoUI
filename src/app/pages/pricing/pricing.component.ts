import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { PaymentService } from 'src/app/services/payment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router, 
    private paymentService: PaymentService, private location: Location) { }

  ngOnInit(): void {

    this.isLoggedIn = this.authService.getLoggedIn();
    this.paymentService.invokeStripe();
  }

  goToPage(pageName: string){
    this.router.navigate([pageName]);
  } 

  async makePayment(amonut: number, navigateTo: string){

    var operations_counter = await this.authService.getUserOperationsCounter(this.authService.getCurrentUser().id).toPromise();
    console.log(operations_counter);

    if(amonut == 30){
      operations_counter = operations_counter + 1;
    }

    if(amonut == 50){
      operations_counter = operations_counter + 3;
    }

    if(amonut == 90){
      operations_counter = operations_counter + 5;
    }

    this.paymentService.makePayment(amonut, navigateTo);

    await this.authService.updateUserOperationsCounter(this.authService.getCurrentUser().id, operations_counter).toPromise();

  }


}
