import { skillsValidationsSchema } from "@/validations/skillsValidationsSchema";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SkillsType } from "@/interface/Skills.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { InitialStateType } from "@/interface/InitialState.type";
import { addSkill, removeSkill, updateSkill } from "@/redux/features/resumeformSlice";
import { v4 as uuidv4 } from "uuid";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
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

const SkillInAccordion = ({skill}:{skill:SkillsType})=> {
    return (
        <section className="flex flex-col " >
            <div className="flex items-center justify-between" >
                <div className="flex flex-col ">
                    <div className="flex items-center text-xs ">
                        <h4 className="font-semibold underline" >Name:</h4>
                        <p>{skill.name}</p>
                    </div>
                    <div className="flex">
                        <h4>Proficiency:</h4>
                        <p>{skill.proficiencyLevel}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex" >
                        <h4>Years of Exp.:</h4>
                        <p>{skill.yearsOfExperience}</p>
                    </div>
                    <div className="flex" >
                        <h4>End Date:</h4>
                        <p>{skill.category}</p>
                    </div>
                </div>
            </div>
            <div className="flex " >
                <div className="flex" >
                    <h2>Credentials:</h2>
                    <div className="flex flex-col" >
                        <p>{skill.credentials.certificateUrl}</p>
                        <p>{skill.credentials.dateObtained}</p>
                        <p>{skill.credentials.issuingOrganization}</p>
                        <p>{skill.credentials.expiryDate}</p>
                    </div>
                </div>
            </div>
        </section>
    );
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
        <main className="h-full w-full flex flex-col items-center justify-center" >
            {skills && skills.length>0 && skills.map((skill)=> 
                (
                    <main key={skill.id} className="flex items-center gap-4">
                        <Accordion  type="single" collapsible={true}>
                            <AccordionItem  value={skill.id} className="w-[50rem]" >
                                <AccordionTrigger>{skill.name}</AccordionTrigger>
                                <AccordionContent>
                                    <SkillInAccordion skill={skill} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button variant={"default"} size={"sm"} onClick={()=> handlePrefillForm(skill)} >Update</Button>
                        <Button variant={"destructive"} size={"sm"} onClick={()=> handleRemoveSkill(skill.id)} >Remove</Button>
                    </main>
                )) 
            }
            <Formik
                initialValues={isFormPreFilled ? prefilledValues : initialValues}
                validationSchema={skillsValidationsSchema}
                onSubmit={(values,{setSubmitting,resetForm}):void=> (isFormPreFilled && skills.length>0 ? handleUpdateSkill(values,setSubmitting,resetForm) : handleAddSkill(values,setSubmitting,resetForm))}
                enableReinitialize={true}
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

                            <div>
                                <Button type="submit" >{isFormPreFilled && skills.length>0 ? "Update" : "Add Skill"}</Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </main>

    );
};

export default Skills;