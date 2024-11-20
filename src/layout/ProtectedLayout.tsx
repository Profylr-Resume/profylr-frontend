import { useAuth } from "@/hooks/useAuth";
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

    return <Outlet/>;
};

export default ProtectedLayout;