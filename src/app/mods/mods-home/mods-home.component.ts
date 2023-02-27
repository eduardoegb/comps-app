import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent {
  // @ts-ignore
  showModal: boolean;

  onShowModalClick() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
