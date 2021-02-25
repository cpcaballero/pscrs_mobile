import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'member/dashboard', icon: 'mail' },
    { title: 'Surgical Videos', url: 'member/surgical-videos', icon: 'mail' },
    { title: 'Instructional Lectures', url: 'member/lectures', icon: 'mail' },
    { title: 'Technology News', url: 'member/tech-news', icon: 'mail' },
    { title: 'Marketplace', url: 'member/marketplace', icon: 'mail' },
    { title: 'Ask The Experts', url: 'member/experts', icon: 'mail' },
    { title: 'About PSCRS', url: 'member/about-pscrs', icon: 'mail' },
    { title: 'Profile Settings', url: 'member/profile-settings', icon: 'mail' },
    { title: 'Feedback & Suggestions', url: 'member/feedbacks', icon: 'mail' },
    { title: 'Connect with Us', url: 'member/connect', icon: 'mail' }
  ];
  constructor() {}
}