import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvQuestbookComponent } from './tv-questbook/tv-questbook.component';
import { TvMenuComponent } from './tv-menu/tv-menu.component';
import { TvShopslistComponent } from './tv-shopslist/tv-shopslist.component';
import { TvShopComponent } from './tv-shop/tv-shop.component';
import { TvComponent } from './tv.component';

const routes: Routes = [
    // { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
    { path: '', component: TvComponent, children: [
        { path: 'home', component: TvMenuComponent },
    { path: 'questbook',component: TvQuestbookComponent},
    { path: 'shopslist', component: TvShopslistComponent},
    { path: 'shop/:id', component: TvShopComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]}
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TvRoutingModule { }
