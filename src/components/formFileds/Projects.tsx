import { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { projectValidationSchema } from "@/validations/projectsValidationSchema";
import { ProjectsType } from "@/interface/Projects.interface";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import { addProject, removeProject, updateProject } from "@/redux/features/resumeformSlice";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { InitialStateType } from "@/interface/InitialState.type";
import { Button } from "../ui/button";

const initialValues = {
    name: "",
    technologiesUsed: [""],
    from: "",
    to: "",
    sourceCodeRepository: "",
    liveLink: "",
    description: [""],
    id:uuidv4()
};

const ProjectInAccordion = ({project}:{project:ProjectsType})=> {
    return (
        <section className="flex flex-col " >
            <div className="flex items-center justify-between" >
                <div className="flex flex-col ">
                    <div className="flex items-center text-xs ">
                        <h4 className="font-semibold underline" >Name:</h4>
                        <p>{project.name}</p>
                    </div>
                    <div className="flex">
                        <h4>Technologies:</h4>
                        <p>{ project.technologiesUsed.join(", ") }</p>
                    </div>
                    <div className="flex">
                        <h4>Source Code:</h4>
                        <p>{ project.sourceCodeRepository }</p>
                    </div>
                    <div className="flex">
                        <h4>Technologies:</h4>
                        <p>{ project.liveLink }</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex" >
                        <h4>Start Date:</h4>
                        <p>{project.from}</p>
                    </div>
                    <div className="flex" >
                        <h4>End Date:</h4>
                        <p>{project.to}</p>
                    </div>
                </div>
            </div>
            <div className="flex " >
                <div className="flex" >
                    <h2>Description:</h2>
                    <ul className="flex flex-col" >
                        {project?.description.length>0 && project.description.map((description,idx)=>(
                            <li key={idx}>{description} </li>
                        )) }
                    </ul>
                </div>
            </div>
        </section>
    );
};

const Projects =  () => {

    const {projects} = useSelector((state:RootState):InitialStateType=>state.resumeForm);
    const dispatch = useDispatch();

    const [isFormPreFilled, setIsFormPreFilled] = useState(false);
    const [prefilledValues, setPrefilledValues] = useState<ProjectsType>(initialValues);

    const handleAddProject = (values:ProjectsType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(addProject(values));
        resetForm();
    };

    const handlePrefillForm = (project:ProjectsType):void=>{
        setPrefilledValues(project);
        setIsFormPreFilled(true);
    };

    const handleUpdateProject= (values:ProjectsType,setSubmitting:(isSubmitting: boolean) => void,resetForm:()=>void):void=>{
        dispatch(updateProject(values));
        resetForm();
    };

    const handleRemoveProject = (id:string):void=>{
        dispatch(removeProject(id));
    };

    useEffect(() => {
        console.log(projects);
    }, [projects]);

    return (
        <main className="h-full w-full flex flex-col items-center justify-center" >

            {projects && projects.length>0 && projects.map((proj)=> 
                (
                    <main key={proj.id} className="flex items-center gap-4">
                        <Accordion  type="single" collapsible={true}>
                            <AccordionItem  value={proj.id} className="w-[50rem]" >
                                <AccordionTrigger>{proj.name}</AccordionTrigger>
                                <AccordionContent>
                                    <ProjectInAccordion project={proj} />
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        <Button variant={"default"} size={"sm"} onClick={()=> handlePrefillForm(proj)} >Update</Button>
                        <Button variant={"destructive"} size={"sm"} onClick={()=> handleRemoveProject(proj.id)} >Remove</Button>
                    </main>
                )) 
            }
            <Formik
                initialValues={isFormPreFilled ? prefilledValues : initialValues}
                validationSchema={projectValidationSchema}
                onSubmit={(values,{setSubmitting,resetForm}):void=> (isFormPreFilled && projects.length>0 ? handleUpdateProject(values,setSubmitting,resetForm) : handleAddProject(values,setSubmitting,resetForm))}
                enableReinitialize={true}
            >
                {({ values, isSubmitting }) => (
                    <>
                        <Form className="flex flex-col gap-8"> 
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

                            <div>
                                <Button type="submit" >{isFormPreFilled && projects.length>0 ? "Update" : "Add Project"}</Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </main>
    );
};

export default Projects;