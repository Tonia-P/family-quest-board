import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { MobileHomepageComponent } from './mobile-homepage/mobile-homepage.component';
import { MobileQuestDetailsComponent } from './mobile-quest-details/mobile-quest-details.component';

const routes: Routes = [
  { path: '', component: MobileComponent, children: [
    { path: 'home', component: MobileHomepageComponent},
    { path: 'quest/:id', component: MobileQuestDetailsComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
