import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  // @ts-ignore
  @Input() show: boolean;
  @Output() close = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onClose() {
    this.close.emit();
  }
}
