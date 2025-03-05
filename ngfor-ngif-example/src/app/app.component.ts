import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = ['Apple', 'Banana', 'Cherry'];
  isLoggedIn = true;

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }
}
