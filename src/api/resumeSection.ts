import { SectionType } from "@/models/resumeSection.type";
import axios from "axios";

const BASE_URL=import.meta.env.VITE_BACKEND_BASE_URL;

export const createSection = async(section:SectionType):Promise<boolean>=>{

    console.log(import.meta.env.VITE_BACKEND_BASE_URL);
    if(!section || !section.name){
        return false;
    }

    const payload = {
        name:section?.name,
        description : section?.description
    };

    const sectionCreated = await axios.post(`${BASE_URL}/user/section`,payload);

    if(sectionCreated && sectionCreated?.error){
        return false;
    }
    return true;
};