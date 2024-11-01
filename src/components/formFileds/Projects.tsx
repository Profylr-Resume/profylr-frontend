import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { projectValidationSchema } from "@/validations/projectsValidationSchema";

const initialValues = {
    name: "",
    technologiesUsed: [""],
    from: "",
    to: "",
    sourceCodeRepository: "",
    liveLink: "",
    description: [""]
};

const Projects = () => {

    return (
        <main className="h-screen w-screen flex items-center justify-center" >
            <Formik
                initialValues={initialValues}
                validationSchema={projectValidationSchema}
                onSubmit={(values) => {
                    console.log("Form submitted with values:", values);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form className="flex flex-col gap-8"> 
                        <h1 className="text-4xl text-blue-500 font-bold">Projects</h1>
                        <div className="flex items-center gap-4" >
                            <label htmlFor="name">Project Name</label>
                            <Field name="name" type="text" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4" >
                            <label>Technologies Used</label>
                            <FieldArray name="technologiesUsed">
                                {({ push, remove }) => (
                                    <div>
                                        {values.technologiesUsed.map((_, index) => (
                                            <div key={index}>
                                                <Field name={`technologiesUsed[${index}]`} type="text" placeholder={`Technology ${index + 1}`} className="border border-gray-500 px-2 py-1 rounded-lg" />
                                                <ErrorMessage name={`technologiesUsed[${index}]`} component="div" className="error" />
                                                <button type="button" onClick={() => remove(index)}>
                        Remove
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push("")}>
                    Add Technology
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        <div className="flex items-center gap-4" >
                            <label htmlFor="from">Start Date (YYYY-MM)</label>
                            <Field name="from" type="text" placeholder="YYYY-MM" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="from" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4" >
                            <label htmlFor="to">End Date (YYYY-MM)</label>
                            <Field name="to" type="text" placeholder="YYYY-MM" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="to" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4" >
                            <label htmlFor="sourceCodeRepository">Source Code Repository</label>
                            <Field name="sourceCodeRepository" type="url" placeholder="https://github.com/your-repo" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="sourceCodeRepository" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4" >
                            <label htmlFor="liveLink">Live Link</label>
                            <Field name="liveLink" type="url" placeholder="https://your-project-link.com" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="liveLink" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4" >
                            <label>Project Description</label>
                            <FieldArray name="description">
                                {({ push, remove }) => (
                                    <div>
                                        {values.description.map((_, index) => (
                                            <div key={index}>
                                                <Field name={`description[${index}]`} type="text" placeholder={`Description ${index + 1}`} className="border border-gray-500 px-2 py-1 rounded-lg" />
                                                <ErrorMessage name={`description[${index}]`} component="div" className="error" />
                                                <button type="button" onClick={() => remove(index)}>
                        Remove
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={() => push("")}>
                    Add Description
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        <button type="submit" disabled={isSubmitting} className="text-xl font-semibold bg-blue-600 text-white  rounded-xl py-2" >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </main>
    );
};

export default Projects;