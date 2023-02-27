import { Component, Input } from '@angular/core';
import { AccordionItem } from 'src/app/mods/accordion/accordion.interfaces';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent {
  @Input() items: AccordionItem[] = [];

  openedItemIdx = 0;

  onClick(i: number) {
    if (i === this.openedItemIdx) {
      this.openedItemIdx = -1;
    } else {
      this.openedItemIdx = i;
    }
  }
}
