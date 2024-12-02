// import React, { MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import ai_resume from "../../assets/icons/ai_resume.png";
import webscrapping from "../../assets/icons/webscrapping.png";
import manual_resume from "../../assets/icons/manual_resume.png";
// import ai_sparkle from "../../assets/icons/ai_sparkle.png";

const ServiceOpted = () => {

    const navigate = useNavigate();

    const handleServiceOpted = (service: string): void => {
        console.log(service);

        switch (service){
        case "manual" :
            navigate("/manual-resume");
            // navigate("/select-template/:id")
            break;
        case "ai" :
            navigate("/ai-resume");
            // navigate("/select-template/:id")
            break;
        case "webscrap" :
            navigate("/webscrap");
            // navigate("/select-template/:id")
            break;
        default:
            navigate("/login");
        }
    };

    return (
    
        <main className="h-full w-full  flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-themeCream text-[13rem]  absolute top-[-3rem] left-[20%]  tracking-wider uppercase" >Select</h1>
               
                <div
                    className="h-[37rem] w-[80rem] flex items-center justify-center bg-gradient-to-br from-themeGreen to-themeGray  bg-opacity-30 backdrop-blur-lg 
                                absolute top-[10.3rem] left-[15%] z-10 rounded-xl  "
                >
                    <div className="h-full w-full  flex items-center justify-evenly ">
                        <div 
                            className="h-[26rem] w-[20rem] bg-themeCream rounded-xl flex flex-col items-center justify-center gap-8 shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_12px_20px_rgba(140,120,90,1)] cursor-pointer"
                            onClick={():void=> handleServiceOpted("manual")}
                        >
                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={manual_resume}
                                    alt="AI Recommendations"
                                    className="h-20"
                                />
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <p className="text-5xl font-bold text-center text-themeGray ">
                                        Create Manually
                                </p>
                            </div>
                        </div>
    
    
                        <div className="h-[26rem] w-[20rem] bg-themeCream rounded-xl flex flex-col items-center justify-center gap-8 shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_12px_20px_rgba(140,120,90,1)] cursor-pointer"
                            onClick={():void=> handleServiceOpted("ai")}
                        >
                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={ai_resume}
                                    alt="AI Recommendations"
                                    className="h-20"
                                />
                            </div>
                            <div className="w-full  text-5xl font-bold text-themeGray flex flex-col items-center justify-center gap-2">
                                <p className=" text-center   ">
                                        Create with 
                                </p>
                                <p className="flex" >
                                    {/* <span><img src={ai_sparkle} alt="" className="h-10"/></span> */}
                                          AI</p>
                            </div>
                        </div>
                        <div className="h-[26rem] w-[20rem] bg-themeCream rounded-xl flex flex-col items-center justify-center gap-8 shadow-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-[0_12px_20px_rgba(140,120,90,1)] cursor-pointer"
                            onClick={():void=> handleServiceOpted("webscrap")}
                        >
                            <div className="w-full flex items-center justify-center">
                                <img
                                    src={webscrapping}
                                    alt="AI Recommendations"
                                    className="h-20"
                                />
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <p className="text-5xl font-bold text-center text-themeGray ">
                                       Scrap job
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ServiceOpted;