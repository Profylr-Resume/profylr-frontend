import GeneratedResume from "@/components/GeneratedResume";
import ResumeForm from "@/components/ResumeForm";
import React, { useState } from "react";

const GenerateResume = () => {

    const [isHovering, setIsHovering] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        setCursorPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <main className="h-screen w-screen bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-3rem] left-[10%] " >Create Resume</h1>
            
                <div
                    className="h-[38rem] w-[90rem] flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-700  bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[9rem] left-[10%] z-10 rounded-xl"
                    style={{ boxShadow: "3px 3px 18px #1f2937, -3px 0 20px #1f2937" }}
                >
                    <div className="h-full w-full flex " >
                        <div className="w-2/3 h-full bg-red-200 " >
                            <ResumeForm/>
                        </div>
                        <div className="w-1/3 h-full  flex items-center justify-center " >
                            {/* Hover Area with Creative Animations */}
                            <div
                                className="relative w-[300px] h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-opacity-50 border border-dotted text-white rounded-2xl hover:border-yellow-500 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="absolute inset-0 flex justify-center items-center text-center p-4">
                                    <h1 className="text-4xl font-bold animate-pulse">
            Hover here to see your resume
                                    </h1>
                                </div>
                            </div>
                              
                            {/* Attached Square */}
                            {isHovering && (
                                <div
                                    className="absolute w-[55rem] h-[48rem] shadow-2xl rounded-xl bg-white overflow-y-auto p-4  pointer-events-none"
                                    style={{
                                        top: cursorPosition.y - 500, // Adjusting position to center the square
                                        left: cursorPosition.x - 650,
                                    }}
                                >
                                    <div className="h-full w-full overflow-y-auto " >
                                        <GeneratedResume/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
           
            </div>
        </main>
    );
};

export default GenerateResume;