import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/models/user.interface";

const BASE_URL=import.meta.env.VITE_BACKEND_BASE_URL;


const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/auth`, 
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user:User) => ({
                url: "/register",
                method: "POST",
                body: user,
            }),
        }),
        login: builder.mutation({
            query: (credentials:User) => ({
                url: "/login",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;

export default authApi;