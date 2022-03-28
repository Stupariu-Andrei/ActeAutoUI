import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) { }

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
    return this.authService.getLoggedIn();
  }
}
