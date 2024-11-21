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
            
            <div className="h-full w-full py-8  " >
                <Tabs defaultValue="basicInfo" className="w-full h-full flex flex-col items-center justify-center ">
                    <TabsList className="h-[10%] w-[80%] flex items-center justify-center gap-8  bg-themeCream bg-opacity-40  rounded-full" >
                        <TabsTrigger value="basicInfo" className="bg-themeGray text-white px-4 py-2 text-lg rounded-full h-full " >Basic Info</TabsTrigger>
                        <TabsTrigger value="education" className="bg-themeGray text-white px-4 py-2 text-lg rounded-full h-full " >Education</TabsTrigger>
                        <TabsTrigger value="skills" className="bg-themeGray text-white px-4 py-2 text-lg rounded-full h-full">Skills</TabsTrigger>
                        <TabsTrigger value="projects" className="bg-themeGray text-white px-4 py-2 text-lg rounded-full h-full" >Projects</TabsTrigger>
                        <TabsTrigger value="experience"  className="bg-themeGray text-white px-4 py-2 text-lg rounded-full h-full">Experience</TabsTrigger>
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
