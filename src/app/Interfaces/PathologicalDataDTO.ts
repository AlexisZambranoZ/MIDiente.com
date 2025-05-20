export interface PathologicalDataDTO {
  reasonForConsultation: string;                  // Motivo de Consulta
  currentIllnessDate: string;                      // Fecha de su padecimiento actual (formato string o ISO)
  previousTreatment?: string;                      // Tratamiento recibido anteriormente (opcional)
}