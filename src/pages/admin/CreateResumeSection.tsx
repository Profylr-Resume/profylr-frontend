import { sectionValidationSchema } from "@/validations/sectionValidationSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";

interface SectionType{
    name:string,description:string
}

const initialValues :SectionType = {
    name:"",
    description:""
};

const CreateResumeSection = () => {


    const handleSectionSubmission= (values:SectionType)=>{
        console.log(values);
    };


    return (
        <main className="h-screen w-screen bg-themeDarkGreen flex items-center justify-center " >
            <div className=" h-[40rem] w-[80rem] bg-themeLightGreen rounded-xl shadow-2xl relative" >
                <h1 className="font-bold text-themeCream text-[8rem] absolute top-[-8rem] " > Resume Sections</h1>
                
                <div className="h-full w-full flex items-center justify-center" >
                    <div className="h-full w-full" >
                        <Formik
                            initialValues={initialValues}
                            validationSchema={sectionValidationSchema}
                            onSubmit={(values)=> handleSectionSubmission(values) }
                        >
                            {()=>(
                                <>
                                    <Form className="h-full w-full flex flex-col items-center justify-center relative ">
                                        <div className="h-full w-full flex flex-col items-center justify-center gap-16" >

                                            <div className="w-full flex items-center justify-center gap-2">
                                                <label htmlFor="name" className="text-themeCream font-medium text-6xl">Name :</label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    className="mt-4 text-xl font-medium bg-themeDarkGreen rounded-2xl text-themeCream px-4 py-3"
                                                />
                                            </div>

                                            <div  className="w-[50rem] flex items-center justify-center gap-2 ">
                                                <label htmlFor="description" className="text-themeCream font-medium text-6xl whitespace-nowrap ">Description :</label>
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
                                                className="absolute bottom-10 border-4 border-themeDarkGreen px-4 py-2 text-xl 
             font-bold text-themeCream rounded-xl bg-gradient-to-br from-themeLightGreen to-themeDarkGreen
             hover:bg-themeCream hover:text-themeDarkGreen hover:border-themeLightGreen transition-all duration-300 ease-in-out"
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