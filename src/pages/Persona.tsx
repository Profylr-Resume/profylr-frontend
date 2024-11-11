import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const PersonaForm = () => {
    const initialValues = {
        experienceLevel: "",
        targetRole: "",
        background: {
            yearsOfExperience: "",
            education: {
                level: ""
            },
            hasProjects: false,
            hasCertifications: false,
            industries: []
        },
        strengths: [],
        goals: []
    };

    const validationSchema = Yup.object().shape({
        experienceLevel: Yup.string()
            .oneOf(["fresher", "intermediate", "experienced"])
            .required("Experience level is required"),
        targetRole: Yup.string().required("Target role is required"),
        background: Yup.object({
            yearsOfExperience: Yup.number()
                .integer("Years of experience must be an integer")
                .positive("Years of experience must be a positive number")
                .required("Years of experience is required"),
            education: Yup.object({
                level: Yup.string()
                    .oneOf(["graduated", "inCollege", "postGraduate"])
                    .required("Education level is required"),
            }).required("Education is required"),
            hasProjects: Yup.boolean().required("Project information is required"),
            hasCertifications: Yup.boolean().required("Certification information is required"),
            industries: Yup.array()
                .of(Yup.string().required("Industry is required"))
                .required("At least one industry is required"),
        }).required("Background is required"),
        strengths: Yup.array()
            .of(Yup.string().required("Strength is required"))
            .required("At least one strength is required"),
        goals: Yup.array()
            .of(Yup.string().required("Goal is required"))
            .required("At least one goal is required"),
    });

    return (
        <main className="" >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ setFieldValue }) => (
                    <Form className="w-full h-full bg-gradient-to-r from-pink-100 to-indigo-200 p-8 flex flex-col justify-center items-center">
                        <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg space-y-6">
                            <div className="mb-4">
                                <label htmlFor="experienceLevel" className="block text-xl font-semibold text-gray-800">Experience Level</label>
                                <Field as="select" name="experienceLevel" className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                                    <option value="">Select experience level</option>
                                    <option value="fresher">Fresher</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="experienced">Experienced</option>
                                </Field>
                                <ErrorMessage name="experienceLevel" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="targetRole" className="block text-xl font-semibold text-gray-800">Target Role</label>
                                <Field type="text" name="targetRole" className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                                <ErrorMessage name="targetRole" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="background.yearsOfExperience" className="block text-xl font-semibold text-gray-800">Years of Experience</label>
                                <Field type="number" name="background.yearsOfExperience" className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500" />
                                <ErrorMessage name="background.yearsOfExperience" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="background.education.level" className="block text-xl font-semibold text-gray-800">Education Level</label>
                                <Field as="select" name="background.education.level" className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500">
                                    <option value="" disabled={true} >Select education level</option>
                                    <option value="graduated">Graduated</option>
                                    <option value="inCollege">In College</option>
                                    <option value="postGraduate">Post Graduate</option>
                                </Field>
                                <ErrorMessage name="background.education.level" component="div" className="text-red-500 mt-1" />
                            </div>

                            {/* has certifications */}
                            <div className="mb-4">
                                <label className="block text-xl font-semibold text-gray-800">
                                    <Field type="checkbox" name="background.hasProjects" className="mr-2" />
                Has Projects
                                </label>
                                <ErrorMessage name="background.hasProjects" component="div" className="text-red-500 mt-1" />
                            </div>

                            {/* has projects */}
                            <div className="mb-4">
                                <label className="block text-xl font-semibold text-gray-800">
                                    <Field type="checkbox" name="background.hasCertifications" className="mr-2" />
                Has Certifications
                                </label>
                                <ErrorMessage name="background.hasCertifications" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="background.industries" className="block text-xl font-semibold text-gray-800">Industries</label>
                                <Field
                                    name="background.industries"
                                    render={({ field }) => (
                                        <div>
                                            <input
                                                type="text"
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setFieldValue("background.industries", [...field.value, value]);
                                                }}
                                                className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                                            />
                                            <ul className="mt-2">
                                                {field.value.map((industry, idx) => (
                                                    <li key={idx} className="flex justify-between items-center">
                                                        {industry}
                                                        <button
                                                            type="button"
                                                            className="ml-2 text-red-500"
                                                            onClick={() =>
                                                                setFieldValue("background.industries", field.value.filter((item) => item !== industry))
                                                            }
                                                        >
                            Remove
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                />
                                <ErrorMessage name="background.industries" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="strengths" className="block text-xl font-semibold text-gray-800">Strengths</label>
                                <Field
                                    name="strengths"
                                    render={({ field }) => (
                                        <div>
                                            <input
                                                type="text"
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setFieldValue("strengths", [...field.value, value]);
                                                }}
                                                className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                                            />
                                            <ul className="mt-2">
                                                {field.value.map((strength, idx) => (
                                                    <li key={idx} className="flex justify-between items-center">
                                                        {strength}
                                                        <button
                                                            type="button"
                                                            className="ml-2 text-red-500"
                                                            onClick={() =>
                                                                setFieldValue("strengths", field.value.filter((item) => item !== strength))
                                                            }
                                                        >
                            Remove
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                />
                                <ErrorMessage name="strengths" component="div" className="text-red-500 mt-1" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="goals" className="block text-xl font-semibold text-gray-800">Goals</label>
                                <Field
                                    name="goals"
                                    render={({ field }) => (
                                        <div>
                                            <input
                                                type="text"
                                                onChange={(e) => {
                                                    const value = e.target.value;
                                                    setFieldValue("goals", [...field.value, value]);
                                                }}
                                                className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                                            />
                                            <ul className="mt-2">
                                                {field.value.map((goal, idx) => (
                                                    <li key={idx} className="flex justify-between items-center">
                                                        {goal}
                                                        <button
                                                            type="button"
                                                            className="ml-2 text-red-500"
                                                            onClick={() =>
                                                                setFieldValue("goals", field.value.filter((item) => item !== goal))
                                                            }
                                                        >
                            Remove
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                />
                                <ErrorMessage name="goals" component="div" className="text-red-500 mt-1" />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 focus:ring-2 focus:ring-pink-300 transition duration-300"
                            >
                                Generate Personalized Templates 
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </main>

    );
};

export default PersonaForm;