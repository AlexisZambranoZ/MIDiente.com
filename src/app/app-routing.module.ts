// app-routing.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientHistoryFormComponent } from './components/patient-history-form/patient-history-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'NewPatientRegistry', component: PatientHistoryFormComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
