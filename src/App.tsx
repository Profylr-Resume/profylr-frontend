import {Routes,Route} from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import RootLayout from "./layout/RootLayout";
import Homepage from "./pages/Homepage";
import ResumeSection from "./pages/admin/ResumeSections.page";
import TemplateAdmin from "./pages/admin/TemplateAdmin.page";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>} >
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />

                    <Route path="/template" element={<TemplateAdmin />} />
                    <Route path="/section" element={<ResumeSection />} />
                    <Route path="/home" element={<Homepage />} />
                    {/* 
                    <Route path="/persona" element={<Persona/>} />
                    <Route path="/selectTemplate" element={<TemplateSelection />} />
             
                    <Route path="/generate" element={<GenerateResume />} />
                    <Route path="/bye" element={<HoverEffect />} />

                    <Route path="/resume" element={<GeneratedResume/>} />
                    <Route path="/forms" element={<ResumeForm/>} />
                    <Route path="/education" element={<Education/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/experience" element={<Experience/>} />
                    <Route path="/basicInfo" element={< BasicInfo  />} /> */}
                </Route>

            </Routes>
        </>
    );
}

export default App;
