import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutPscrsPageRoutingModule } from './about-pscrs-routing.module';

import { AboutPscrsPage } from './about-pscrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutPscrsPageRoutingModule
  ],
  declarations: [AboutPscrsPage]
})
export class AboutPscrsPageModule {}
