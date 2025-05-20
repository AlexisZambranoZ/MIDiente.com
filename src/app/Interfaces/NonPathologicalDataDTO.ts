export interface NonPathologicalDataDTO {
  smokes: boolean;                   // ¿Fuma usted? Sí/No
  smokingQuantity?: string;          // ¿Qué cantidad? (texto libre)
  drinksAlcohol: boolean;            // Consume bebidas alcohólicas Sí/No
  alcoholFrequencyAndQuantity?: string; // Frecuencia y cantidad (texto libre)
  usesMedicationFrequently: boolean; // Usa algún medicamento frecuente Sí/No
  medicationDetails?: string;         // ¿Cuáles? (texto libre)
  usesOtherSubstances?: string;       // Usa alguna otra sustancia (texto libre)
  observations?: string;               // Observaciones generales
}