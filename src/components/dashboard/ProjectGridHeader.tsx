import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import CreateJobApplication from "./CreateJobApplication";

const ProjectGridHeader = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleCreateJobApplicationModal = ()=>{
        setIsOpen((prev):boolean=>!prev);
    };

    return (
        <div className="h-full w-full flex items-center justify-between ">
            <div className="h-full flex items-center pl-8">
                <h2 className="text-2xl font-semibold tracking-tight text-black">Job Tracking</h2>
            </div>
            <div className="flex items-center pr-8 ">
                {/* <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search projects..." className="pl-8 bg-gray-900 border-gray-800" />
                </div> */}
                <Button className="bg-purple-500/80 hover:bg-purple-500 gap-2 "  onClick={toggleCreateJobApplicationModal} >
                    <Plus size={20} />
                  New Job Tracking
                </Button>
                <CreateJobApplication isOpen={isOpen} toggleModal={toggleCreateJobApplicationModal}/>
            </div>
        </div>
    );
};

export default ProjectGridHeader;