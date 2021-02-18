import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutPscrsPage } from './about-pscrs.page';

const routes: Routes = [
  {
    path: '',
    component: AboutPscrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutPscrsPageRoutingModule {}
