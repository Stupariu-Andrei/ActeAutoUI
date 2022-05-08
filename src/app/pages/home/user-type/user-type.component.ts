import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {

  popupDisplay: string;

  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
    this.popupDisplay = "display";
    localStorage.setItem("popupDisplay",this.popupDisplay);
  }

  dialogClose(){

    if(localStorage.getItem("popupDisplay") == "display"){
      this.popupDisplay = "hide";
      localStorage.setItem("popupDisplay",this.popupDisplay);
    }
    
    this.dialog.closeAll();

  }

}
