import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  standalone: true,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() name: string = '';  // Input binding from parent component
}
