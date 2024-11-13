import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RootLayout = () => {
    return (
        <div className="min-h-screen max-w-screen max-h-screen">
            <main className="flex-grow">
                <Outlet /> 
            </main>
            {/* ToastContainer should only be placed once */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick={true} 
                rtl={false} 
                pauseOnFocusLoss={true} 
                draggable={true} 
                pauseOnHover={true}
                theme="dark"
            />
        </div>
    );
};

export default RootLayout;