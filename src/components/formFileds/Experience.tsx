import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { experienceValidationSchema } from "@/validations/experienceValidationSchema";

const initialValues = {
    organisationName: "",
    position: "",
    from: "",
    to: "",
    description: [""]
};


const Experience = () => {


    return (
        <main className="h-screen w-screen flex items-center justify-center" > 
            <Formik
                initialValues={initialValues}
                validationSchema={experienceValidationSchema}
                onSubmit={(values) => {
                    console.log("Form submitted with values:", values);
                }}
            >
                {({ values, isSubmitting }) => (
                    <Form className="flex flex-col gap-8"> 
                        <h1 className="text-4xl font-bold text-blue-500" >Experience</h1>
                        <div className="flex items-center gap-4" >
                            <label htmlFor="organisationName">Organisation Name</label>
                            <Field name="organisationName" type="text" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="organisationName" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4">
                            <label htmlFor="position">Position</label>
                            <Field name="position" type="text" className="border border-gray-500 px-2 py-1 rounded-lg"/>
                            <ErrorMessage name="position" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4">
                            <label htmlFor="from">Start Date</label>
                            <Field name="from" type="date" className="border border-gray-500 px-2 py-1 rounded-lg"/>
                            <ErrorMessage name="from" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4">
                            <label htmlFor="to">End Date</label>
                            <Field name="to" type="date" className="border border-gray-500 px-2 py-1 rounded-lg" />
                            <ErrorMessage name="to" component="div" className="error" />
                        </div>

                        <div className="flex items-center gap-4 ">
                            <label>Description</label>
                            <FieldArray name="description">
                                {({ push, remove }) => (
                                    <div className="flex flex-col gap-4" >
                                        {values.description.map((_, index) => (
                                            <div key={index} className="flex items-center gap-4" >
                                                <Field name={`description[${index}]`} type="text" placeholder={`Description ${index + 1}`} className="px-2 py-1 border border-gray-500 rounded-lg" />
                                                <ErrorMessage name={`description[${index}]`} component="div" className="error" />
                                                <button type="button" className="bg-red-700 px-2 py-1 rounded-xl font-semibold text-white" onClick={() => remove(index)}>
                                                  Remove
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" className="border bg-blue-400 text-white rounded-xl border-blue-600" onClick={() => push("")}>
                                          Add Description
                                        </button>
                                    </div>
                                )}
                            </FieldArray>
                        </div>

                        <button type="submit" className="bg-blue-700 rounded-xl text-white text-semibold py-1" disabled={isSubmitting}>
            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </main>

    );
};

export default Experience;