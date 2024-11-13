import { createSection } from "@/api/resumeSection";
import { Button } from "@/components/ui/button";
import { glassyLightGreen } from "@/css/backgrounds";
import { blackButton } from "@/css/buttons";
import { SectionType } from "@/models/resumeSection.type";
import { sectionValidationSchema } from "@/validations/sectionValidationSchema";
import { ErrorMessage, Field, Form, Formik,FormikHelpers } from "formik";
import React from "react";
import { toast } from "react-toastify";


const initialValues :SectionType = {
    name:"",
    description:""
};

const CreateResumeSection = () => {


    const handleSectionSubmission= async(values:SectionType,{setSubmitting}: FormikHelpers<SectionType> ):void=>{
        console.log(values);
        setSubmitting(false);

        const newSection = await createSection(values);
        if(newSection){
            toast.success("NEw Section Created!");
        }
        toast.error("Error While Creating section");
    };


    return (
        <main className="h-screen w-screen bg-themeDarkGreen flex items-center justify-center relative pt-10 " >
            <div className=" h-[40rem] w-[80rem] shadow-2xl relative  " >
                <h1 className="font-bold text-themeCream text-[8rem]  absolute top-[-8rem] " > Resume Sections</h1>
                
                <div  className="h-full w-full flex items-center justify-center bg-gradient-to-br from-themeLightGreen to-[#A6C86F] bg-opacity-30 backdrop-blur-lg shadow-2xl absolute top-2 z-10 rounded-xl " >
                    <div className="h-full w-full" >
                        <Formik
                            initialValues={initialValues}
                            validationSchema={sectionValidationSchema}
                            onSubmit={(values,helpers)=> handleSectionSubmission(values,helpers) }
                        >
                            {({isSubmitting})=>(
                                <>
                                    <Form className="h-full w-full flex flex-col items-center justify-end gap-[10rem] pb-16 relative ">
                                        <div className="w-full px-32 flex flex-col items-center justify-center gap-10" >

                                            <div className="w-full  flex items-center justify-center gap-2">
                                                <label htmlFor="name" className="w-1/2 text-center text-themeCream font-medium text-6xl whitespace-nowrap ">Name :</label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    autoComplete="off"
                                                    className={`w-full mx-24 text-xl font-medium ${glassyLightGreen} border-0 rounded-2xl text-themeBlack px-4 py-3`}
                                                />
                                            </div>

                                            <div  className="w-full flex items-center justify-center gap-2 ">
                                                <label htmlFor="description" className="w-1/2 text-center text-themeCream font-medium text-6xl whitespace-nowrap  ">Description :</label>
                                                <Field
                                                    as="textarea"
                                                    name="description"
                                                    rows={4}
                                                    className={`w-full mx-8 text-xl font-medium ${glassyLightGreen} border-0 rounded-2xl text-themeBlack px-4 py-3`}
                                                />
                                           
                                            </div>
                                        </div>

                                        <div>
                                            <button 
                                                type="submit"
                                                className={`${blackButton}`}
                                            >
                                                            Submit
                                            </button>

                                        </div>
                                    </Form>

                                </>
                            )}
                        </Formik>
                    </div>
                </div>
           
            </div>
        </main>
    );
};

export default CreateResumeSection;