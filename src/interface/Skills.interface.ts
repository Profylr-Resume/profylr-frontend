export interface SkillsType{
    name:string,
    proficiencyLevel:string,
    yearsOfExperience:string,
    category:string,
    credentials:{
      certificateUrl:string,
      issuingOrganization:string,
      dateObtained:string,
      expiryDate:string
    },
    id:string
  }