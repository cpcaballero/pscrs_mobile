import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  background: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.background = "../../../assets/system/images/background.png";
  }

  show_surgical() {
    this.router.navigateByUrl('member/surgical-videos');
  }

  show_lectures() {
    this.router.navigateByUrl('member/lectures');
  }

  show_news() {
    this.router.navigateByUrl('member/tech-news');
  }

  show_market() {
    this.router.navigateByUrl('member/marketplace');
  }

  show_expert() {
    this.router.navigateByUrl('member/experts');
  }

  show_about() {
    this.router.navigateByUrl('member/about-pscrs');
  }

  show_profile() {
    this.router.navigateByUrl('member/profile-settings');
  }

  show_feedback() {
    this.router.navigateByUrl('member/feedbacks');
  }

  show_connect() {
    this.router.navigateByUrl('member/connect');
  }

}
