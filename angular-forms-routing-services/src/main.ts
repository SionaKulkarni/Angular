import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Import Components
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TemplateDrivenFormComponent } from './app/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './app/reactive-form/reactive-form.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'template-form', component: TemplateDrivenFormComponent },  //  Fixed
      { path: 'reactive-form', component: ReactiveFormComponent },
    ]),
    importProvidersFrom(FormsModule, ReactiveFormsModule) // Fix Forms Import
  ]
}).catch(err => console.error(err));
