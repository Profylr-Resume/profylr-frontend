import CreateTemplate from "@/components/admin/CreateTemplate";


const TemplateAdmin = () => {


    return (
        <main className="h-screen w-screen bg-gradient-to-br from-themeLightPurple to-themeDarkPurple flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-1rem] left-[10%] " > Create Template</h1>
            
                <div
                    className="h-[36rem] w-[90rem] flex items-center justify-center bg-gradient-to-br from-themeLightPurple to-themeDarkPurple bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[11rem] left-[10%] z-10 rounded-xl"
                    style={{
                        boxShadow: "3px 3px 18px #1f2937, -3px 3px 20px #1f2937",
                    }}
                >

                    <CreateTemplate/>

                </div>
            </div>
        </main>
    );
};

export default TemplateAdmin;