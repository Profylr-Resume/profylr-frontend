
import { TemplateType } from "@/models/template.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL=import.meta.env.VITE_BACKEND_BASE_URL;

export const templateApi = createApi({
    reducerPath: "templateApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/user/template`, // Set base URL
    }),
    tagTypes:["Template"],
    endpoints: (builder) => ({
    // Endpoint to create a template
        createTemplate: builder.mutation({
            query: (data:TemplateType) => ({
                url: "/",
                method: "POST",
                body: data,
            }),
            invalidatesTags:["Template"]
        }),

        // Endpoint to update a template
        updateTemplate: builder.mutation({
            query: ({ id, data }:{id:string,data:TemplateType}) => ({
                url: `/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags:["Template"]
        }),

        // Endpoint to fetch a template by ID
        getTemplateById: builder.query({
            query: (id:string) => ({
                url: `/${id}`,
                method: "GET",
            }),
            providesTags:["Template"]
        }),

        // Endpoint to fetch all templates
        getAllTemplates: builder.query({
            query: () => ({
                url: "",
                method: "GET",
            }),
            providesTags:["Template"]
        }),

        // Endpoint to delete a template
        deleteTemplate: builder.mutation({
            query: (id:string) => ({
                url: `/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["Template"]
        }),
    }),
});

export const {
    useCreateTemplateMutation,
    useUpdateTemplateMutation,
    useGetTemplateByIdQuery,
    useGetAllTemplatesQuery,
    useDeleteTemplateMutation,
} = templateApi;
