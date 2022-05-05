import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from 'src/app/models/address';
import { Option } from 'src/app/models/option';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { DocService } from 'src/app/services/doc.service';
import { OperationsService } from 'src/app/services/operations.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {

  buyer: User;
  buyerAdresa: Address;

  seller: User;
  sellerAddress: Address;
  users: User[];
  checkedFiscal: boolean = false;
  checkedMail: boolean = false;
  currentOptions: Option[] = [];

  isLoggedIn:boolean;

  public cumparator: any = {
    address: {},
    identityData:{}
  };

  public vanzator: any = {
    address: {},
    identityData:{},
    car:{}
  };

  constructor(private docService: DocService, private authService: AuthService, 
    private operationService:OperationsService, private router: Router) {

  }

  ngOnInit(): void {

    this.seller = new User();
    this.buyer = new User();

    if (this.authService.getCurrentUser()) {
      this.seller = this.authService.getCurrentUser();
      this.vanzator.name = this.seller.name;
      this.vanzator.email = this.seller.email;
      this.vanzator.phone = this.seller.phone;
      if(this.seller.address != null){
        this.vanzator.address = this.seller.address;
      }
    }

    this.isLoggedIn = this.authService.getLoggedIn();

  }

  checkFiscal(){
    this.checkedFiscal = (this.checkedFiscal) ? true : false;
  }

  checkMail(){
    this.checkedMail = (this.checkedMail) ? true : false;
  }


  async sendContractDetails() {

    this.users = [];

    if(this.authService.getCurrentUser()){
      this.currentOptions = await this.operationService.retrieveOptions().toPromise();
    }
    
    if(this.seller.username == null) {
      this.seller.setAttributes(this.vanzator.name, this.vanzator.email, this.vanzator.phone);
    }

    if(this.seller.address == null){
      this.seller.address = this.vanzator.address;
    }

    this.seller.identityData = this.vanzator.identityData;
    this.seller.sellingCar = this.vanzator.car;

    this.buyer.setAttributes(this.cumparator.name, this.cumparator.email, this.cumparator.phone);
    this.buyer.address = this.cumparator.address; 
    this.buyer.identityData = this.cumparator.identityData;

    this.users.push(this.seller);
    this.users.push(this.buyer);

    localStorage.setItem('seller', JSON.stringify(this.seller));
    localStorage.setItem('buyer', JSON.stringify(this.buyer));

    if(this.checkedFiscal){
      var option = this.currentOptions.find(op => op.id == 2)!;
      option.progress = "In asteptare";
      this.operationService.getCurrentOperation().options.push(option);
      await this.operationService.saveOperationOption(this.operationService.getCurrentOperation().id, option.id, option.progress).toPromise();
    }

    if(this.authService.getLoggedIn()){
      this.docService.createDoc(this.users, this.operationService.getCurrentOperation().id).subscribe(
        data => {
          data = this.users;
          if(this.authService.getCurrentUser()){
            for(var option of this.operationService.getCurrentOperation().options){
              if(option.id == 1){
                this.operationService.updateOptionProgress(this.operationService.getCurrentOperation().id, option.id, "Complete").toPromise()
              }
            }
          }
        },
        error => console.log(error)
      )
    }else{
      this.docService.createDoc(this.users, -1).subscribe(
        data => {
          data = this.users;
        },
        error => console.log(error)
      )
    }

    if(this.checkedMail){
      this.docService.sendDocToMail("Contract-auto " + this.seller.name +" "+ this.buyer.name+".docx").subscribe(
        data => data = "Contract-auto " + this.seller.name +" "+ this.buyer.name+".docx"
      )
    }

    if(this.authService.getCurrentUser()){
      this.router.navigate(["/details"])
    }else{
      this.router.navigate(["/payment"])
    }
    

  }

}
