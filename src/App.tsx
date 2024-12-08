import {Routes,Route} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "@reduxjs/toolkit/query";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/Homepage";
import ResumeSection from "./pages/admin/ResumeSections.page";
import TemplateAdmin from "./pages/admin/TemplateAdmin.page";
import { checkAuth } from "./redux/features/authSlice";
import ProtectedLayout from "./layout/ProtectedLayout";
import ChooseDirection from "./pages/ChooseDirection";
import Dashboard from "./pages/Dashboard";
import ProfylrLayout from "./layout/ProfylrLayout";
import ResumeTimeline from "./pages/ResumeTimeline";

const  App = ()=> {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());  // Check if token exists and set authentication state
    }, [dispatch]);

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>} >
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route element={<ProfylrLayout/>} >
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/timeline" element={<ResumeTimeline/>} />
                    </Route>
                    <Route  element={<ProtectedLayout/>} >
                        <Route path="/template" element={<TemplateAdmin />} />
                        <Route path="/section" element={<ResumeSection />} />

                        <Route path="/home" element={<Homepage />} />
                        <Route path="/select-service" element={<ChooseDirection/>} />

                        <Route path="/manual-resume" element={<ChooseDirection/>} />
                        <Route path="/ai-resume" element={<Homepage/>} />
                        <Route path="/webscrap" element={<ChooseDirection/>} />
                    </Route>
                </Route>

            </Routes>
        </>
    );
};

export default App;
