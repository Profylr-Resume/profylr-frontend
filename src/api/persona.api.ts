import { PersonaType } from "@/models/persona.interface";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// Function to create a new persona
export const createPersonaApi = async (data: PersonaType): Promise<any> => {
    try {
        const response = await axios.post(`${BASE_URL}/user/persona`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        return response.data;
    } catch (error: any) {
        console.error("Error creating persona:", error.response?.data?.error || error.message);
        throw new Error(error.response?.data?.error || "Failed to create persona");
    }
};

// Function to delete a persona
export const deletePersonaApi = async (personaId: string): Promise<any> => {
    try {
        const response = await axios.delete(`${BASE_URL}/persona/${personaId}`);
        return response.data;
    } catch (error: any) {
        console.error("Error deleting persona:", error.response?.data?.error || error.message);
        throw new Error(error.response?.data?.error || "Failed to delete persona");
    }
};

export const getPersonalizedTemplateStructureApi = async (data): Promise<any> => {
    try {
        const response = await axios.post(`${BASE_URL}/user/misc`, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(response);
        return response.data;
    } catch (error: any) {
        console.error("Error creating persona:", error.response?.data?.error || error.message);
        throw new Error(error.response?.data?.error || "Failed to create persona");
    }
};