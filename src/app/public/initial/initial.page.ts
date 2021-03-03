import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  show_login() {
    this.router.navigateByUrl('public/login');
  }

  show_signup() {
    this.router.navigateByUrl('public/signup');
  }

  show_faqs() {
    this.router.navigateByUrl('public/faqs');
  }

  show_contact() {
    this.router.navigateByUrl('public/connect');
  }

}
