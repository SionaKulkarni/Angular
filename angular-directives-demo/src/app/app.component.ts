import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { AutoFocusDirective } from './auto-focus.directive';

@Component({
  selector: 'app-root',
  imports: [CommonModule,RouterOutlet, HoverHighlightDirective, AutoFocusDirective],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /* ngFor Directive
  items = ['Apple', 'Banana', 'Cherry', 'Date'];*/

 /* ngClass Directive
  isActive = true;*/

  /*HoverHighlightDirective
  title = 'Standalone App';*/

  title = 'Auto Focus Example';
}

  /*export class AppComponent {
  showContent = false;
  toggleContent() {
    Built-in directives ngIf
    this.showContent = !this.showContent;

}
  }*/

