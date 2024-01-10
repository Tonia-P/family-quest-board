import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileQuestDetailsComponent } from './mobile-quest-details/mobile-quest-details.component';
import { MobileQuestAddComponent } from './mobile-quest-add/mobile-quest-add.component';
import { MobileQuestComponent } from './mobile-quest.component';


const routes: Routes = [
  { path: '', component: MobileQuestComponent, children: [
    { path: 'view/:id', component: MobileQuestDetailsComponent},
    { path: 'add', component: MobileQuestAddComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileQuestRoutingModule { }
