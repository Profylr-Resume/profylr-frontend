import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import { personaValidationSchema } from "@/validations/personaValidationSchema";
import { useState } from "react";
import { possibleTargetRoles } from "@/assets/static/availableTargetRoles";
import { possibleStrengthOptions } from "@/assets/static/availableStrengthOptions";
import { Select, MenuItem, Chip, InputLabel, FormControl, Checkbox, ListItemText } from "@mui/material";
import { possibleIndustryOptions } from "@/assets/static/availabelIndustryOptions";
import { possibleGoalOptions } from "@/assets/static/availableGoalOptions";
import { blackButton } from "@/css/buttons";

// Type for the field values (strengths selected by the user)
interface FormValues {
    strengths: string[];
  }

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
const targetRoles = possibleTargetRoles;
const strengthOptions = possibleStrengthOptions;
const industryOptions = possibleIndustryOptions;
const goalOptions = possibleGoalOptions;

const Persona = () => {
   

   
    return (
        <main className="h-screen w-screen bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center relative  " >
            <div className=" h-full w-full  relative  " >
                <h1 className="font-bold text-white text-[11rem]  absolute top-[-4rem] left-[10%] " >Persona</h1>
            
                <div
                    className="h-[40rem] w-[90rem] flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-700  bg-opacity-30 backdrop-blur-lg shadow-2xl 
                            absolute top-[8rem] left-[10%] z-10 rounded-xl"
                    style={{ boxShadow: "3px 3px 18px #1f2937, -3px 0 20px #1f2937" }}
                >

                    <div className="h-full w-full " >
                        <Formik
                            initialValues={initialValues}
                            validationSchema={personaValidationSchema}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {({ setFieldValue }) => (

                                <Form className="h-full w-full  flex flex-col justify-center  ">
                                    <div className="h-full w-full flex flex-col justify-evenly p-12 ">

                                        <div className="w-full h-16  flex items-center justify-evenly " >

                                            <div className="w-[40%] h-full  flex flex-col items-center justify-center gap-1 ">
                                                <div className="flex items-center justify-center gap-2 " >   
                                                    <label htmlFor="background.education.level" className=" text-xl font-semibold text-gray-800">Education Level:</label>
                                                    <Field as="select" name="background.education.level" className="rounded-lg">
                                                        <option value="" disabled={true} >Select education level</option>
                                                        <option value="graduated">Graduated</option>
                                                        <option value="inCollege">In College</option>
                                                        <option value="postGraduate">Post Graduate</option>
                                                    </Field>
                                                </div>
                                                <ErrorMessage name="background.education.level" component="div" className="text-red-500 mt-1" />
                                            </div>

                                            <div className="w-[40%] h-full flex flex-col items-center justify-center gap-1   ">
                                                <div className="flex items-center justify-center gap-2 " >   
                                                    <label htmlFor="experienceLevel" className=" text-xl font-semibold text-gray-800">Experience Level</label>
                                                    <Field as="select" name="experienceLevel" className="rounded-lg" >
                                                        <option value="">Select experience level</option>
                                                        <option value="fresher">Fresher</option>
                                                        <option value="intermediate">Intermediate</option>
                                                        <option value="experienced">Experienced</option>
                                                    </Field>
                                                </div>
                                                <ErrorMessage name="experienceLevel" component="div" className="text-red-500 mt-1 "  />
                                            </div>

                                            <div className="w-[20%] h-full flex flex-col items-center justify-center gap-1  ">
                                                <div className="flex items-center justify-center gap-2 " >   
                                                    <label htmlFor="background.yearsOfExperience" className="block text-xl font-semibold text-gray-800">Years of Experience</label>
                                                    <Field type="number" name="background.yearsOfExperience" className="w-[5rem] px-2 text-center rounded-lg text-lg font-medium " />
                                                </div>
                                                <ErrorMessage name="background.yearsOfExperience" component="div" className="text-red-500 mt-1" />
                                            </div>
                                        </div>

                                        <div className="w-full h-16 flex items-center justify-evenly " >

                                            {/* target role */}
                                            <div className="flex items-center space-x-4">
                                                <label 
                                                    htmlFor="targetRole" 
                                                    className="text-xl font-semibold text-gray-800 flex-shrink-0"
                                                >
        Target Role
                                                </label>

                                                <Field
                                                    as="select"
                                                    name="targetRole"
                                                    className=" w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                                                >
                                                    <option value="" label="Select a role" disabled={true} />
        
                                                    {/* Map through the flattened array of roles and display each option */}
                                                    {targetRoles.map((role) => (
                                                        <option key={role} value={role}>
                                                            {role}
                                                        </option>
                                                    ))}
                                                </Field>

                                                <ErrorMessage name="targetRole" component="div" className="text-red-500 mt-1" />
                                            </div>

                                            {/* has certifications */}
                                            <div className="">
                                                <label className="block text-xl font-semibold text-gray-800">
                                                    <Field type="checkbox" name="background.hasProjects" className="mr-2" />
                Has Projects
                                                </label>
                                                <ErrorMessage name="background.hasProjects" component="div" className="text-red-500 mt-1" />
                                            </div>

                                            {/* has projects */}
                                            <div className="">
                                                <label className="block text-xl font-semibold text-gray-800">
                                                    <Field type="checkbox" name="background.hasCertifications" className="mr-2" />
                Has Certifications
                                                </label>
                                                <ErrorMessage name="background.hasCertifications" component="div" className="text-red-500 mt-1" />
                                            </div>

                                        </div>

                                        {/* industry options */}
                                        <div className="mb-4">
                                            <label htmlFor="background.industries" className="block text-xl font-semibold text-gray-800">Select Industries</label>
                                            <Field
                                                name="background.industries"
                                                render={({ field, form: { setFieldValue } }: FieldProps<FormValues>) => {
                                                    const industries = Array.isArray(field.value) ? field.value : []; // Ensure field.value is a string[]
                                                    return (
                                                        <div>
                                                            <FormControl fullWidth={true}>
                                                                <Select
                                                                    labelId="industries-label"
                                                                    multiple={true}
                                                                    value={industries}
                                                                    onChange={(e) => setFieldValue("background.industries", e.target.value)}
                                                                    renderValue={(selected) => (
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {(selected as string[]).map((value) => (
                                                                                <Chip key={value} label={value} className="mb-1" />
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                    className="mt-2"
                                                                    MenuProps={{
                                                                        PaperProps: {
                                                                            className: "max-h-60 overflow-auto"
                                                                        }
                                                                    }}
                                                                >
                                                                    {industryOptions.map((industry) => (
                                                                        <MenuItem key={industry} value={industry}>
                                                                            <Checkbox checked={industries.includes(industry)} />
                                                                            <ListItemText primary={industry} />
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                            <ErrorMessage name="background.industries" component="div" className="text-red-500 mt-1" />
                                                        </div>
                                                    );
                                                }}
                                            />
                                        </div>

                                        {/* strength options */}
                                        <div className="mb-4">
                                            <label htmlFor="strengths" className="block text-xl font-semibold text-gray-800">Select Strengths</label>
                                            <Field
                                                name="strengths"
                                                render={({ field, form: { setFieldValue } }: FieldProps<FormValues>) => {
                                                    const strengths = Array.isArray(field.value) ? field.value : []; // Ensure field.value is a string[]
                                                    return (
                                                        <div>
                                                            <FormControl fullWidth={true}>
                                                                <Select
                                                                    labelId="strengths-label"
                                                                    multiple={true}
                                                                    value={strengths}
                                                                    onChange={(e) => setFieldValue("strengths", e.target.value)}
                                                                    renderValue={(selected) => (
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {(selected as string[]).map((value) => (
                                                                                <Chip key={value} label={value} className="mb-1" />
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                    className="mt-2"
                                                                    MenuProps={{
                                                                        PaperProps: {
                                                                            className: "max-h-60 overflow-auto"
                                                                        }
                                                                    }}
                                                                >
                                                                    {strengthOptions.map((strength) => (
                                                                        <MenuItem key={strength} value={strength}>
                                                                            <Checkbox checked={strengths.includes(strength)} />
                                                                            <ListItemText primary={strength} />
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                            <ErrorMessage name="strengths" component="div" className="text-red-500 mt-1" />
                                                        </div>
                                                    );
                                                }}
                                            />
                                        </div>

                                        {/* goals options */}
                                        <div className="mb-4">
                                            <label htmlFor="goals" className="block text-xl font-semibold text-gray-800">Select Goals</label>
                                            <Field
                                                name="goals"
                                                render={({ field, form: { setFieldValue } }: FieldProps<FormValues>) => {
                                                    const goals = Array.isArray(field.value) ? field.value : []; // Ensure field.value is a string[]
                                                    return (
                                                        <div>
                                                            <FormControl fullWidth={true}>
                                                                <Select
                                                                    labelId="goals-label"
                                                                    multiple={true}
                                                                    value={goals}
                                                                    onChange={(e) => setFieldValue("goals", e.target.value)}
                                                                    renderValue={(selected) => (
                                                                        <div className="flex flex-wrap gap-2">
                                                                            {(selected as string[]).map((value) => (
                                                                                <Chip key={value} label={value} className="mb-1" />
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                    className="mt-2"
                                                                    MenuProps={{
                                                                        PaperProps: {
                                                                            className: "max-h-60 overflow-auto"
                                                                        }
                                                                    }}
                                                                >
                                                                    {goalOptions.map((goal) => (
                                                                        <MenuItem key={goal} value={goal}>
                                                                            <Checkbox checked={goals.includes(goal)} />
                                                                            <ListItemText primary={goal} />
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>

                                                            <ErrorMessage name="goals" component="div" className="text-red-500 mt-1" />
                                                        </div>
                                                    );
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <button 
                                                type="submit"
                                                className={`${blackButton}`}
                                            >
                                                            Submit
                                            </button>

                                        </div>
                                       
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

export default Persona;