import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet], 
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/">Angular Forms</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" routerLink="/template-form">Template Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" routerLink="/reactive-form">Reactive Form</a>
        </li>
      </ul>
    </nav>

    <div class="container">
      <router-outlet></router-outlet> <!-- ✅ Fixed -->
    </div>
  `,
  styles: []
})
export class AppComponent {}
