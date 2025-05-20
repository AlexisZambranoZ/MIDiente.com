export interface DentalDataDTO {
  tmjClicking: boolean;                // Chasquido
  tmjCrepitation: boolean;             // Crepitación
  musclePain: boolean;                 // Dolor muscular
  earPain: boolean;                   // Dolor de oídos
  difficultyOpeningClosing: boolean;  // Dificultad de apertura o cierre
  muscleFatigue: boolean;             // Cansancio muscular
  difficultyChewing: boolean;         // Dificultad para masticar
  tmjPain: boolean;                   // Dolor en la Articulación Temporo-Mandibular
  observations?: string;              // Observaciones
}
