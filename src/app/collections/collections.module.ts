import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from 'src/app/elements/elements.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule,
    ElementsModule
  ]
})
export class CollectionsModule { }
