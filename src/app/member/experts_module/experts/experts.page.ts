import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.page.html',
  styleUrls: ['./experts.page.scss'],
})
export class ExpertsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  show_convo() {
    this.router.navigateByUrl('member/expert-messages');
  }

}
