import { SectionType } from "@/models/resumeSection.type";
import axios, { AxiosResponse } from "axios";

const BASE_URL=import.meta.env.VITE_BACKEND_BASE_URL;

interface SectionCreationResponse {
    data:{
        name:string,
        description:string,
    } | null,
    message:string,
    error: string | null,
}

export const createSection = async(section:SectionType):Promise<SectionCreationResponse>=>{

    console.log(import.meta.env.VITE_BACKEND_BASE_URL);
    if(!section || !section.name){
        return {
            data:null,
            message:"Missing fields",
            error:"Section does not contain the required fields"
        };
    }

    const payload = {
        name:section?.name,
        description : section?.description
    };

    const response :AxiosResponse<SectionCreationResponse> = await axios.post("http://localhost:5000/api/user/section",payload);

    return response.data;
};