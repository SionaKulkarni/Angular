import { Component, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { LifecycleDirectiveDirective } from './lifecycle-directive.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [LifecycleDemoComponent, LifecycleDirectiveDirective] // No BrowserModule here
})
export class AppComponent { 
  showDirective: boolean = true;

  destroyDirective() {
    this.showDirective = false;
  }
}
