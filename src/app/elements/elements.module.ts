import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  exports: [
    TimesDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ]
})
export class ElementsModule { }
