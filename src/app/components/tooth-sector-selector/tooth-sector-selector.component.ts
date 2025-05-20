import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tooth-sector-selector',
  templateUrl: './tooth-sector-selector.component.html',
  styleUrls: ['./tooth-sector-selector.component.css'],
  standalone: true,
})

export class ToothSectorSelectorComponent {
  @Input() selectedSectors: number[] = [];
  @Output() sectorToggled = new EventEmitter<number>();
  @Output() selectionChange = new EventEmitter<number[]>();
  @Input() toothNumber!: number;


  toggleSector(sector: number) {
    const index = this.selectedSectors.indexOf(sector);
    if (index > -1) {
      this.selectedSectors.splice(index, 1);
    } else {
      this.selectedSectors.push(sector);
    }
    this.sectorToggled.emit(sector);

    // Emitir la selección actualizada para que el padre la reciba
    this.selectionChange.emit([...this.selectedSectors]); // usar copia para evitar referencia directa
  }

  isSelected(sector: number): boolean {
    return this.selectedSectors.includes(sector);
  }
}
