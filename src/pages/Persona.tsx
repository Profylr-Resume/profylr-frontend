import { useEffect } from "react";
import CreatePersona from "@/components/persona/CreatePersona";


const Persona:React.FC<{isActive:boolean}> = ({isActive}) => {
   
    // useEffect(() => {
    //     if (isActive) {
    //         // Trigger API call or logic
    //         console.log("SectionOne is active. Trigger API call.");
    //     }
    // }, [isActive]);


    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeGreen to-themeGray  flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-themeCream text-[13rem]  absolute top-[-3rem] left-[20%]  tracking-wider" >PERSONA</h1>
            
                <div
                    className="h-[37rem] w-[80rem] flex items-center justify-center bg-gradient-to-br from-themeGreen to-themeGray  bg-opacity-30 backdrop-blur-lg 
                            absolute top-[10.3rem] left-[15%] z-10 rounded-xl  "
                    style={{
                        boxShadow: "3px 3px 18px #1f2937, -3px 3px 20px #1f2937",
                    }}
                              
                >
                    {isActive && (
                        <CreatePersona/>
                    )} 
                </div>
           
            </div>
        </main>

    );
};

export default Persona;