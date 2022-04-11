import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

import { map } from 'rxjs/operators';

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

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  async checkLogin(){
    this.user.username = this.username;
    this.user.password = this.password;
    this.loggedIn = false;

    this.loggedIn = await this.authService.loginUser(this.user).toPromise();
    
    this.user = await this.authService.getUserByUsername(this.username).toPromise();

    if(this.loggedIn){
      this.router.navigate(['']);
      this.authService.setLoggedIn(this.loggedIn);
      this.authService.setCurrentUser(this.user);
    }

    console.log(this.authService.loggedIn);
    

  }

}
