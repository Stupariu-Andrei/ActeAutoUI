import { Component, Input, OnInit } from '@angular/core';

import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { UserDetails } from 'src/app/models/user-details';
import { AuthService } from 'src/app/services/auth.service';
import { DocService } from 'src/app/services/doc.service';

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

  public cumparator: any = {};
  public vanzator: any = {};

  constructor(private docService: DocService) {

  }

  ngOnInit(): void {
  }

  getDetails() {
    this.buyer = new User();
    this.seller = new User();

    this.buyerAdresa = new Address(this.cumparator.strada, this.cumparator.numar, this.cumparator.bloc, this.cumparator.scara,
      this.cumparator.apartament, this.cumparator.judet, this.cumparator.tara, this.cumparator.cod_postal,
      this.cumparator.oras, this.cumparator.etaj);

    this.buyer.setAttributes(this.cumparator.name, this.cumparator.username, this.cumparator.email, this.cumparator.phone,
              this.buyerAdresa);
              
    this.sellerAddress = new Address(this.vanzator.strada, this.vanzator.numar, this.vanzator.bloc, this.vanzator.scara,
      this.vanzator.apartament, this.vanzator.judet, this.vanzator.tara, this.vanzator.cod_postal,
      this.vanzator.oras, this.vanzator.etaj);
    this.seller.setAttributes(this.vanzator.name, this.vanzator.username, this.vanzator.email, this.vanzator.phone,
              this.sellerAddress);

    this.docService.setBuyerDetails(this.buyer);
    this.docService.setSellerDetails(this.seller);

    localStorage.setItem('seller',JSON.stringify(this.seller));
    localStorage.setItem('buyer',JSON.stringify(this.buyer));

      console.log(this.buyer);
      console.log(this.seller);

  }

}
