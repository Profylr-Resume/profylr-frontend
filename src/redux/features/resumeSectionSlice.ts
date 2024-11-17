import { SectionType } from "@/models/resumeSection.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL=import.meta.env.VITE_BACKEND_BASE_URL;

const resumeSectionApi = createApi({
    reducerPath:"resumeSections",
    baseQuery:fetchBaseQuery({baseUrl:`${BASE_URL}/user/section`}),
    tagTypes:["ResumeSections"],
    endpoints:(builder)=>({ 
        
        createSection : builder.mutation({
            query:(newSection:SectionType)=>{
                return({
                    url:"/",
                    method:"POST",
                    body:newSection
                });
            },
            invalidatesTags:["ResumeSections"]
        }),

        allSections:builder.query({
            query:():{url:string,method:string}=>({
                url:"/",
                method:"GET",
            }),
            providesTags:["ResumeSections"]
        }),
        // Endpoint to fetch a section by ID
        getSectionById: builder.query({
            query: (id:string) => ({
                url: `/${id}`,
                method: "GET",
            }),
            providesTags:["ResumeSections"]
        }),
  
        // Endpoint to update a section
        updateSection: builder.mutation({
            query: ({ id, data }:{id:string,data:SectionType}) => ({
                url: `/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags:["ResumeSections"]
        }),
  
        // Endpoint to delete a section
        deleteSection: builder.mutation({
            query: (id:string) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["ResumeSections"]
        }),
    }),
    
});

export const {useCreateSectionMutation , useAllSectionsQuery ,useDeleteSectionMutation,useGetSectionByIdQuery,useUpdateSectionMutation}  = resumeSectionApi;

export default resumeSectionApi;

  