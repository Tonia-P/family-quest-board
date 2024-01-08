import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileQuestRoutingModule } from './mobile-quest-routing.module';
import { MobileQuestComponent } from './mobile-quest.component';
import { MobileQuestAddComponent } from './mobile-quest-add/mobile-quest-add.component';
import { MobileQuestDetailsComponent } from './mobile-quest-details/mobile-quest-details.component';


@NgModule({
  declarations: [
    MobileQuestComponent,
    MobileQuestAddComponent,
    MobileQuestDetailsComponent
  ],
  imports: [
    CommonModule,
    MobileQuestRoutingModule
  ]
})
export class MobileQuestModule { }
