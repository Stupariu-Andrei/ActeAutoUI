import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { OperationsService } from 'src/app/services/operations.service';

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

  constructor(private authService: AuthService, private router: Router, private operationService:OperationsService) { }

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
      this.router.navigate(['']);
    }

  }

}
