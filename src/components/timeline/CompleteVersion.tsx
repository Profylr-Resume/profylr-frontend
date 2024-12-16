import React from "react";
import Versionbar from "./Versionbar";

const CompleteVersion = ({versionNumber}) => {
    return (
        <div className="h-[16rem] w-full flex " >
           
            <div className="h-full w-[90%]  bg-white rounded-[2rem] flex  " >
                <Versionbar/>
            </div>
            <div className="h-full  flex  items-center justify-center lg:flex">
                <div className="rotate-[90deg] transform whitespace-nowrap text-4xl font-bold  text-indigo-900 hover:text-black ">
                        VERSION {versionNumber}
                </div>
            </div>
          
        </div>
    );
};

export default CompleteVersion;