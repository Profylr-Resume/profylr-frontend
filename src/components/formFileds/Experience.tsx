import { Formik, Form, Field, FieldArray, ErrorMessage, FormikValues } from "formik";
import { experienceValidationSchema } from "@/validations/experienceValidationSchema";
import { useEffect, useState } from "react";
import { ExperienceType } from "@/interface/Experience.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { addExperience, removeExperience, updateExperience } from "@/redux/features/resumeformSlice";
import { InitialStateType } from "@/interface/InitialState.type";
import { Button } from "../ui/button";

const initialValues = {
    organisationName: "",
    position: "",
    from: "",
    to: "",
    description: [],
    id:uuidv4()
};

const ExperienceInAccordion = ({experience}:{experience:ExperienceType})=> {
    return (
        <section className="flex flex-col " >
            <div className="flex items-center justify-between" >
                <div className="flex flex-col ">
                    <div className="flex items-center text-xs ">
                        <h4 className="font-semibold underline" >Oranganization Name:</h4>
                        <p>{experience.organisationName}</p>
                    </div>
                    <div className="flex">
                        <h4>Position:</h4>
                        <p>{experience.position}</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex" >
                        <h4>Start Date:</h4>
                        <p>{experience.from}</p>
                    </div>
                    <div className="flex" >
                        <h4>End Date:</h4>
                        <p>{experience.to}</p>
                    </div>
                </div>
            </div>
            <div className="flex " >
                <div className="flex" >
                    <h2>Description:</h2>
                    <ul className="flex flex-col" >
                        {experience?.description.length>0 && experience.description.map((description,idx)=>(
                            <li key={idx}>{description} </li>
                        )) }
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Experience =() => {

    const {experiences} = useSelector((state:RootState):InitialStateType=>state.resumeForm);
    const dispatch = useDispatch();

    const [isFormPreFilled, setIsFormPreFilled] = useState(false);
    const [prefilledValues, setPrefilledValues] = useState<ExperienceType>(initialValues);

    const handleAddExperience = (values:ExperienceType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(addExperience(values));
        resetForm();
    };

    const handlePrefillForm = (experience:ExperienceType):void=>{
        setPrefilledValues(experience);
        setIsFormPreFilled(true);
    };

    const handleUpdateExperience = (values:ExperienceType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(updateExperience(values));
        resetForm();
    };

    const handleRemoveExperience = (id:string):void=>{
        dispatch(removeExperience(id));
    };

    useEffect(() => {
        console.log(experiences);
    }, [experiences]);
  
    return (
        <main className="h-full w-full flex flex-col items-center justify-center" > 
            {experiences && experiences.length>0 && experiences.map((exp)=> 
                (
                    <main key={exp.id} className="flex items-center gap-4">
                        <Accordion  type="single" collapsible={true}>
                            <AccordionItem  value={exp.id} className="w-[50rem]" >
                                <AccordionTrigger>{exp.organisationName}</AccordionTrigger>
                                <AccordionContent>
                                    <ExperienceInAccordion experience={exp} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button variant={"default"} size={"sm"} onClick={()=> handlePrefillForm(exp)} >Update</Button>
                        <Button variant={"destructive"} size={"sm"} onClick={()=> handleRemoveExperience(exp.id)} >Remove</Button>
                    </main>
                )) 
            }
            <Formik
                initialValues={isFormPreFilled? prefilledValues : initialValues}
                validationSchema={experienceValidationSchema}
                onSubmit={(values,{setSubmitting,resetForm}):void=> (isFormPreFilled?handleUpdateExperience(values,setSubmitting,resetForm) :handleAddExperience(values,setSubmitting,resetForm))}
                enableReinitialize={true}
            >
                {({ values, isSubmitting }) => (
                    <>
                        <Form className="flex flex-col gap-8"> 
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
                            <div>
                                <Button type="submit" >{isFormPreFilled ? "Update" : "Add Experience"}</Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </main>
    );
};

export default Experience;