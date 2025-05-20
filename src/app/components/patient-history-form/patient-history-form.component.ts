import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ToothSectorSelectorComponent } from '../tooth-sector-selector/tooth-sector-selector.component';

@Component({
  selector: 'app-patient-history-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    CommonModule,
    MatCheckboxModule,
    ToothSectorSelectorComponent
  ],
  templateUrl: './patient-history-form.component.html',
  styleUrl: './patient-history-form.component.css'
})

export class PatientHistoryFormComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  currentStep = 1;
  maxSteps = 7;
  dentalTeethMap = new Map<number, number[]>(); // toothNumber -> selectedSectors[]
toothLines: number[][] = [
  [18,17,16,15,14,13,12,11,21,22,23,24,25,26,27,28],  // línea 1: 16 dientes
  [55,54,53,52,51,61,62,63,64,65],                    // línea 2: 10 dientes
  [85,84,83,82,81,71,72,73,74,75],                    // línea 3: 10 dientes
  [48,47,46,45,44,43,42,41,31,32,33,34,35,36,37,38]   // línea 4: 16 dientes
];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      // Página 1: Datos Personales
      firstName: ['', Validators.required],
      lastNamePaternal: ['', Validators.required],
      lastNameMaternal: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      age: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      phoneLandline: [''],
      phoneMobile: [''],
      occupation: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: ['', Validators.required],
        postalCode: ['', Validators.required],
        municipality: ['', Validators.required],
        state: ['', Validators.required],
      }),
      observations: [''],

      // Página 2: Consulta actual
      reasonForConsultation: ['', Validators.required],
      currentIllnessDate: ['', Validators.required],
      previousTreatment: [''],

      // Página 3: Antecedentes Patológicos
      pathologicalHistory: this.fb.group({
        rheumaticFever: [false],
        cardiopathies: [false],
        pepticUlcer: [false],
        heartAttacks: [false],
        gastritis: [false],
        hernias: [false],
        allergies: [false],
        allergiesDetails: [''],
        diabetes: [false],
        anemia: [false],
        varicoseVeins: [false],
        measles: [false],
        dizziness: [false],
        scarletFever: [false],
        hepatitis: [false],
        hepatitisDetails: [''],
        chickenpox: [false],
        hiv: [false],
        fainting: [false],
        hpv: [false],
        headaches: [false],
        otherCondition: [''],
      }),

      // Página 4: Antecedentes Patológicos
      familyMedicalHistory: this.fb.group({
        hypertension: [false],
        hypotension: [false],
        diabetes: [false],
        mentalIllness: [false],
        kidneyDisease: [false],
        syphilis: [false],
        cancer: [false],
        otherImportantDisease: [''],
        observations: ['']
      }),


      nonPathologicalData: this.fb.group({
        smokes: [false],
        smokingQuantity: [''],
        drinksAlcohol: [false],
        alcoholFrequencyAndQuantity: [''],
        usesMedicationFrequently: [false],
        medicationDetails: [''],
        usesOtherSubstances: [''],
        observations: [''],
      }),

      // Datos Dentales
      dentalData: this.fb.group({
        tmjClicking: [false],
        tmjCrepitation: [false],
        musclePain: [false],
        earPain: [false],
        difficultyOpeningClosing: [false],
        muscleFatigue: [false],
        difficultyChewing: [false],
        tmjPain: [false],
        observations: [''],
      }),

      toothSectorStatuses: this.fb.array([]),
      toothSectorObservations: ['']
    });

    this.initToothSectorStatuses();
  }
/* 
  initToothSectorStatuses(): void {
    const toothNumbersLines = [
      [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28],  // línea 1
      [55, 54, 53, 52, 51, 61, 62, 63, 64, 65],                    // línea 2
      [85, 84, 83, 82, 81, 71, 72, 73, 74, 75],                    // línea 3
      [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38]   // línea 4
    ];

    const formArray = this.toothSectorStatuses;
    toothNumbersLines.forEach(line => {
      line.forEach(toothNum => {
        formArray.push(this.fb.group({
          toothNumber: [toothNum],
          sectors: [[]]
        }));
      });
    });
  } */

  initToothSectorStatuses(): void {
    const formArray = this.toothSectorStatuses;
    this.toothLines.forEach(line => {
      line.forEach(toothNum => {
        formArray.push(this.fb.group({
          toothNumber: [toothNum],
          sectors: [[]]
        }));
      });
    });
  }

  getToothStatusControl(toothNumber: number) {
    return this.toothSectorStatuses.controls.find(ctrl => ctrl.get('toothNumber')?.value === toothNumber);
  }

  countLinesSum(index: number): number {
    const counts = [16, 10, 10, 16];
    let sum = 0;
    for (let i = 0; i < index; i++) {
      sum += counts[i];
    }
    return sum;
  }

  nextStep(): void {
    if (this.currentStep < this.maxSteps) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  enviar(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get toothSectorStatuses(): FormArray {
    return this.form.get('toothSectorStatuses') as FormArray;
  }

  addTooth(toothNumber: number): void {
    const group = this.fb.group({
      toothNumber: [toothNumber],
      sectors: [[]],
    });
    this.toothSectorStatuses.push(group);
  }

  onToothSectorChange(index: number, selectedSectors: number[]): void {
    const control = this.toothSectorStatuses.at(index);
    if (control) {
      control.get('sectors')?.setValue(selectedSectors);
      console.log(`Tooth ${control.get('toothNumber')?.value} sectores seleccionados:`, selectedSectors);
    } else {
      console.warn('Control no encontrado en index:', index);
    }
  }

  range(start: number, end: number, step = 1): number[] {
    const rangeArr = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) rangeArr.push(i);
    } else {
      for (let i = start; i >= end; i += step) rangeArr.push(i);
    }
    return rangeArr;
  }

  getToothSectors(toothNumber: number): number[] {
    return this.dentalTeethMap.get(toothNumber) || [];
  }

}