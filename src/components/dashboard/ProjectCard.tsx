import React, { useEffect, useState } from "react";
import { CalendarClock, Ellipsis, ExternalLink, FileUser} from "lucide-react";

import { Card } from "@/components/ui/card";
import { JobApplication } from "@/models/jobApplication";

interface ProjectCardProps {
    jobApplication: JobApplication;
    selectedColor: {
        five:string,
        one:string
    };
}

const ProjectCard = ({jobApplication,selectedColor}:ProjectCardProps) => {
    
    const [givenColor500, setGivenColor500] = useState("#000000");
    const [givenColor100, setGivenColor100] = useState("#000000");

    useEffect(() => {
        if(selectedColor && selectedColor.five && selectedColor.one){
            const {five,one} = selectedColor;
            setGivenColor500(five);
            setGivenColor100(one);
        }
    }, [selectedColor]);

    return (
        <Card className="p-4 bg-white shadow-xl rounded-[2rem]">
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between ">
                    <div 
                        className="px-4 py-[3px] rounded-full  " 
                        style={{
                            // borderColor: `${givenColor500}`,
                            backgroundColor: `${givenColor100}`
                        }}
                    >
                        <h4 className="font-semibold"
                            style={{
                                color: `${givenColor500}`,
                            }}
                        >
                            {jobApplication.companyName}
                        </h4>
                    </div>
                    <div className="flex items-center gap-3" >
                        <button title="external-link" type="button" > 
                            <ExternalLink className="h-5" />
                        </button>
                        <button title="options" type="button" className="h-5" >
                            <Ellipsis/>
                        </button>
                    </div>
                
                </div>
             
                <div className="flex" >

                    <div className="w-1/2 flex flex-col items-start gap-3">
                        <p className="text-xl font-semibold" >{jobApplication.role}</p>
                        <div className="flex" >
                            <FileUser className="h-5 text-red-500" />
                            <p className="text-md font-normal cursor-pointer hover:underline" >{jobApplication.resumeVersion}</p>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col items-end gap-3">
                        <div className="flex items-center gap-1" >
                            <p className="text-lg font-semibold text-green-500" >{jobApplication.status}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p>Follow Up:</p>
                            <p>{jobApplication.expectedFollowUp.date}</p>
                        </div>
                    </div>
                    
                </div>

                <div className="flex justify-between items-center ">
                    {/* <div className="flex items-center gap-1 italic text-gray-400">
                        <p>Created At:</p>
                        <p>{ jobApplication.timeStamps.applied}</p>
                    </div> */}
                    <div className="flex items-center gap-3">
                        <button type="button" className="px-3 py-[2px] border rounded-full font-medium text-gray-600">Notes</button>
                        <button type="button" className="px-3 py-[2px] border rounded-full font-medium text-gray-600" >Important Events</button>
                    </div>
                    <div>
                        <CalendarClock className="text-gray-800" />
                    </div>
                </div>
                {/* <p className="text-sm text-gray-400">{project.description}</p> */}
                {/* <Progress value={project.progress} className="h-2 bg-gray-800" indicatorClassName="bg-purple-500" /> */}
              
            </div>
        </Card>
    );
};

export default ProjectCard;