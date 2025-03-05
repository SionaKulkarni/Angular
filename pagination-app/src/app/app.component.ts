import { Component } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PaginationComponent, RouterModule],
  template: `<app-pagination></app-pagination>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagination-app';
}
