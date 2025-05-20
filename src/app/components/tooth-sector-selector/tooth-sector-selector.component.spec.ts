import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToothSectorSelectorComponent } from './tooth-sector-selector.component';

describe('ToothSectorSelectorComponent', () => {
  let component: ToothSectorSelectorComponent;
  let fixture: ComponentFixture<ToothSectorSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToothSectorSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToothSectorSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
