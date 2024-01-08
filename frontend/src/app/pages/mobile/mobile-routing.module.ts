import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileQuestComponent } from './mobile-quest/mobile-quest.component';

const routes: Routes = [
  { path: '', component: MobileComponent, children: [
    { path: 'home', component: MobileHomepageComponent},
    { path: 'quest', component: MobileQuestComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
