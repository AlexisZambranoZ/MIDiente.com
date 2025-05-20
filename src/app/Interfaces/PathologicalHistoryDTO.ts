export interface PathologicalHistoryDTO {
  rheumaticFever: boolean;          // Fiebre Reumática
  cardiopathies: boolean;           // Cardiopatías
  pepticUlcer: boolean;             // Ulcera Péptica
  heartAttacks: boolean;            // Infartos
  gastritis: boolean;               // Gastritis
  hernias: boolean;                 // Hernias
  allergies: boolean;               // Alergias
  allergiesDetails?: string;        // Especifique alergias
  diabetes: boolean;                // Diabetes
  anemia: boolean;                  // Anemia
  varicoseVeins: boolean;           // Varices
  measles: boolean;                 // Sarampión
  dizziness: boolean;               // Mareos
  scarletFever: boolean;            // Escarlatina
  hepatitis: boolean;               // Hepatitis
  hepatitisDetails?: string;        // Especifique hepatitis
  chickenpox: boolean;              // Varicela
  hiv: boolean;                    // VIH
  fainting: boolean;                // Desmayos
  hpv: boolean;                    // VPH
  headaches: boolean;               // Dolores de cabeza
  otherCondition?: string;          // Otro (texto libre)
}
