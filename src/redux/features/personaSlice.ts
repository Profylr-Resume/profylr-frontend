import { createPersonaApi, deletePersonaApi, getPersonalizedTemplateStructureApi } from "@/api/persona.api";
import { PersonaType } from "@/models/persona.interface";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface PersonaState {
  loading: boolean;
  persona: PersonaType; // Adjust this type if you have a more specific shape for a persona
  error: boolean | null;
  message?:string
}

const initialState :PersonaState = {
    persona:{
        experienceLevel: "",
        targetRole: "",
        background: {
            yearsOfExperience: "",
            education: {
                level: ""
            },
            hasProjects: false,
            hasCertifications: false,
            industries: []
        },
        strengths: [],
        goals: []
    },
    error:false,
    loading:false,
};


// Async thunk for creating a persona
export const createPersonaThunk = createAsyncThunk (
    "persona/createPersona",
    async (payload: PersonaType, { rejectWithValue }) => {
        try {
            const {data,error,message} = await createPersonaApi(payload);
            if (error) {
                return rejectWithValue(error);
            }
            return {data,message};
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const personalizedTemplateStrutureThunk = createAsyncThunk (
    "persona/personalizedTemplateStructure",
    async (payload: PersonaType, { rejectWithValue }) => {
        try {
            const {data,error,message} = await getPersonalizedTemplateStructureApi(payload);
            if (error) {
                return rejectWithValue(error);
            }
            return {data,message};
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// Async thunk for deleting a persona
export const deletePersonaThunk = createAsyncThunk(
    "persona/deletePersona",
    async (personaId: string, { rejectWithValue }) => {
        try {
            const response = await deletePersonaApi(personaId);
            if (!response.success) {
                return rejectWithValue(response.error);
            }
            return response.deletedPersona;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Create the slice
const personaSlice = createSlice({
    name: "persona",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    // Handle createPersona
        builder
            .addCase(createPersonaThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createPersonaThunk.fulfilled, (state, action: PayloadAction<any>) => {
                const { data, message } = action.payload;
                state.loading = false;
                state.persona = data;
                state.message = message;
            })
            .addCase(createPersonaThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
            });

        // Handle deletePersona
        builder
            .addCase(deletePersonaThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePersonaThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.persona = action.payload;
            })
            .addCase(deletePersonaThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })

            .addCase(personalizedTemplateStrutureThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(personalizedTemplateStrutureThunk.fulfilled, (state, action: PayloadAction<any>) => {
                const { data, message } = action.payload;
                state.loading = false;
                state.persona = data;
                state.message = message;
            })
            .addCase(personalizedTemplateStrutureThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload;
            });
    },
});

export default personaSlice.reducer;
