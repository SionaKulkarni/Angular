import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {
  currentDate = new Date();
  price = 12345.6789;
  message = 'hello angular world';
}
