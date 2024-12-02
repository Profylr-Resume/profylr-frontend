import { useAuth } from "@/hooks/useAuth";
import UserProfile from "@/shared/UserProfile";
import { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout = ():JSX.Element => {

    const isAuthenticated = useAuth();
   
    useEffect(()=>{
        console.log(isAuthenticated);
    },[isAuthenticated]);

    if(!isAuthenticated){
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