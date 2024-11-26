import AllTemplates from "@/components/templateSelection/AllTemplates";
import ScrollDownAnimation from "@/shared/ScrollDownAnimation";
import React from "react";

const TemplateSelection:React.FC<{isActive:boolean}> = ({isActive}) => {
    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeGreen to-themeGray flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-themeCream text-[11rem]  absolute top-[-3rem] left-[10%] " >Select Template</h1>
            
                <div
                    className="h-[38rem] w-[90rem] flex items-center justify-center bg-gradient-to-br from-themeGreen to-themeGray  bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[9rem] left-[10%] z-10 rounded-xl"
                    style={{ boxShadow: "3px 3px 18px #1f2937, -3px 0 20px #1f2937" }}
                >
                    <div className="h-full w-full" >
                        <AllTemplates/>  
                    </div>
                   
                </div>
                <ScrollDownAnimation/>
            </div>
        </main>
    );
};

export default TemplateSelection;