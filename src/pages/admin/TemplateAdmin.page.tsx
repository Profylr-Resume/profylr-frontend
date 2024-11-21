import CreateTemplate from "@/components/admin/CreateTemplate";
import ViewAllTemplates from "@/components/admin/ViewAllTemplates";
import { Button } from "@/components/ui/button";
import { useState } from "react";

enum Tabs{
    Create = "create",
    View = "view"
}

const TemplateAdmin = () => {

    const [activetab,setActivetab] = useState<Tabs>(Tabs.Create);

    const handleTabsToggle = ():void=>{
        console.log("hjello");
        setActivetab((prev)=> prev==="create" ? Tabs.View : Tabs.Create);
    };

    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeGreen to-themeGray flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-3rem] left-[10%] " >Admin Template </h1>
            
                <div
                    className="h-[40rem] w-[90rem] flex flex-col items-center justify-center bg-gradient-to-br from-themeLightPurple to-themeDarkPurple bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[9rem] left-[10%] z-10 rounded-xl"
                    style={{
                        boxShadow: "3px 3px 18px #1f2937, -3px 3px 20px #1f2937",
                    }}
                >
                    <div className="h-[6%]  w-full text-end mt-2 mr-4" >
                        <Button  type="button" onClick={handleTabsToggle} >{activetab === "create" ? "View All" : "Create"} </Button>
                    </div>
                    <div className="h-[94%] w-full " >
                        {activetab ==="create" ?  <CreateTemplate/> : <ViewAllTemplates/> }

                    </div>
                </div>
            </div>
        </main>
    );
};

export default TemplateAdmin;