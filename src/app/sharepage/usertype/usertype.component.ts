import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})
export class UsertypeComponent implements OnInit {

  popupDisplay: string;

  constructor(private dialog : MatDialog, private authService: AuthService) { }

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
