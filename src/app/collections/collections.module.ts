import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsModule } from 'src/app/elements/elements.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabItemComponent } from './tabs/tab-item/tab-item.component';


@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent,
    TabItemComponent
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
