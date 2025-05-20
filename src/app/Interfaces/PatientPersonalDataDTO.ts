export interface PatientPersonalDataDTO {
  firstName: string;              // Nombre(s)
  lastNamePaternal: string;       // Apellido Paterno
  lastNameMaternal: string;       // Apellido Materno
  gender: 'M' | 'H' | 'Otro';     // Sexo (Hombre, Mujer, Otro)
  birthDate: string;              // Fecha de nacimiento (formato ISO o string)
  age: number;
  maritalStatus: string;          // Estado Civil
  phoneLandline?: string;         // Teléfono fijo (opcional)
  phoneMobile?: string;           // Teléfono móvil (opcional)
  occupation: string;             // Ocupación
  address: {
    street: string;              // Calle
    number: string;              // Número
    neighborhood: string;        // Colonia
    postalCode: string;          // Código Postal (C.P)
    municipality: string;        // Municipio
    state: string;               // Estado
  };
  observations?: string;           // Observaciones (opcional)
}
