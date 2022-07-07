import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})

export class LoginnComponent implements OnInit {

  username: string;
  password: string;

  user:User;

  loggedIn: boolean;

  redirect  = window.history.state;

  constructor(private authService: AuthService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.user = new User();
  }

  async checkLogin(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.loggedIn = false;

    this.loggedIn = await this.authService.loginUser(this.user).toPromise();
    
    if(this.loggedIn){
      this.user = await this.authService.getUserByUsername(this.username).toPromise();
      this.authService.setLoggedIn(this.loggedIn);
      this.authService.setCurrentUser(this.user);
      this.location.back();
    }

  }

}
