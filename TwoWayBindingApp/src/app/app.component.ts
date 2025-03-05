import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Required for ngModel
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [CommonModule, FormsModule],  // ✅ Ensure FormsModule is imported here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
}
