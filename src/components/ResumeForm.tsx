import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./formFileds/Education";
import Skills from "./formFileds/Skills";
import Projects from "./formFileds/Projects";
import Experience from "./formFileds/Experience";
import BasicInfo from "./formFileds/BasicInfo";



const ResumeForm: React.FC = () => {


    return(
       
        <section className="h-full w-full" >
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
                    <TabsContent value="basicInfo" className="h-[92%] w-full" > <BasicInfo/>  </TabsContent>
                    <TabsContent value="education" className="h-[92%] w-full" >  <Education/> </TabsContent>
                    <TabsContent value="skills" className="h-[92%] w-full" > <Skills/> </TabsContent>
                    <TabsContent value="projects" className="h-[92%] w-full"><Projects/></TabsContent>
                    <TabsContent value="experience" className="h-[92%] w-full"><Experience/></TabsContent>
                </Tabs>
            </div>
        </section>
        
      
    );
};

export default ResumeForm;
