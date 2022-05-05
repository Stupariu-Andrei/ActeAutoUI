import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from 'src/app/services/auth.service';
import { UserTypeComponent } from 'src/app/pages/home/user-type/user-type.component';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public loggedIn: boolean;

  constructor(private dialog: MatDialog, private authService: AuthService, private router: Router, private viewportScroller: ViewportScroller) {

  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((isLoggedIn) => {
      this.loggedIn = isLoggedIn;
    });

    if (localStorage.getItem("popupDisplay") === "display" && this.authService.loggedIn) {
      this.dialog.open(UserTypeComponent);
    } else {
      localStorage.setItem("popupDisplay", "hide");
    }
  }

  startOperation() {
    if (this.loggedIn) {
      this.router.navigate(['selling-operation']);
    } else {
      this.viewportScroller.scrollToAnchor('user_type');
    }
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  goToRegister(){
    this.router.navigate(['register'])
  }

}
