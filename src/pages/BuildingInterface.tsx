import React from "react";
import ResumeForm from "../components/ResumeForm";
import GeneratedResume from "../components/GeneratedResume";

const BuildingInterface = () => {
    return (
        <>
            <main className="h-screen w-screen flex ">
                <section className="h-full w-1/2 ">
                    <div className="h-[8%] w-full">
                        <h1 className="text-4xl font-semibold text-themeDarkGreen "> Resume Form</h1>
                    </div>
                    <div className="h-[92%] w-full">
                        <ResumeForm />
                    </div>
                </section>

                <section className="h-full w-1/2 bg-amber-200 ">
                    <div className="h-[8%] w-full shadow-xl ">
                        <h1 className="text-5xl font-bold">Compiled Resume</h1>
                    </div>
                    <div className="h-[92%] w-full">
                        {/* <GeneratedResume /> */}
                    </div>
                </section>
            </main>
        </>
    );
};

export default BuildingInterface;
