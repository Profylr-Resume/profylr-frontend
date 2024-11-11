import { BasicInfoType } from "./BasicInfo.interface";
import { EducationType } from "./Education.interface";
import { ExperienceType } from "./Experience.interface";
import { ProjectsType } from "./Projects.interface";
import { SkillsType } from "./Skills.interface";

export interface InitialStateType {
    basicInfo: BasicInfoType;
    education: EducationType;
    experiences: ExperienceType[];
    projects: ProjectsType[];
    skills: SkillsType[];
}