import { useAuth } from "@/hooks/useAuth";
import { useLoginWithToken } from "@/hooks/useLoginWihtToken";
import UserProfile from "@/shared/UserProfile";
import { useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";

const ProtectedLayout = () => {
    const loginRes = useLoginWithToken();
    const isAuthenticated = useAuth();
    const navigate = useNavigate();
    useEffect(()=>{
        console.log(isAuthenticated);
    },[isAuthenticated]);

    useEffect(()=>{
        if(loginRes && loginRes?.error){
            navigate("/login");
        }
    },[loginRes]);
    if(!isAuthenticated ){
        return <Navigate to="/login" />;
    }

  

    return(
        <main className="flex h-full w-full bg-gradient-to-br from-themeGreen to-themeGray " >
            <div className="h-screen w-[92%]" >
                <Outlet/>
            </div>
            <div className="h-screen w-[8%]" >
                <UserProfile/>
            </div>
        </main>
    );
};

export default ProtectedLayout;