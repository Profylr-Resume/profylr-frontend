import { useAllSectionsQuery } from "@/redux/features/resumeSectionSlice";
import React, { useEffect, useState } from "react";

interface Section {
    name:string,
    description:string,
    _id:string
}

const ViewAllSections:React.FC= () => {

    const[sections,setSections] = useState<Section[]>([]);

    const {data:allSections,error,isLoading} = useAllSectionsQuery({});

    useEffect(()=>{
        if(allSections && allSections.length>0){
            setSections(allSections);
        }
    },[allSections]);

    return (
        <div className="h-full w-full p-4  overflow-y-auto mb-4 ">
            <div className="space-y-4">
                {sections && sections.length>0 && sections.map((section) => (
                    <div key={section._id} className="flex items-center justify-between p-4 bg-fuchsia-200 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <div>
                            <h2 className="text-2xl font-bold">{section.name}</h2>
                            <p className="text-xl font-medium">{section.description}</p>
                        </div>
                        <div>
                            <p className="text-lg underline font-medium">ID: {section._id}</p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ViewAllSections;