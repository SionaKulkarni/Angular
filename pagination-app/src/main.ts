import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PaginationComponent } from './app/pagination/pagination.component';

const routes: Routes = [
  { path: '', component: PaginationComponent }, 
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], 
})
  .catch(err => console.error(err));
