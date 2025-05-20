export interface FamilyMedicalHistoryDTO {
  hypertension: boolean;            // Hipertensión
  hypotension: boolean;             // Hipotensión
  diabetes: boolean;                // Diabetes
  mentalIllness: boolean;           // Enfermedad Mental
  kidneyDisease: boolean;           // Enfermedad del Riñón
  syphilis: boolean;                // Sífilis
  cancer: boolean;                  // Cáncer
  otherImportantDisease?: string;  // Otra enfermedad importante (texto libre)
  observations?: string;            // Observaciones generales
}