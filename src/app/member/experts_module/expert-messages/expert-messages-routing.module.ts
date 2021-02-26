import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpertMessagesPage } from './expert-messages.page';

const routes: Routes = [
  {
    path: '',
    component: ExpertMessagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpertMessagesPageRoutingModule {}
