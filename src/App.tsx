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

function App() {

    return (
        <>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/resume" element={<GeneratedResume/>} />
                <Route path="/forms" element={<ResumeForm/>} />
                <Route path="/education" element={<Education/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/experience" element={<Experience/>} />
                <Route path="/basicInfo" element={< BasicInfo  />} />
            </Routes>
            {/* <BuildingInterface/> */}
        </>
    );
}

export default App;
