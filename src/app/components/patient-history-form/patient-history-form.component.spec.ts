import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientHistoryFormComponent } from './patient-history-form.component';

describe('PatientHistoryFormComponent', () => {
  let component: PatientHistoryFormComponent;
  let fixture: ComponentFixture<PatientHistoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientHistoryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientHistoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
