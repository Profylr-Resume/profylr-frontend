import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    loading:false
};

export const createPersonaThunk = createAsyncThunk("hello",async(persona,{rejectWithValue})=>{
    try{
        // const res = await ;
        // return res; 
    }
    catch(err){
        return rejectWithValue(err.response.data.message || "Error fetching Routes");
    }

});

const personaSlice = createSlice({
    name:"persona",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
            .addCase(createPersonaThunk.pending,(state)=>{
                state.loading=true;
            })
            .addCase(createPersonaThunk.fulfilled,(state,action)=>{
                state.persona = action.payload.personaCreated;
                state.loading = false;
                state.error = false;
            })
            .addCase(createPersonaThunk.rejected,(state)=>{
                state.error = true,
                state.loading = false;
            });
    }

});


export default personaSlice.reducer;