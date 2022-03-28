import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

import { UserDetails } from 'src/app/models/user-details';
import { DocService } from 'src/app/services/doc.service';

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

  createDocument(){
    this.usersDetails = [];

    this.seller = JSON.parse(localStorage.getItem('seller')!) as User;
    this.buyer = JSON.parse(localStorage.getItem('buyer')!) as User;
    
    this.usersDetails.push(this.buyer);
    this.usersDetails.push(this.seller);

    this.docService.createDoc(this.usersDetails).subscribe(
      data => {
        data = this.usersDetails;
      },
      error => console.log(error)
    )

    window.close();

  }

  ngOnInit(): void {
  } 
  

}
