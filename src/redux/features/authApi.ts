import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/types/user.interface";
import Cookies from "js-cookie";

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
        loginUsingToken:builder.mutation({
            query:(jwt)=>
                ({
                    url:"/verifyJwt",
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${jwt}`,
                    },
                })
        })
    }),
});

export const { useRegisterMutation, useLoginMutation , useLoginUsingTokenMutation } = authApi;

export default authApi;