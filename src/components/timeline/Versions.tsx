import React from "react";
import CompleteVersion from "./CompleteVersion";
import "../../css/custom-scrollbar.css";

const Versions = () => {

    return (
        
        <div className="h-full w-full flex flex-col gap-8 overflow-y-auto pb-12 pt-4 custom-scrollbar " >
            {[1,2,3,4].map((e,idx)=>(
                <div key={idx} >
                    <CompleteVersion versionNumber={e} />
                </div>
            ))}
        </div>
    );
};

export default Versions;