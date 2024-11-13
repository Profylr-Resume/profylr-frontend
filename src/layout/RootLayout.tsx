import React from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";


const RootLayout = () => {
    return (
        <div className="min-h-screen max-w-screen max-h-screen">
            <main className="flex-grow">
                <Outlet /> 
            </main>
            <Toaster />
        </div>
    );
};

export default RootLayout;