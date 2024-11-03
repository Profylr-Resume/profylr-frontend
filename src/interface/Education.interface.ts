
 interface EducationLevel {
    instituteName: string;
    yearOfPassing: string;
    result: string;
    field?: string;
  }
  
export interface EducationType {
    underGraduate: EducationLevel;
    twelfthGrade: EducationLevel;
    tenthGrade: EducationLevel;
  }