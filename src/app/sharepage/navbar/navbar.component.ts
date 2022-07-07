import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private viewportScroller: ViewportScroller) { }

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

  goToAnchor(anchorName: string){
    this.router.navigate(['/home'], {fragment: anchorName});
    // setTimeout(() => {
    //   this.viewportScroller.scrollToAnchor(anchorName);
    // }, 1000);
 }
  

  goToPage(pageName:string){
    this.router.navigate([pageName]);
  }

  startOperation(){
    this.router.navigate(['selling-operation']);
  }

}
