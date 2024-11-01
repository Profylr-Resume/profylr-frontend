import React, { useState } from "react";
import Education from "./formFileds/Education";
import Projects from "./formFileds/Projects";
import Skills from "./formFileds/Skills";
import Experience from "./formFileds/Experience";
import { Button } from "./ui/button";

const ResumeForm: React.FC = () => {
    // State to track the currently selected section
    const [activeSection, setActiveSection] = useState("Education");

    return(
        <main className="h-screen w-screen flex bg-themeCream" >
            <section className="h-full w-[60%]" >
              

            </section>
            <section className="h-full w-[40%] bg-themeLightGreen" ></section>
        </main>
    );
};

export default ResumeForm;
