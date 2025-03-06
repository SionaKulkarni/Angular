import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private formData: any = {};

  saveData(data: any) {
    this.formData = data;
    console.log('Saved Data:', this.formData);
  }

  getData() {
    return this.formData;
  }
}
