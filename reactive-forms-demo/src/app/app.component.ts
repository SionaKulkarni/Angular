import { Component } from '@angular/core';
import { RegisterFormComponent } from './register-form/register-form.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterFormComponent],
  template: `<app-register-form></app-register-form>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reactive-forms-demo';
}
