import { DentalDataDTO } from "./DentalDataDTO";
import { ToothSectorStatus } from "./DentitionStatusDTO";
import { FamilyMedicalHistoryDTO } from "./FamilyMedicalHistoryDTO";
import { NonPathologicalDataDTO } from "./NonPathologicalDataDTO";
import { PathologicalDataDTO } from "./PathologicalDataDTO";
import { PathologicalHistoryDTO } from "./PathologicalHistoryDTO";
import { PatientPersonalDataDTO } from "./PatientPersonalDataDTO";

export interface PatientDTO {
  id: number;
  personalData: PatientPersonalDataDTO;
  pathologicalData: PathologicalDataDTO;
  pathologicalHistory: PathologicalHistoryDTO;
  familyHistory: FamilyMedicalHistoryDTO;
  nonPathologicalData: NonPathologicalDataDTO;
  dentalData: DentalDataDTO;
  dentitionStatus: ToothSectorStatus;
}