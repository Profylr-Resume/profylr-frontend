import React from "react";
import { Button } from "../ui/button";

const ProjectGridHeader = () => {
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
                <Button className="bg-purple-500/80 hover:bg-purple-500">Add New Job</Button>
            </div>
        </div>
    );
};

export default ProjectGridHeader;