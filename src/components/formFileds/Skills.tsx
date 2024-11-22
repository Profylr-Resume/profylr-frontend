import { skillsValidationsSchema } from "@/validations/skillsValidationsSchema";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SkillsType } from "@/interface/Skills.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { InitialStateType } from "@/interface/InitialState.type";
import { addSkill, removeSkill, updateSkill } from "@/redux/features/resumeformSlice";
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



const Skills =() => {

    // this will be used to display the existing skills , in clear Ui format, not in form
    const {skills} = useSelector((state:RootState):InitialStateType=>state.resumeForm);
    const dispatch = useDispatch();

    const [isFormPreFilled, setIsFormPreFilled] = useState(false);
    const [prefilledValues, setPrefilledValues] = useState<SkillsType>(initialValues);

    const handleAddSkill = (values:SkillsType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(addSkill(values));
        resetForm();
    };

    const handlePrefillForm = (skill:SkillsType):void=>{
        setPrefilledValues(skill);
        setIsFormPreFilled(true);
    };

    const handleUpdateSkill = (values:SkillsType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(updateSkill(values));
        resetForm();
    };

    const handleRemoveSkill = (id:string):void=>{
        dispatch(removeSkill(id));
    };

    useEffect(():void => {
        console.log(skills);
    }, [skills]);
      
    return (
        <main className="h-full w-full flex flex-col  items-center justify-start">
            <Formik
                initialValues={isFormPreFilled ? prefilledValues : initialValues}
                validationSchema={skillsValidationsSchema}
                onSubmit={(values, { setSubmitting, resetForm }): void =>
                    isFormPreFilled && skills.length > 0
                        ? handleUpdateSkill(values, setSubmitting, resetForm)
                        : handleAddSkill(values, setSubmitting, resetForm)
                }
                enableReinitialize={true}
            >
                {({ isSubmitting }) => (
                    <>
                        <Form className="h-[90%] w-full  flex flex-col justify-evenly px-10 py-5 ">
                            {/* Row 1: Name and Category */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col ">
                                    <label htmlFor="name"  className="text-themeCream tracking-wider ">
                        Name
                                    </label>
                                    <Field
                                        name="name"
                                        type="text"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col ">
                                    <label htmlFor="proficiencyLevel"  className="text-themeCream tracking-wider ">
                        Proficiency Level
                                    </label>
                                    <Field
                                        as="select"
                                        name="proficiencyLevel"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    >
                                        <option value="Beginner">Beginner</option>
                                        <option value="Intermediate">Intermediate</option>
                                        <option value="Advanced">Advanced</option>
                                        <option value="Expert">Expert</option>
                                    </Field>
                                    <ErrorMessage
                                        name="proficiencyLevel"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col ">
                                    <label htmlFor="yearsOfExperience"  className="text-themeCream tracking-wider ">
                        Years of Experience
                                    </label>
                                    <Field
                                        name="yearsOfExperience"
                                        type="number"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="yearsOfExperience"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
    
                            {/* Row 2: Category field (moved under Name) */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col ">
                                    <label htmlFor="category"  className="text-themeCream tracking-wider ">
                        Category
                                    </label>
                                    <Field
                                        as="select"
                                        name="category"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    >
                                        <option value="">Select Category</option>
                                        <option value="Programming Languages">
                          Programming Languages
                                        </option>
                                        <option value="Frameworks & Libraries">
                          Frameworks & Libraries
                                        </option>
                                        <option value="Databases">Databases</option>
                                        <option value="Tools & Platforms">Tools & Platforms</option>
                                        <option value="Soft Skills">Soft Skills</option>
                                        <option value="Languages">Languages</option>
                                        <option value="Certifications">Certifications</option>
                                        <option value="Other">Other</option>
                                    </Field>
                                    <ErrorMessage
                                        name="category"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
    
                            {/* Row 3: Certificate URL, Issuing Organization, Date Obtained */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col ">
                                    <label
                                        htmlFor="credentials.certificateUrl"
                                        className="text-themeCream tracking-wider "
                                    >
                        Certificate URL
                                    </label>
                                    <Field
                                        name="credentials.certificateUrl"
                                        type="url"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="credentials.certificateUrl"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col">
                                    <label
                                        htmlFor="credentials.issuingOrganization"
                                        className="text-themeCream tracking-wider "
                                    >
                        Issuing Organization
                                    </label>
                                    <Field
                                        name="credentials.issuingOrganization"
                                        type="text"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="credentials.issuingOrganization"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col ">
                                    <label
                                        htmlFor="credentials.dateObtained"
                                        className="text-themeCream tracking-wider "
                                    >
                        Date Obtained
                                    </label>
                                    <Field
                                        name="credentials.dateObtained"
                                        type="date"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="credentials.dateObtained"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
    
                            {/* Row 4: Expiry Date (moved under Certificate URL) */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col ">
                                    <label
                                        htmlFor="credentials.expiryDate"
                                        className="text-themeCream tracking-wider "
                                    >
                        Expiry Date
                                    </label>
                                    <Field
                                        name="credentials.expiryDate"
                                        type="date"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="credentials.expiryDate"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="w-full flex justify-center mt-4">
                                <Button
                                    type="submit"
                                    className="bg-white text-themeGray font-medium px-4 py-2 rounded-lg"
                                >
                                    {isFormPreFilled && skills.length > 0
                                        ? "Update"
                                        : "Add Skill"}
                                </Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
            {skills &&
            skills.length > 0 &&
            skills.map((skill) => (
                <div
                    key={skill.id}
                    className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 shadow-sm gap-2"
                >
                    <span>{skill.name}</span>
                    <button
                        onClick={() => handleRemoveSkill(skill.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label={`Remove ${skill.name}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            ))}
        </main>
    );
};

export default Skills;