import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ModsRoutingModule } from './mods-routing.module';
import { HomeModsComponent } from './home-mods/home-mods.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    HomeModsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
