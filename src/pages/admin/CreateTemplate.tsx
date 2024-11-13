import { ResumeSection, TemplateType } from "@/models/template.type";
import { FormControl, TextField } from "@mui/material";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { templateSettings } from "lodash";
import React, { useState } from "react";



const initialState : TemplateType ={
    name:"",
    description:"",
    html:"",
    sections:[{
        section:{
            _id:""
        },
        html:""
    }]
};

const dummyArray = [
    { _id: "1", name: "Alice" },
    { _id: "2", name: "Bob" },
    { _id: "3", name: "Charlie" },
    { _id: "4", name: "Diana" },
    { _id: "5", name: "Ethan" },
    { _id: "6", name: "Fiona" },
    { _id: "7", name: "George" },
    { _id: "8", name: "Hannah" },
    { _id: "9", name: "Ian" },
    { _id: "10", name: "Julia" },
];

interface SectionTab {
    name:string,
    _id:string,
    html:string
}

const CreateTemplate = () => {


    

    const [selectedSection, setSelectedSection] = useState<string | null>(null);
    const [tabs, setTabs] = useState<SectionTab[]>([]); // Keeps track of added tabs
    const [activeTab, setActiveTab] = useState<string | null>(null); // Tracks the active tab

    const handleSectionChange = (e):void => {
        const newSection = e?.target?.value;
        if (newSection && !tabs.some(tab => tab._id === newSection)) {
            const selectedTab = dummyArray.find(item => item._id === newSection);
            if(selectedTab){
                setTabs([...tabs, {...selectedTab,html:""}]); // Add new tab if not already added
                setActiveTab(selectedTab._id); // Set the newly added tab as active
            }
        }
    };

    const removeTab = (id:string):void => {
        const updatedTabs = tabs.filter(tab => tab._id !== id); // Remove tab by id
        setTabs(updatedTabs);
        if (activeTab === id && updatedTabs.length > 0) {
            // Set active tab to the first tab if the removed tab was the active one
            setActiveTab(updatedTabs[0]._id);
        } else if (updatedTabs.length === 0) {
            // If no tabs remain, reset active tab
            setActiveTab(null);
        }
    };

    const handleTabClick = (id:string):void => {
        setActiveTab(id); // Set clicked tab as active
    };

    const handleTabHtmlChange = (e: React.ChangeEvent<HTMLInputElement>, tabId: string) => {
        const updatedTabs = tabs.map(tab =>
            tab._id === tabId ? { ...tab, html: e.target.value } : tab
        );
        setTabs(updatedTabs); // Update the `tabs` state with the new HTML value for the active tab
    };

    const handleTemplateSubmission = (values:TemplateType,{resetForm}:FormikHelpers<TemplateType>)=>{
        console.log(values);
    };
    
    return (
        <main className="h-screen w-screen bg-themeDarkGreen flex items-center justify-center relative pt-10 " >
            <div className=" h-[40rem] w-[80rem] shadow-2xl relative  " >
                <h1 className="font-bold text-themeCream text-[8rem]  absolute top-[-8rem] " > Create Template</h1>
            
                <div  className="h-full w-full flex items-center justify-center bg-gradient-to-br from-themeLightGreen to-[#A6C86F] bg-opacity-30 backdrop-blur-lg p-6   shadow-2xl  absolute top-4 z-10 rounded-xl " >
                    <div className="h-full w-full">

                        <Formik 
                            initialValues={initialState}
                            validationSchema={templateSettings}
                            onSubmit={(values,helpers):void=>handleTemplateSubmission(values,helpers)}
                        >
                            {()=>(
                                <Form className="h-full w-full " >

                                    <div className="h-[30%] w-full  flex items-center justify-center  " >

                                        <div className="w-[40%] h-full flex flex-col items-center justify-center gap-4" >

                                            <div className="flex items-center gap-2">
                                                <label htmlFor="name" className="block text-2xl text-themeCream font-bold ">Name :</label>
                                                <Field
                                                    id="name"
                                                    name="name"
                                                    className="w-[15rem] block  px-3 py-2  font-semibold  text-lg  border-0 bg-[rgba(255,255,255,0.3)] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl "
                                                />
                                            </div>
      
                                            {/* Description */}
                                            <div className="flex items-center gap-2 ">
                                                <label htmlFor="description" className="block text-2xl text-themeCream font-bold ">Description :</label>
                                                <Field
                                                    id="description"
                                                    name="description"
                                                    className="w-[15rem] block  px-3 py-2  font-semibold  text-lg  border-0 bg-[rgba(255,255,255,0.3)] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl "
                                                />
                                            </div>
                                        </div>

                                        <div className="w-[60%] p-10 " >
                                            {/* HTML */}
                                            <div className=" flex flex-col">
                                                <label htmlFor="html" className="block text-lg font-semibold text-gray-800">HTML</label>
                                                <Field
                                                    as="textarea"
                                                    id="html"
                                                    name="html"
                                                    rows={4}
                                                    className="text-md  font-medium tracking-wide mt-1 block w-full px-3 py-2 rounded-xl border-0 bg-[rgba(255,255,255,0.3)] bg-opacity-50 backdrop-blur-md shadow-lg"
                                                />
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <hr />

                                    <div className="h-[60%] w-full flex pb-10  " >

                                        {/* Left Section with Dropdown */}
                                        <div className="w-[40%] h-full p-10">
                                            <div className="w-full h-full flex flex-col items-start justify-start gap-6 px-20 pt-5">
                                                <label htmlFor="dropdown" className="block text-4xl font-medium text-themeCream mb-2">
                        Select Sections
                                                </label>
                                                <select
                                                    id="dropdown"
                                                    value={selectedSection || ""}
                                                    onChange={handleSectionChange}
                                                    className="w-[13rem] px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-themeLightGreen"
                                                >
                                                    <option value="" disabled={true}>Select a section</option>
                                                    {dummyArray.map((item) => (
                                                        <option key={item._id} value={item._id}>
                                                            {item.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        {/* Right Section with Tabs */}
                                        {tabs && tabs.length>0 && (
                                            <div className="w-[60%] h-full p-10">
                                                {/* Display Tabs */}
                                                {tabs.length > 0 && (
                                                    <div className="flex items-center gap-3">
                                                        {tabs.map((tab) => (
                                                            <div
                                                                key={tab._id}
                                                                className={`flex  relative bg-themeBlack text-white rounded-xl pl-4 pr-8 py-1 cursor-pointer ${
                                                                    activeTab === tab._id ? "bg-themeBlack" : "bg-gray-600"
                                                                }`}
                                                                onClick={() => handleTabClick(tab._id)} // Handle tab click
                                                            >
                                                                <span>{tab.name}</span>
                                                                <button
                                                                    type="button"
                                                                    onClick={(e) => {
                                                                        e.stopPropagation(); // Prevent tab click when remove button is clicked
                                                                        removeTab(tab._id);
                                                                    }}
                                                                    className="absolute top-0 right-3 text-lg text-white font-bold hover:text-red-500"
                                                                >
                                                                    ×
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Tab Content */}
                                                <div className="h-full mt-4   rounded-lg ">
                                                    {tabs.map((tab) => (
                                                        <div
                                                            key={tab._id}
                                                            className={`h-full w-full ${activeTab === tab._id ? "block" : "hidden"}`}
                                                        >
                                                            <label htmlFor="tabhtml" className="block text-lg font-semibold text-gray-800">
                                                             HTML
                                                            </label>
                                                            <FormControl fullWidth={true}>
                                                                <TextField
                                                                    id="tabhtml"
                                                                    name="tabhtml"
                                                                    value={tab.html} // Bind the textarea value to the tab's html field
                                                                    onChange={(e) => handleTabHtmlChange(e, tab._id)} // Update the html content for the active tab
                                                                    rows={9}
                                                                    multiline={true}
                                                                    variant="outlined"
                                                                    className="text-md font-medium tracking-wide mt-1 block w-full px-3 py-2 rounded-xl border-0 bg-[rgba(255,255,255,0.3)] bg-opacity-50 backdrop-blur-md shadow-lg"
                                                                    inputProps={{
                                                                        spellCheck: "false", // Disable spell check
                                                                        autoCorrect: "off", // Disable autocorrect
                                                                        autoCapitalize: "off", // Disable autocapitalization
                                                                    }}
                                                                />
                                                            </FormControl>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )} 
                                    </div>

                                    <div className="h-[10%] w-full flex items-end justify-center" >
                                        <button type="submit" className="px-6 py-1 text-white text-lg font-semibold rounded-lg bg-black bg-opacity-90 backdrop-blur-md border-2 border-transparent hover:bg-opacity-60 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white">
                                                Submit
                                        </button>

                                    </div>
                                </Form>
                            )}

                        </Formik>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default CreateTemplate;