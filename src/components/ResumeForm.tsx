import React, { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormikProps } from "formik";
import { BasicInfoType } from "@/interface/BasicInfo.interface";
import { EducationType } from "@/interface/Education.interface";
import { SkillsType } from "@/interface/Skills.interface";
import { ProjectsType } from "@/interface/Projects.interface";
import { ExperienceType } from "@/interface/Experience.interface";
import { Button } from "@/components/ui/button";
import Education from "./formFileds/Education";
import Skills from "./formFileds/Skills";
import Projects from "./formFileds/Projects";
import Experience from "./formFileds/Experience";
import BasicInfo from "./formFileds/BasicInfo";



const ResumeForm: React.FC = () => {

    const basicInfoRef = useRef<FormikProps<BasicInfoType> | null> (null); // Set ref type
    const educationRef = useRef<FormikProps<EducationType> | null>  (null);
    const skillsRef = useRef<FormikProps<SkillsType> | null> (null);
    const projectsRef = useRef<FormikProps<ProjectsType> | null> (null);
    const experienceRef = useRef<FormikProps<ExperienceType> | null> (null);

    const handleSubmit = () => {
        if (basicInfoRef.current) {
            basicInfoRef.current.submitForm();
            console.log("Basic Info Values:", basicInfoRef.current.values);
        }
        if (educationRef.current) {
            educationRef.current.submitForm();
            console.log("Education Values:", educationRef.current.values);
        }
        if (skillsRef.current) {
            skillsRef.current.submitForm();
            console.log("Skills Values:", skillsRef.current.values);
        }
        if (projectsRef.current) {
            projectsRef.current.submitForm();
            console.log("Projects Values:", projectsRef.current.values);
        }
        if (experienceRef.current) {
            experienceRef.current.submitForm();
            console.log("Experience Values:", experienceRef.current.values);
        }
    };
    


    return(
        <main className="h-screen w-screen flex bg-themeCream" >
            <section className="h-full w-[60%]" >
                <div className="h-[10%] w-full flex items-center justify-center" >
                    <h1 className="text-3xl font-bold text-themeDarkGreen" >Resume Form</h1>
                </div>
                <div className="h-[80%]" >
                    <Tabs defaultValue="basicInfo" className="w-full h-full">
                        <TabsList className="h-[5%] w-full bg-themeCream " >
                            <TabsTrigger value="basicInfo">Basic Info</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="projects">Projects</TabsTrigger>
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                        </TabsList>
                        <TabsContent value="basicInfo" className="h-[92%] w-full" > <BasicInfo ref={basicInfoRef}  />  </TabsContent>
                        <TabsContent value="education" className="h-[92%] w-full" >  <Education ref={educationRef}  /> </TabsContent>
                        <TabsContent value="skills" className="h-[92%] w-full" > <Skills ref={skillsRef}  /> </TabsContent>
                        <TabsContent value="projects" className="h-[92%] w-full"><Projects ref={projectsRef}  /></TabsContent>
                        <TabsContent value="experience" className="h-[92%] w-full"><Experience ref={experienceRef}  /></TabsContent>
                    </Tabs>
                </div>
                <div className="h-[10%] w-full flex items-center justify-center " > 
                    <Button variant="default" size="lg" >Submit</Button>
                </div>
            </section>
            <section className="h-full w-[40%] bg-themeLightGreen" ></section>
        </main>
    );
};

export default ResumeForm;
