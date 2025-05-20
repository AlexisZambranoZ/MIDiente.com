import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component'; 
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms'; 
import { PatientHistoryFormComponent } from './components/patient-history-form/patient-history-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    PatientHistoryFormComponent,
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
})
export class AppModule { }
