import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';  
import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
import { SharedModule } from '../shared/shared.module';
import { TableUserComponent } from './table-user/table-user.component';


@NgModule({
  declarations: [
    TableComponent,
    TableUserComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    DragDropModule,
    SharedModule
  ]
})
export class TableModule { }
