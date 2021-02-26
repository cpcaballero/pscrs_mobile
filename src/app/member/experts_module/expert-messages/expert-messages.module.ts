import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpertMessagesPageRoutingModule } from './expert-messages-routing.module';

import { ExpertMessagesPage } from './expert-messages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpertMessagesPageRoutingModule
  ],
  declarations: [ExpertMessagesPage]
})
export class ExpertMessagesPageModule {}
