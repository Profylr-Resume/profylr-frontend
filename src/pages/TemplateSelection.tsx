import AllTemplates from "@/components/templateSelection/AllTemplates";
import React from "react";

const TemplateSelection = () => {
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
                <div
                    id="scrollArrow"
                    className="absolute bottom-0 right-2 w-32 flex flex-col items-center animate-bounce  "
                >
                    <p className="text-lg  text-themeCream mb-2">Scroll down</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                    
                </div>
            </div>
        </main>
    );
};

export default TemplateSelection;