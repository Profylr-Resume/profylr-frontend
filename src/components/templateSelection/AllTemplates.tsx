import { TemplateType } from "@/models/template.type";
import { useGetAllTemplatesQuery } from "@/redux/features/templateApi";
import React, { useEffect, useState } from "react";

import SingleTemplate from "./SingleTemplate";

const AllTemplates = () => {
   
    const [allTemplates, setAllTemplates] = useState<TemplateType[]>([]);

    const {data:existingTemplates} = useGetAllTemplatesQuery({});

    useEffect(()=>{
        if(existingTemplates){
            console.log(existingTemplates);
            const templates:TemplateType[] = existingTemplates?.data.length>0 ? existingTemplates?.data : [] ;
            setAllTemplates(templates);
        }
    },[existingTemplates]);

    
    return (
        <main className="w-full h-full py-10" >
            <div className="h-full  overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                {allTemplates && allTemplates.length>0  && allTemplates.map((template) => (
                    <div   key={template._id} >
                        <SingleTemplate template={template} />
                    </div>
                ))}
            </div>
        </main>
    );
};

export default AllTemplates;