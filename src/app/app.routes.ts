import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientHistoryFormComponent } from './components/patient-history-form/patient-history-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'NewPatientRegistry', component: PatientHistoryFormComponent }
];
