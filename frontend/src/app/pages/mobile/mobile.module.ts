import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileQuestDetailsComponent } from './mobile-quest-details/mobile-quest-details.component';
import { MobileAddQuestComponent } from './mobile-add-quest/mobile-add-quest.component';
import { MobileShopslistComponent } from './mobile-shopslist/mobile-shopslist.component';
import { MobileShopComponent } from './mobile-shop/mobile-shop.component';


@NgModule({
  declarations: [
    MobileComponent,
    MobileHomepageComponent,
    MobileQuestDetailsComponent,
    MobileAddQuestComponent,
    MobileShopslistComponent,
    MobileShopComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule
  ]
})
export class MobileModule { }
