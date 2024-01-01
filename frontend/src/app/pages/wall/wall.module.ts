import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WallRoutingModule } from './wall-routing.module';
import { WallComponent } from './wall.component';


@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    WallRoutingModule
  ]
})
export class WallModule { }
