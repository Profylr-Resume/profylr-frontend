import React, { useEffect, useState } from "react";
import GenerateResume from "@/pages/GenerateResume";
import { templateSettings } from "lodash";
import { useGetAllTemplatesQuery } from "@/redux/features/templateApi";
import { TemplateType } from "@/types/template.interface";
import template1Thumbnail from "../../assets/images/template1.jpeg";
import { Button } from "../ui/button";

const ViewAllTemplates = () => {

    const [activePreview, setActivePreview] = useState<string | null>(null);
    const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
    const [allTemplates, setAllTemplates] = useState<TemplateType[]>([]);

    const {data:existingTemplates} = useGetAllTemplatesQuery({});

    useEffect(()=>{
        if(existingTemplates){
            console.log(existingTemplates);
            const templates = existingTemplates?.data.length>0 ? existingTemplates?.data : [] ;
            setAllTemplates(templates);
        }
    },[existingTemplates]);


    const handleMouseEnter = (templateId:string | undefined, event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const scrollY = window.scrollY;
        const windowWidth = window.innerWidth;
        const previewWidth = 480; // 30rem converted to pixels
      
        // Check if showing preview on right would go off screen
        const isRightEdge = (rect.right + previewWidth) > (windowWidth - 20); // 20px safety margin
      
        setPreviewPosition({
        // If at right edge, show preview on left side instead
            x: isRightEdge 
                ? rect.left - previewWidth + 150 // Show on left with same 150px offset
                : rect.right - 150, // Original right-side position
            y: rect.top + scrollY - 580
        });
        if(templateId){
            setActivePreview(templateId);
        }
    };

    return (
      
        <div className="h-full w-full  py-10 px-10">
            {/* Header Section */}
            <div className="h-[10%] ">
                <h2 className="text-5xl font-bold text-white mb-4">All Templates</h2>
            </div>
        
        
            <div className="h-[90%] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {allTemplates && allTemplates.length>0  && allTemplates.map((template) => (
                    <div
                        key={template._id}
                        className="group w-[20rem] h-[25rem] relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        {/* Template Image */}
                        <div className="w-[20rem] h-[25rem]">
                            <img
                                src={template1Thumbnail}
                                alt={template.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Overlay with Template Info */}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center gap-8 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex flex-col items-center">
                                    <h3 className="text-white font-semibold text-2xl capitalize">{template.name}</h3>
                                    <p className="text-white text-xs">{template.description}</p>
                                </div>

                                <div className="flex items-center justify-center gap-4">
                                    <div
                                        className="cursor-pointer relative bg-gray-800 px-2 py-2 rounded-lg text-white font-semibold"
                                        onMouseEnter={(e) => handleMouseEnter(template._id, e)}
                                        onMouseLeave={() => setActivePreview(null)}
                                    >
                  Preview
                                    </div>
                                    <Button className="bg-white text-black hover:bg-purple-200">
                  Use Template
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Preview Box */}
                {activePreview && (
                    <div
                        className="fixed w-[40rem] h-[45rem] bg-gray-100 p-3  shadow-2xl  z-50 pointer-events-none"
                        style={{
                            top: previewPosition.y,
                            left: previewPosition.x,
                            transition: "all 0.2s ease-in-out", // Smooth transition for both appearance and position
                        }}
                    >
                        <div className="h-full w-full border-4 border-gray-400 ">
                            <img
                                src={template1Thumbnail}
                                alt="Resume Template Preview"
                                className="w-full h-full "
                            />
                        </div>
                    </div>
                )}
            </div>
  
        </div>
    );
    
};

export default ViewAllTemplates;