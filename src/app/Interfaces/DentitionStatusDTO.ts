
export interface ToothSectorStatus {
  toothNumber: number;         // ej: 45, 46, etc.
  sector: 1 | 2 | 3 | 4 | 5;   // Sector específico del diente
  affected: boolean;           // Si está afectado ese sector
  problemType?: string;        // (opcional) Tipo de problema: caries, fisura, etc.
}

