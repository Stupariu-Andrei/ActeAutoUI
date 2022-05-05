import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import { DocService } from 'src/app/services/doc.service';
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  usersDetails: User[];

  seller: any;
  buyer:any;
  
  constructor(private docService:DocService) { }

  ngOnInit(): void {
  } 

  downloadDoc(){
    this.usersDetails = [];

    this.seller = JSON.parse(localStorage.getItem('seller')!) as User;
    this.buyer = JSON.parse(localStorage.getItem('buyer')!) as User;

    this.docService.downloadDoc("Contract-auto " + this.seller.name +" "+ this.buyer.name+".docx").subscribe(
      blob => saveAs(blob,"Contract-auto " + this.seller.name +" "+ this.buyer.name+".docx" ),
      error => console.log(error)
    );

    console.log(this.usersDetails);

  }
  

}

