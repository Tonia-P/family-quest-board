import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileRoutingModule } from './mobile-routing.module';
import { MobileComponent } from './mobile.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileQuestDetailsComponent } from './mobile-quest/mobile-quest-details/mobile-quest-details.component';
import { MobileShopslistComponent } from './mobile-shopslist/mobile-shopslist.component';
import { MobileShopComponent } from './mobile-shop/mobile-shop.component';
import { MobileHeaderComponent } from './mobile-header/mobile-header.component';
import { SharedModule } from '../shared/shared.module';
import { MobileBottomNavbarComponent } from './mobile-bottom-navbar/mobile-bottom-navbar.component';
import { MobileBottomNavbarItemComponent } from './mobile-bottom-navbar/mobile-bottom-navbar-item/mobile-bottom-navbar-item.component';
import { MobileQuestComponent } from './mobile-quest/mobile-quest.component';


@NgModule({
  declarations: [
    MobileComponent,
    MobileHomepageComponent,
    MobileQuestDetailsComponent,
    MobileShopslistComponent,
    MobileShopComponent,
    MobileHeaderComponent,
    MobileBottomNavbarComponent,
    MobileBottomNavbarItemComponent,
    MobileQuestComponent
  ],
  imports: [
    CommonModule,
    MobileRoutingModule,
    SharedModule
  ]
})
export class MobileModule { }
