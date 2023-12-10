import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TvRoutingModule } from './tv-routing.module';
import { TvShopslistComponent } from './tv-shopslist/tv-shopslist.component';
import { TvShopComponent } from './tv-shop/tv-shop.component';
import { TvHeaderUserComponent } from './tv-header/tv-header-user/tv-header-user.component';
import { TvHeaderCurrencyComponent } from './tv-header/tv-header-currency/tv-header-currency.component';
import { TvHeaderComponent } from './tv-header/tv-header.component';
import { TvComponent } from './tv.component';
import { TvQuestbookListComponent } from './tv-questbook/tv-questbook-list/tv-questbook-list.component';
import { TvQuestbookItemComponent } from './tv-questbook/tv-questbook-item/tv-questbook-item.component';
import { TvQuestbookDetailsComponent } from './tv-questbook/tv-questbook-details/tv-questbook-details.component';
import { TvQuestbookComponent } from './tv-questbook/tv-questbook.component';
import { TvShopItemComponent } from './tv-shop/tv-shop-item/tv-shop-item.component';
import { TvShopItemslistComponent } from './tv-shop/tv-shop-itemslist/tv-shop-itemslist.component';
import { TvShopDescriptionComponent } from './tv-shop/tv-shop-description/tv-shop-description.component';



@NgModule({
  imports: [
    CommonModule,
    TvRoutingModule
  ],
  declarations: [
    TvComponent,
    TvQuestbookComponent,
    TvShopslistComponent,
    TvShopComponent,
    TvHeaderUserComponent,
    TvHeaderCurrencyComponent,
    TvHeaderComponent,
    TvQuestbookListComponent,
    TvQuestbookItemComponent,
    TvQuestbookDetailsComponent,
    TvShopItemComponent,
    TvShopItemslistComponent,
    TvShopDescriptionComponent
  ]
})
export class TvModule { }
