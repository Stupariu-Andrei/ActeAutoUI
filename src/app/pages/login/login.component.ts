import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginSelected: boolean;
  loginForm: FormGroup = new FormGroup({});
  registerForm: FormGroup = new FormGroup({});
  username: string;
  password: string;

  user: User;

  loggedIn: boolean;

  redirect = window.history.state;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {

    this.isLoginSelected = true;
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });

    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      username: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      repeatEmail: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: [null, [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]],
      confirmPassword: [null, [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{5,}')]]
    })

  }

  async logInUser() {
    this.user = new User();
    this.user.username = this.loginForm.controls['username'].value;
    this.user.password = this.loginForm.controls['password'].value;

    this.loggedIn = await this.authService.loginUser(this.user).toPromise();
    if (this.loggedIn) {
      this.user = await this.authService.getUserByUsername(this.loginForm.controls['username'].value).toPromise();
      this.authService.setLoggedIn(this.loggedIn);
      this.authService.setCurrentUser(this.user);
      this.location.back();
    }else{
      alert("Username or password are incorrect!");
    }
  }

  changeForm() {
    this.isLoginSelected = !this.isLoginSelected;
  }

  async registerUser() {
    this.user = new User();
    if (this.registerForm.controls['password'].value == this.registerForm.controls['confirmPassword'].value) {
      if (this.registerForm.controls['email'].value == this.registerForm.controls['repeatEmail'].value) {
        this.user = new User();
        this.user.name = this.registerForm.controls['name'].value;
        this.user.username = this.registerForm.controls['username'].value;
        this.user.password = this.registerForm.controls['password'].value;
        this.user.email = this.registerForm.controls['email'].value;

        var hasRegistred = await this.authService.registerUser(this.user).toPromise();
        console.log(hasRegistred);
        if (!hasRegistred) {
          alert('User registred succesfully');
          this.authService.setCurrentUser(this.user);
          this.authService.setLoggedIn(true);
          this.router.navigate(['']);
        }
      } else {
        alert('Your email is not match!');
      }
    } else {
      alert('Your password and confirm password does not match');
    }
  }

}
