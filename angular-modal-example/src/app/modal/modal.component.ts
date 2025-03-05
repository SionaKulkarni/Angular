import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true, // Add this for standalone component
  imports: [NgIf], // Import NgIf to use *ngIf
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