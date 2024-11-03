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
        updateEducation: (state, action: PayloadAction<EducationType>) => {
            state.education = action.payload;
        },

        // --------------------------------------------------------------------------------------
        addExperience: (state, action: PayloadAction<ExperienceType>) => {
            state.experience.push(action.payload);
        },
        updateExperience: (state, action: PayloadAction<{ index: number; experience: ExperienceType }>) => {
            const { index, experience } = action.payload;
            if (state.experience[index]) {
                state.experience[index] = experience;
            }
        },
        removeExperience: (state, action: PayloadAction<number>) => {
            state.experience.splice(action.payload, 1);
        },

        // --------------------------------------------------------------------------------------

        addProject: (state, action: PayloadAction<ProjectsType>) => {
            state.projects.push(action.payload);
        },
        updateProject: (state, action: PayloadAction<{ index: number; project: ProjectsType }>) => {
            const { index, project } = action.payload;
            if (state.projects[index]) {
                state.projects[index] = project;
            }
        },
        removeProject: (state, action: PayloadAction<number>) => {
            state.projects.splice(action.payload, 1);
        },

        // --------------------------------------------------------------------------------------

        addSkill: (state, action: PayloadAction<SkillsType>) => {
            state.skills.push(action.payload);
        },
        updateSkill: (state, action: PayloadAction<{ index: number; skill: SkillsType }>) => {
            const { index, skill } = action.payload;
            if (state.skills[index]) {
                state.skills[index] = skill;
            }
        },
        removeSkill: (state, action: PayloadAction<number>) => {
            state.skills.splice(action.payload, 1);
        }
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
