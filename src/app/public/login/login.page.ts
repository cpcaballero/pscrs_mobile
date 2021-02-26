import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }


  get email() {
    return this.LoginForm.get('email');
  }
  get password() {
    return this.LoginForm.get('password');
  }

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password must be atleast 6 characters.' },
      { type: 'maxLength', message: 'Password must not exceed 30 characters' },
    ],
  };

  LoginForm = this.formBuilder.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
      ]
    ],
  });

  ngOnInit() {

  }

  login(){
    this.router.navigateByUrl('member/dashboard');
  }

  show_forgot(){
    this.router.navigateByUrl('public/forgot');
  }

  show_signup(){
    this.router.navigateByUrl('public/signup');
  }

}
