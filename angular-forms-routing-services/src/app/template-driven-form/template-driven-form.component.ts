import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  user = { name: '', email: '' };

  constructor(private dialog: MatDialog, private formDataService: FormDataService) {}

  onSubmit(form: any) {
    if (form.valid) {
      this.formDataService.saveData(this.user);
      this.dialog.open(FormDialogComponent, { data: this.user });
    }
  }
}
