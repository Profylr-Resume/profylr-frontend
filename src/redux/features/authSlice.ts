import { AuthState } from "@/types/authState.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState: AuthState = {
    isAuthenticated: false,
    token: Cookies.get("auth_token") || null,  // Get token from cookies if it exists
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = true;
            state.token = action.payload;
            Cookies.set("auth_token", action.payload);  // Store the token in cookies
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            Cookies.remove("auth_token");  // Remove token from cookies
        },
        checkAuth: (state) => {
            if (state.token) {
                state.isAuthenticated = true;
            }
        }
    },
});

export const { login, logout, checkAuth } = authSlice.actions;
export default authSlice.reducer;
