import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurgicalVideosPageRoutingModule } from './surgical-videos-routing.module';

import { SurgicalVideosPage } from './surgical-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurgicalVideosPageRoutingModule
  ],
  declarations: [SurgicalVideosPage]
})
export class SurgicalVideosPageModule {}
