import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { SectionType } from "@/models/resumeSection.type";
import { sectionValidationSchema } from "@/validations/sectionValidationSchema";
import { ErrorMessage, Field, Form, Formik,FormikHelpers } from "formik";
import React from "react";


const initialValues :SectionType = {
    name:"",
    description:""
};

const CreateResumeSection = () => {

    const {toast} = useToast();

    const handleSectionSubmission= (values:SectionType,{setSubmitting}: FormikHelpers<SectionType> )=>{
        console.log(values);
        setSubmitting(false);

        toast({
            title:"Values added successfully",
        });
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
                                    <Form className="h-full w-full flex flex-col items-center justify-center relative ">
                                        <div className="h-full w-full flex flex-col items-center justify-center gap-16" >

                                            <div className="w-[40rem] flex items-center justify-center gap-2">
                                                <label htmlFor="name" className="text-themeCream font-medium text-6xl whitespace-nowrap ">Name :</label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    className="w-full mt-4 text-xl font-medium bg-themeDarkGreen rounded-2xl text-themeCream px-4 py-3"
                                                />
                                            </div>

                                            <div  className="w-[50rem] flex items-center justify-center gap-2 ">
                                                <label htmlFor="description" className="text-themeCream font-medium text-6xl whitespace-nowrap  ">Description :</label>
                                                <Field
                                                    as="textarea"
                                                    name="description"
                                                    rows={4}
                                                    className="text-lg font-medium bg-themeDarkGreen rounded-2xl text-themeCream w-full"
                                                />
                                           
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`absolute bottom-10   px-6 py-2 text-xl 
                    font-bold text-themeCream rounded-xl 
                    bg-black hover:bg-themeCream hover:text-themeDarkGreen
                    ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""} transition-all duration-300 ease-in-out`}
                                            >
                                                {isSubmitting ? "Submitting..." : "Submit"}
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