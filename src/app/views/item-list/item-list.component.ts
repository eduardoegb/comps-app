import { Component, Input } from '@angular/core';
import { Item } from 'src/app/views/item-list/item-list.interfaces';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() data: Item[] = [];
}
