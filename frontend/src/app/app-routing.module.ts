import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemShopComponent } from './pages/item-shop/item-shop.component';

const routes: Routes = [
  // { path: 'socket-events', loadChildren: () => import('./pages/socket-events/socket-events.module').then(m => m.SocketEventsModule) },
  { path: 'tasks', loadChildren: () => import('./pages/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'tv', loadChildren: () => import('./pages/tv/tv.module').then(m => m.TvModule) },
  { path: 'mobile', loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobileModule) },
  { path: 'table', loadChildren: () => import('./pages/table/table.module').then(m => m.TableModule) },
  { path: 'wall', loadChildren: () => import('./pages/wall/wall.module').then(m => m.WallModule) },
  { path: 'item-shop', component: ItemShopComponent},
  { path: '**', redirectTo: 'tasks', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
