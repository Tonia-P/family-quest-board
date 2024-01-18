import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileQuestComponent } from './mobile-quest/mobile-quest.component';
import { MobileQuestDetailsComponent } from './mobile-quest/mobile-quest-details/mobile-quest-details.component';
import { MobileQuestAddComponent } from './mobile-quest/mobile-quest-add/mobile-quest-add.component';
import { MobileShopComponent } from './mobile-shop/mobile-shop.component';
import { MobileShopslistComponent } from './mobile-shopslist/mobile-shopslist.component';

const routes: Routes = [
  { path: '', component: MobileComponent, children: [
    { path: 'home', component: MobileHomepageComponent},
    { path: 'quest', component: MobileQuestComponent},
    { path: 'view/:id', component: MobileQuestDetailsComponent},
    { path: 'add', component: MobileQuestAddComponent},
    { path: 'shoplist', component: MobileShopslistComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
