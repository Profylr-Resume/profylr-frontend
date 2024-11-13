import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

// Predefined sections
const predefinedSections = [
    { _id: "1", name: "Section 1" },
    { _id: "2", name: "Section 2" },
    { _id: "3", name: "Section 3" }
];

const templateValidation = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    html: Yup.string().required("HTML is required"),
    sections: Yup.array().of(
        Yup.object({
            section: Yup.object({
                _id: Yup.string().required("Section is required"),
            }),
            html: Yup.string().required("HTML is required"),
        })
    ).required("Sections are required"),
});

const Dummy = () => {
    

    return (
        <>
            <Formik
                initialValues={{
                    name: "",
                    description: "",
                    html: "",
                    sections: [],
                }}
                validationSchema={templateValidation}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                            <Field
                                id="name"
                                name="name"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
      
                        {/* Description */}
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-sm font-semibold text-gray-700">Description</label>
                            <Field
                                id="description"
                                name="description"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="description" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
      
                        {/* HTML */}
                        <div className="mb-4">
                            <label htmlFor="html" className="block text-sm font-semibold text-gray-700">HTML</label>
                            <Field
                                id="html"
                                name="html"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name="html" component="div" className="text-red-500 text-xs mt-1" />
                        </div>
      
                        {/* Section Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-semibold text-gray-700">Select Sections</label>
                            {predefinedSections.map((section, index) => (
                                <div key={index} className="mb-2">
                                    <label className="inline-flex items-center">
                                        <Field
                                            type="checkbox"
                                            name="sections"
                                            value={section._id}
                                            className="form-checkbox text-indigo-600"
                                            onChange={() => {
                                                const selectedSections = [...values.sections];
                                                if (selectedSections.includes(section._id)) {
                                                    const updatedSections = selectedSections.filter((id) => id !== section._id);
                                                    setFieldValue("sections", updatedSections);
                                                } else {
                                                    selectedSections.push(section._id);
                                                    setFieldValue("sections", selectedSections);
                                                }
                                            }}
                                        />
                                        <span className="ml-2">{section.name}</span>
                                    </label>
                                </div>
                            ))}
                            <ErrorMessage name="sections" component="div" className="text-red-500 text-xs mt-1" />
                        </div>

                        {/* Dynamic HTML Textarea for Selected Sections */}
                        <FieldArray
                            name="sections"
                            render={() => {
                                return values.sections.map((sectionId, index) => {
                                    const selectedSection = predefinedSections.find((section) => section._id === sectionId);
                                    return selectedSection ? (
                                        <div key={index} className="mb-4">
                                            <label
                                                htmlFor={`sections[${index}].html`}
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                  HTML for {selectedSection.name} {/* Render name of the selected section */}
                                            </label>
                                            <Field
                                                as="textarea"
                                                id={`sections[${index}].html`}
                                                name={`sections[${index}].html`}
                                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            <ErrorMessage
                                                name={`sections[${index}].html`}
                                                component="div"
                                                className="text-red-500 text-xs mt-1"
                                            />
                                        </div>
                                    ) : null;
                                });
                            }}
                        />
      
                        {/* Submit Button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>

      
    );
};

export default Dummy;