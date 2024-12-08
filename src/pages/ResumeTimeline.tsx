import React from "react";
import { Download, Eye, FileText, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resume_icon from "../assets/icons/resume_icon.png";

const versions = [
    { id: 1, version: "1.1", name: "Professional" },
    { id: 2, version: "1.2", name: "Creative" },
    { id: 3, version: "1.3", name: "Technical" },
];

const ResumeTimeline = () => {


    return (
        <div className="h-full w-full  ">
            <div className="h-[16rem] w-full flex " >

                <div className="h-full w-[90%]  bg-white rounded-[2rem] flex  " >
             
                    <div className="h-full w-full  flex items-center justify-start gap-12 py-4 px-8 ">
                        {versions.map((version) => (
                            <Card key={version.id} className=" h-full px-6  bg-white shadow-xl">
                                <CardContent className="h-full flex flex-col items-center justify-center gap-4 py-4">
                                    <div className="rounded-full bg-blue-50 p-3">
                                        <FileText className="h-8 w-8 text-blue-500" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-lg font-semibold">Version {version.version}</h3>
                                        <p className="text-sm text-muted-foreground">{version.name} Resume</p>
                                    </div>
                                    <div className=" flex w-full gap-2">
                                        <Button className="flex-1 gap-2 bg-indigo-800">
                                            <Download className="h-4 w-4" />
            
                                        </Button>
                                        <Button variant="outline" className="flex-1 gap-2 hover:bg-black hover:text-white ">
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                       
                        <Card className="h-full flex cursor-pointer items-center justify-center border-2 border-dashed border-gray-700/30 bg-gray-100/50 p-6 shadow-md transition-colors hover:bg-white/80">
                            <div className="text-center">
                                <div className="mb-2 flex justify-center">
                                    <Plus className="h-8 w-8 text-muted-foreground" />
                                </div>
                                <p className="text-sm font-medium">Create a new sub-version</p>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="h-full  flex  items-center justify-center lg:flex">
                    <div className="rotate-90 transform whitespace-nowrap text-5xl font-bold  text-gray-500 hover:text-black ">
                        VERSION 1
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ResumeTimeline;