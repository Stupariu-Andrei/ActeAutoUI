import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name:string;
  username: string;
  password: string;
  confirmPassword:string;
  email:string;

  user:User;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async registerUser(){
    if(this.password == this.confirmPassword){
      this.user = new User();
      this.user.name = this.name;
      this.user.username = this.username;
      this.user.password = this.password;
      this.user.email = this.email;

      var hasRegistred = await this.authService.registerUser(this.user).toPromise();
      if(!hasRegistred){
        alert('User registred succesfully');
        this.authService.setCurrentUser(this.user);
        this.authService.setLoggedIn(true);
        this.router.navigate(['']);
      }
    }else{
      alert('Password dont match with confirm password!');
    }
    
  }

}
