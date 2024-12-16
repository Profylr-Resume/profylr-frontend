
import Versions from "@/components/timeline/Versions";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import React from "react";



const ResumeTimeline = () => {

    return (
        <div className="h-full w-full flex flex-col justify-between ">
            <div className="h-[10%]  w-full flex items-center justify-between px-10 pr-20" >
                <div className="flex items-center justify-center" >
                    <h3 className="text-6xl font-bold text-indigo-900 " >RESUMES</h3>
                </div>
                <div className="flex items-center justify-center " >
                    <Button className="flex-1 gap-2 bg-indigo-800 " >
                        <Plus size={20}/>
                        Add Resume
                    </Button>
                </div>
            </div>
            <div className="h-[87%] w-full " >
                <Versions/>
            </div>
        </div>
    );
};

export default ResumeTimeline;