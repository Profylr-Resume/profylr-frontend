import {Routes,Route,Navigate} from "react-router-dom";
import BuildingInterface from "./pages/BuildingInterface";

import Education from "./components/formFileds/Education";
import Skills from "./components/formFileds/Skills";
import Projects from "./components/formFileds/Projects";
import Experience from "./components/formFileds/Experience";
import BasicInfo from "./components/formFileds/BasicInfo";
import GeneratedResume from "./components/GeneratedResume";
import ResumeForm from "./components/ResumeForm";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Persona from "./pages/Persona";
import TemplateForm from "./pages/admin/CreateTemplate";
import CreateResumeSection from "./pages/admin/CreateResumeSection";
import RootLayout from "./layout/RootLayout";

function App() {

    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayout/>} >
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/persona" element={<Persona/>} />
                    <Route path="/template" element={<TemplateForm />} />
                    <Route path="/template" element={<TemplateForm />} />
                    <Route path="/section" element={<CreateResumeSection />} />

                    <Route path="/resume" element={<GeneratedResume/>} />
                    <Route path="/forms" element={<ResumeForm/>} />
                    <Route path="/education" element={<Education/>} />
                    <Route path="/skills" element={<Skills/>} />
                    <Route path="/projects" element={<Projects/>} />
                    <Route path="/experience" element={<Experience/>} />
                    <Route path="/basicInfo" element={< BasicInfo  />} />
                </Route>

            </Routes>
        </>
    );
}

export default App;
