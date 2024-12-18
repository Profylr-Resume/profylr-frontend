import GeneratedResume from "@/components/Template1";
import ResumeForm from "@/components/ResumeForm";
import React, { useEffect, useState } from "react";
import { useGetTemplateByIdQuery } from "@/redux/features/templateApi";

const GenerateResume:React.FC<{isActive:boolean}> = ({isActive}) => {

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

    
    const id = "673a077370cfd723338a7a6c";
    const {data:selectedTemplate} = useGetTemplateByIdQuery(id);

    useEffect(()=>{
        console.log(selectedTemplate);
    },[selectedTemplate]);

    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeGreen to-themeGray flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-3rem] left-[10%] " >Create Resume</h1>
            
                <div
                    className="h-[38rem] w-[90rem] flex items-center justify-center bg-gradient-to-br from-themeGreen to-themeGray  bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[9rem] left-[10%] z-10 rounded-xl"
                    style={{ boxShadow: "3px 3px 18px #1f2937, -3px 0 20px #1f2937" }}
                >
                    <div className="h-full w-full flex " >
                        <div className="w-2/3 h-full " >
                            <ResumeForm/>
                        </div>
                        <div className="w-1/3 h-full  flex items-center justify-center " >
                            {/* Hover Area with Creative Animations */}
                            <div
                                className="relative w-[300px] h-[200px] bg-gradient-to-r from-themeCream  to-themeGray bg-opacity-50 border border-dotted text-themeBlack rounded-2xl hover:border-yellow-500 hover:shadow-xl transition-all duration-500 ease-in-out transform hover:scale-105"
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
                                        <GeneratedResume template={selectedTemplate} />
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