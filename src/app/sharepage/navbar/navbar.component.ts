import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChosenDocument } from 'src/app/models/chosen-document';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  user: User;
  logOutUser: User;

  constructor(private authService: AuthService, private router: Router, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    
  }

  isLoggedIn() {
    this.user = new User();
    this.user = this.authService.getCurrentUser();
    return this.authService.getLoggedIn();
  }

  logOut() {
    this.authService.setLoggedIn(false);
    this.router.navigate([""]);
    this.authService.setCurrentUser(this.logOutUser);
    return this.authService.getLoggedIn();
  }

  seeOperations(){
    this.router.navigate(['/details']);
  }

  goToContact(){
    this.viewportScroller.scrollToAnchor('contact')
  }

  goToAbout(){
    this.viewportScroller.scrollToAnchor('about');
  }

  goToHome(){
    this.viewportScroller.scrollToAnchor('hero');
  }
}
