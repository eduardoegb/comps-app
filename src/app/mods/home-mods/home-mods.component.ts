import { Component } from '@angular/core';

@Component({
  selector: 'app-home-mods',
  templateUrl: './home-mods.component.html',
  styleUrls: ['./home-mods.component.css']
})
export class HomeModsComponent {
  // @ts-ignore
  showModal: boolean;

  onShowModalClick() {
    this.showModal = true;
  }

  onCloseModal() {
    this.showModal = false;
  }
}
