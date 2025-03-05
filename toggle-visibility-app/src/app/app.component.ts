import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule]
})
export class AppComponent {
  isVisible = false;
  isSpecial = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
}
