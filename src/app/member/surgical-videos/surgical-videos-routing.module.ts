import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurgicalVideosPage } from './surgical-videos.page';

const routes: Routes = [
  {
    path: '',
    component: SurgicalVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurgicalVideosPageRoutingModule {}
