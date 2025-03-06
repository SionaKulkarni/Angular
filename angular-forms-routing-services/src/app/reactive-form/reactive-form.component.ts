import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormDialogComponent } from '../form-dialog/form-dialog.component';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  reactiveForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private dialog: MatDialog, private formDataService: FormDataService) {}

  onSubmit() {
    if (this.reactiveForm.valid) {
      this.formDataService.saveData(this.reactiveForm.value);
      this.dialog.open(FormDialogComponent, { data: this.reactiveForm.value });
    }
  }
}
