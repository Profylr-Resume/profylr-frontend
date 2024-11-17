import CreateSection from "@/components/admin/CreateSection";
import ViewAllSections from "@/components/admin/ViewAllSections";
import { Button } from "@/components/ui/button";
import { useState } from "react";

enum Tabs{
    Create = "create",
    View = "view"
}

const ResumeSection = () => {

    const [activetab,setActivetab] = useState<Tabs>(Tabs.Create);

    const handleTabsToggle = ()=>{
        setActivetab((prev)=> prev==="create" ? Tabs.View : Tabs.Create);
    };
    
    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeLightPurple to-themeDarkPurple flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-2rem] left-[11.3%] " > Resume Sections</h1>
                
                <div
                    className="h-[36rem] w-[90rem] flex flex-col items-center justify-center bg-gradient-to-br from-themeLightPurple to-themeDarkPurple bg-opacity-30 backdrop-blur-lg 
                                absolute top-[10rem] left-[10%] z-10 rounded-xl "
                    style={{
                        boxShadow: "3px 3px 18px #1f2937, -3px 3px 20px #1f2937",
                    }}
                >
                    <div className="w-full text-end mt-2 mr-4" >
                        <Button onClick={handleTabsToggle} >{activetab === "create" ? "View All" : "Create"} </Button>
                    </div>
                    {activetab ==="create" ?  <CreateSection/>  : <ViewAllSections  /> }
                </div>
           
            </div>
        </main>
    );
};

export default ResumeSection;