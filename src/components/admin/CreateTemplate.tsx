import React, { useEffect, useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";
import { TemplateType } from "@/models/template.type";
import { templateValidation } from "@/validations/templateValidationSchema";
import { FormControl, TextField } from "@mui/material";
import { blackButton } from "@/css/buttons";
import { useAllSectionsQuery } from "@/redux/features/resumeSectionSlice";
import { useCreateTemplateMutation } from "@/redux/features/templateApi";

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

    const [possibleSections,setPossibleSections] = useState<SectionTab[]>([]);

    const{data:allSections} = useAllSectionsQuery({});
    const[createTemplate] = useCreateTemplateMutation();

    useEffect(()=>{
        if(allSections){
            setPossibleSections(allSections);
        }
    },[allSections]);
    
    const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>):void => {
        const newSection = e?.target?.value;
        if (newSection && !tabs.some(tab => tab._id === newSection)) {
            const selectedTab = possibleSections.find(item => item._id === newSection);
            if(selectedTab){
                setTabs([...tabs, {...selectedTab,html:""}]); // Add new tab if not already added
                setActiveTab(selectedTab._id); // Set the newly added tab as active
                setSelectedSection("");
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

    const handleTabHtmlChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, // Accept both <input> and <textarea>
        tabId: string
    ) => {
        const updatedTabs = tabs.map(tab =>
            tab._id === tabId ? { ...tab, html: e.target.value } : tab
        );
        setTabs(updatedTabs); // Update the `tabs` state with the new HTML value for the active tab
    };
      

    const handleTemplateSubmission = async( values: TemplateType, { resetForm }: FormikHelpers<TemplateType> ):Promise<void> => {
      
        // Construct the sections array directly without mutation
        const template = {
            ...values, 
            sections: tabs.map((s) => ({
                section: s._id,
                html: s.html,
            })),
        };
        
        console.log(template);

        const {data:{data,error,message}} = await createTemplate(template);

        console.log(data);

        if(error){
            toast.error(error || message);
            return;
        }
        toast.success(message);
        resetForm();
        return;
    };
    
    return (
        <div className="h-full w-full">

            <Formik 
                initialValues={initialState}
                validationSchema={templateValidation}
                onSubmit={(values,helpers):Promise<void>=>handleTemplateSubmission(values,helpers)}
            >
                {()=>(
                    <Form className="h-full w-full " >

                        <div className="h-[30%] w-full  flex items-center justify-center  " >

                            <div className="w-[40%] h-full flex flex-col items-center justify-center gap-4" >

                                <div className="flex items-center gap-2">
                                    <label htmlFor="name" className="block text-2xl text-themeWhite font-bold ">Name :</label>
                                    <Field
                                        id="name"
                                        name="name"
                                        className="w-[15rem] block  px-3 py-2  font-semibold  text-lg  border-0 bg-[rgba(255,255,255,0.3)] bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl "
                                    />
                                </div>

                                {/* Description */}
                                <div className="flex items-center gap-2 ">
                                    <label htmlFor="description" className="block text-2xl text-themeWhite font-bold ">Description :</label>
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
                                    <label htmlFor="html" className="block text-lg font-semibold text-themeWhite">HTML</label>
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

                        <div className="h-[60%] w-full flex " >

                            {/* Left Section with Dropdown */}
                            <div className="w-[40%] h-full p-10">
                                <div className="w-full h-full flex flex-col items-start justify-start gap-6 px-20 pt-5">
                                    <label htmlFor="dropdown" className="block text-4xl font-medium text-themeCream mb-2">
                                    Select Sections
                                    </label>
                                    <select
                                        id="dropdown"
                                        value={selectedSection || ""}
                                        onChange={(e)=> handleSectionChange(e)}
                                        className="w-[13rem] px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-themeLightGreen"
                                    >
                                        <option value="" disabled={true}>Select a section</option>
                                        {possibleSections.map((item) => (
                                            <option key={item._id} value={item._id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Right Section with Tabs */}
                            <div className="w-[60%] h-full bg-black text-white font-mono rounded-lg">
                                {/* Tabs Section */}
                                <div className="h-[2.5rem] flex items-center gap-1 border-b border-gray-700">
                                    {tabs.length > 0 ? (
                                        tabs.map((tab) => (
                                            <div
                                                key={tab._id}
                                                className={`relative px-4 py-2 text-sm cursor-pointer rounded-tr-lg rounded-bl-lg ${
                                                    activeTab === tab._id ? "bg-gray-800 text-white" : "bg-gray-700 text-gray-300"
                                                } hover:bg-gray-600 flex items-center`}
                                                onClick={() => handleTabClick(tab._id)}
                                            >
                                                <span>{tab.name}</span>
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation(); // Prevent tab click when remove button is clicked
                                                        removeTab(tab._id);
                                                    }}
                                                    className="absolute top-0 right-1 text-lg font-bold hover:text-red-500"
                                                >
            ×
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="px-4 py-2 text-gray-400 text-sm">
        Select a section to get started.
                                        </div>
                                    )}
                                </div>

                                {/* Tab Content */}
                                <div className="h-[calc(100%-2.5rem)] w-full rounded-lg p-4">
                                    {tabs.length > 0 ? (
                                        tabs.map((tab) => (
                                            <div
                                                key={tab._id}
                                                className={`h-full w-full ${activeTab === tab._id ? "block" : "hidden"}`}
                                            >
                                                <label
                                                    htmlFor="tabhtml"
                                                    className="block text-sm mb-2 font-semibold text-gray-300"
                                                >
                                                    {`> Edit ${tab.name}`}
                                                </label>
                                                <FormControl fullWidth={true}>
                                                    <TextField
                                                        id="tabhtml"
                                                        name="tabhtml"
                                                        value={tab.html}
                                                        onChange={(e) => handleTabHtmlChange(e, tab._id)}
                                                        rows={9}
                                                        multiline={true}
                                                        variant="outlined"
                                                        className="h-full w-full rounded-lg font-mono focus:outline-none"
                                                        InputProps={{
                                                            style: {
                                                                color: "white", // Ensures the text color is white
                                                                backgroundColor: "#1a1a1a", // Matches your `bg-gray-900` Tailwind class
                                                                border: "1px solid #4b5563", // Matches `border-gray-700` Tailwind class
                                                            },
                                                            classes: {
                                                                root: "p-2", // Padding for the input field
                                                            },
                                                        }}
                                                        inputProps={{
                                                            spellCheck: "false",
                                                            autoCorrect: "off",
                                                            autoCapitalize: "off",
                                                        }}
                                                    />
                                                </FormControl>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-400 text-center mt-10">
        No tabs available. Select a section to get started.
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>

                        <div className="h-[10%] w-full flex items-center justify-center" >
                            <button type="submit" className={`${blackButton}`}>
                                Submit
                            </button>

                        </div>
                    </Form>
                )}

            </Formik>

        </div>
    );
};

export default CreateTemplate;