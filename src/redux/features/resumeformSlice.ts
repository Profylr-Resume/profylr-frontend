import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BasicInfoType } from "@/interface/BasicInfo.interface";
import { EducationType } from "@/interface/Education.interface";
import { ExperienceType } from "@/interface/Experience.interface";
import { ProjectsType } from "@/interface/Projects.interface";
import { SkillsType } from "@/interface/Skills.interface";
import { InitialStateType } from "@/interface/InitialState.type";
import initialState from "../initialState/resumeFormInitialState";

const resumeFormSlice = createSlice({
    name: "resumeForm",
    initialState:initialState as InitialStateType,
    reducers: {

        updateBasicInfo: (state, action: PayloadAction<BasicInfoType>) => {
            state.basicInfo = action.payload;
        },
        
        // --------------------------------------------------------------------------------------

        updateEducation: (state, action: PayloadAction<EducationType>) => {
            state.education = action.payload;
        },

        // --------------------------------------------------------------------------------------
        
        addExperience: (state, action: PayloadAction<ExperienceType>) => {
            state.experiences.push(action.payload);
        },
        updateExperience: (state, action: PayloadAction<ExperienceType>) => {
            const { id } = action.payload;

            const index = state.experiences.findIndex(e => e.id === id);

            if (index !== -1) {
                state.experiences[index] = action.payload;
            }
        },
        removeExperience: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.experiences =  state.experiences.filter(e=>e.id !== id);
        },

        // --------------------------------------------------------------------------------------

        addProject: (state, action: PayloadAction<ProjectsType>) => {
            state.projects.push(action.payload);
        },
        updateProject: (state, action: PayloadAction<ProjectsType>) => {
            const { id } = action.payload;
            const projectIndex = state.projects.findIndex(project => project.id === id);
            if (projectIndex !== -1) {
                state.projects[projectIndex] = action.payload;
            }
        },
        removeProject: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.projects = state.projects.filter(project => project.id !== id);
        },
        
        // --------------------------------------------------------------------------------------

        addSkill: (state, action: PayloadAction<SkillsType>) => {
            state.skills.push(action.payload);
        },
        updateSkill: (state, action: PayloadAction<SkillsType>) => {
            const { id } = action.payload;
    
            const skillIndex = state.skills.findIndex(skill => skill.id === id);

            if (skillIndex !== -1) {
                state.skills[skillIndex] = action.payload;
            }
        },
        removeSkill: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            state.skills = state.skills.filter(skill => skill.id !== id);
        },
    }
});

export const {
    updateBasicInfo,
    updateEducation,
    addExperience,
    updateExperience,
    removeExperience,
    addProject,
    updateProject,
    removeProject,
    addSkill,
    updateSkill,
    removeSkill
} = resumeFormSlice.actions;

export default resumeFormSlice.reducer;
