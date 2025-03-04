import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() showModal: boolean = false; // Control visibility
  @Output() close = new EventEmitter<void>(); // Emit event to close modal

  closeModal() {
    this.close.emit();
  }
}