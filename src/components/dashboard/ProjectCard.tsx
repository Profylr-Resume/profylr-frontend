import React, { useEffect, useState } from "react";
import { CalendarClock, Edit, Ellipsis, ExternalLink, FileUser, Info, Trash2} from "lucide-react";

import { Card } from "@/components/ui/card";
import { JobApplication } from "@/types/jobApplication";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

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
    const [date, setDate] = useState<Date | undefined>(new Date());

    useEffect(() => {
        if(selectedColor && selectedColor.five && selectedColor.one){
            const {five,one} = selectedColor;
            setGivenColor500(five);
            setGivenColor100(one);
        }
    }, [selectedColor]);

    return (
        <Card className="w-[22rem] p-4  bg-white shadow-xl rounded-[2rem]">
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between ">
                    <div 
                        className="px-4 py-[3px] rounded-full  " 
                        style={{
                            // borderColor: `${givenColor500}`,
                            backgroundColor: `${givenColor100}`
                        }}
                    >
                        <h4 className="font-semibold text-sm "
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
                            <Popover>
                                <PopoverTrigger>
                                    <Ellipsis/>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 w-full" side="right" >
                                    <div className=" flex flex-col gap-2 p-3">
                                        {/* Details Option */}
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
                                            <Info className="w-4 h-4 text-blue-600" />
                                            <span>Details</span>
                                        </button>
                                        {/* Edit Option */}
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-green-500">
                                            <Edit className="w-4 h-4 text-green-600" />
                                            <span>Edit</span>
                                        </button>
                                        {/* Delete Option */}
                                        <button className="flex items-center gap-2 text-gray-600 hover:text-red-500">
                                            <Trash2 className="w-4 h-4 text-red-600" />
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </PopoverContent>
                            </Popover>

                        </button>
                    </div>
                
                </div>
             
                <div className="flex flex-col gap-4" >

                    <div className="w-full flex items-center justify-between gap-3">
                        <p className="text-base font-semibold" >{jobApplication.role}</p>
                        
                        <div className="flex items-center gap-1" >
                            <p className="text-base font-medium text-green-500" >{jobApplication.status}</p>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-between gap-3">
                        <div className="flex" >
                            <FileUser className="h-5 text-red-500" />
                            <p className="text-sm font-medium cursor-pointer hover:underline" >{jobApplication.resumeVersion}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold ">
                            <p >Follow Up:</p>
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
                        <button type="button" className="px-3 py-[2px] border rounded-full font-medium text-gray-600  text-sm">Notes</button>
                        <button type="button" className="px-3 py-[2px] border rounded-full font-medium text-gray-600 text-sm" >Important Events</button>
                    </div>
                    <div>
             
                        <Popover>
                            <PopoverTrigger>
                                <CalendarClock className="text-gray-800" />
                            </PopoverTrigger>
                            <PopoverContent className="p-0 w-full flex justify-center items-center" >
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    className="rounded-md border w-full h-full"
                                />
                            </PopoverContent>
                        </Popover>

                    </div>
                </div>
                {/* <p className="text-sm text-gray-400">{project.description}</p> */}
                {/* <Progress value={project.progress} className="h-2 bg-gray-800" indicatorClassName="bg-purple-500" /> */}
              
            </div>
        </Card>
    );
};

export default ProjectCard;