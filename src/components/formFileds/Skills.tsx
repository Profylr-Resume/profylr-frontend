import { skillsValidationsSchema } from "@/validations/skillsValidationsSchema";
import{ forwardRef, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { SkillsType } from "@/interface/Skills.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { InitialStateType } from "@/interface/InitialState.type";
import { addSkill, removeSkill } from "@/redux/features/resumeformSlice";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../ui/button";


// initial values will always be empty . coz we will update the state on CTA (add skill)
const initialValues = {
    name: "",
    proficiencyLevel: "Intermediate",
    yearsOfExperience: "",
    category: "",
    credentials: {
        certificateUrl: "",
        issuingOrganization: "",
        dateObtained: "",
        expiryDate: ""
    },
    id:uuidv4()
};

const Skills = forwardRef<FormikProps<SkillsType>,object> ((_,ref) => {

    // this will be used to display the existing skills , in clear Ui format, not in form
    const {skills} = useSelector((state:RootState):InitialStateType=>state.resumeForm);
    const dispatch = useDispatch();

   
  
    const handleSkillAdd = (values:SkillsType):void=>{
        dispatch(addSkill(values));
    };

    const handleSkillDelete = (skillId:string):void=>{
    };

    useEffect(():void => {
        console.log(skills);
    }, [skills]);
      
    return (
        <main className="h-full w-full flex flex-col items-center justify-center" >
            <Formik
                initialValues={initialValues}
                validationSchema={skillsValidationsSchema}
                onSubmit={handleSkillAdd}
                innerRef={ref}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form className="flex flex-col gap-8" >
                            <div className="flex items-center gap-4">
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" className="border border-gray-500 rounded-lg" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="proficiencyLevel">Proficiency Level</label>
                                <Field as="select" name="proficiencyLevel" className="px-2 py-1 border border-gray-500 rounded-lg" >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                    <option value="Expert">Expert</option>
                                </Field>
                                <ErrorMessage name="proficiencyLevel" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="yearsOfExperience">Years of Experience</label>
                                <Field name="yearsOfExperience" type="number" className="border border-gray-500 px-2 py-1  rounded-lg" />
                                <ErrorMessage name="yearsOfExperience" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="category">Category</label>
                                <Field as="select" name="category" className="border border-gray-500 px-2 py-1  rounded-lg">
                                    <option value="">Select Category</option>
                                    <option value="Programming Languages">Programming Languages</option>
                                    <option value="Frameworks & Libraries">Frameworks & Libraries</option>
                                    <option value="Databases">Databases</option>
                                    <option value="Tools & Platforms">Tools & Platforms</option>
                                    <option value="Soft Skills">Soft Skills</option>
                                    <option value="Languages">Languages</option>
                                    <option value="Certifications">Certifications</option>
                                    <option value="Other">Other</option>
                                </Field>
                                <ErrorMessage name="category" component="div" className="error" />
                            </div>

                            <h3 className="font-semibold text-xl underline">Credentials <span>(If Any)</span> </h3>
                            <div className="flex items-center gap-4">
                                <label htmlFor="credentials.certificateUrl">Certificate URL</label>
                                <Field name="credentials.certificateUrl" type="url" className="border border-gray-500  px-2 py-1 rounded-lg"/>
                                <ErrorMessage name="credentials.certificateUrl" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4" >
                                <label htmlFor="credentials.issuingOrganization">Issuing Organization</label>
                                <Field name="credentials.issuingOrganization" type="text" className="border border-gray-500 px-2 py-1  rounded-lg"/>
                                <ErrorMessage name="credentials.issuingOrganization" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="credentials.dateObtained">Date Obtained</label>
                                <Field name="credentials.dateObtained" type="date" className="border border-gray-500 px-2 py-1  rounded-lg"/>
                                <ErrorMessage name="credentials.dateObtained" component="div" className="error" />
                            </div>

                            <div className="flex items-center gap-4">
                                <label htmlFor="credentials.expiryDate">Expiry Date</label>
                                <Field name="credentials.expiryDate" type="date" className="border border-gray-500 px-2 py-1  rounded-lg"/>
                                <ErrorMessage name="credentials.expiryDate" component="div" className="error" />
                            </div>

                            <Button type="submit" >Add Skill</Button>
                        </Form>
                        {/* <FormikValueWatcher<SkillsType> onChange={handleOnChange} /> */}
                    </>

                )}
            </Formik>
        </main>

    );
});

Skills.displayName="Skills";

export default Skills;