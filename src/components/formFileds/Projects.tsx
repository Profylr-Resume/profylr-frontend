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
        <main className="h-full w-full flex flex-col items-center justify-center">
            {projects &&
            projects.length > 0 &&
            projects.map((proj) => (
                <main key={proj.id} className="flex items-center gap-4">
                    <Accordion type="single" collapsible={true}>
                        <AccordionItem value={proj.id} className="w-[50rem]">
                            <AccordionTrigger>{proj.name}</AccordionTrigger>
                            <AccordionContent>
                                <ProjectInAccordion project={proj} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Button
                        variant={"default"}
                        size={"sm"}
                        onClick={() => handlePrefillForm(proj)}
                    >
                  Update
                    </Button>
                    <Button
                        variant={"destructive"}
                        size={"sm"}
                        onClick={() => handleRemoveProject(proj.id)}
                    >
                  Remove
                    </Button>
                </main>
            ))}
            <Formik
                initialValues={isFormPreFilled ? prefilledValues : initialValues}
                validationSchema={projectValidationSchema}
                onSubmit={(values, { setSubmitting, resetForm }): void =>
                    isFormPreFilled && projects.length > 0
                        ? handleUpdateProject(values, setSubmitting, resetForm)
                        : handleAddProject(values, setSubmitting, resetForm)
                }
                enableReinitialize={true}
            >
                {({ values, isSubmitting }) => (
                    <>
                        <Form className="max-w-4xl mx-auto flex flex-col gap-8">
                            {/* Row 1 */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="name" className="font-medium">
                        Project Name
                                    </label>
                                    <Field
                                        name="name"
                                        type="text"
                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col w-[30%]">
                                    <label className="font-medium">Technologies Used</label>
                                    <FieldArray name="technologiesUsed">
                                        {({ push, remove }) => (
                                            <div>
                                                {values.technologiesUsed.map((_, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-center gap-2 mb-2"
                                                    >
                                                        <Field
                                                            name={`technologiesUsed[${index}]`}
                                                            type="text"
                                                            placeholder={`Technology ${index + 1}`}
                                                            className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                                        />
                                                        <button
                                                            type="button"
                                                            className="text-red-500 hover:underline"
                                                            onClick={() => remove(index)}
                                                        >
                                  Remove
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    type="button"
                                                    className="mt-2 text-blue-500 hover:underline"
                                                    onClick={() => push("")}
                                                >
                              Add Technology
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>
    
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="from" className="font-medium">
                        Start Date (YYYY-MM)
                                    </label>
                                    <Field
                                        name="from"
                                        type="text"
                                        placeholder="YYYY-MM"
                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                    />
                                    <ErrorMessage
                                        name="from"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
    
                            {/* Row 2 */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="to" className="font-medium">
                        End Date (YYYY-MM)
                                    </label>
                                    <Field
                                        name="to"
                                        type="text"
                                        placeholder="YYYY-MM"
                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                    />
                                    <ErrorMessage
                                        name="to"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="sourceCodeRepository" className="font-medium">
                        Source Code Repository
                                    </label>
                                    <Field
                                        name="sourceCodeRepository"
                                        type="url"
                                        placeholder="https://github.com/your-repo"
                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                    />
                                    <ErrorMessage
                                        name="sourceCodeRepository"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="liveLink" className="font-medium">
                        Live Link
                                    </label>
                                    <Field
                                        name="liveLink"
                                        type="url"
                                        placeholder="https://your-project-link.com"
                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                    />
                                    <ErrorMessage
                                        name="liveLink"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                            </div>
    
                            {/* Row 3 */}
                            <div className="flex flex-col">
                                <label className="font-medium">Project Description</label>
                                <FieldArray name="description">
                                    {({ push, remove }) => (
                                        <div>
                                            {values.description.map((_, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-2 mb-2"
                                                >
                                                    <Field
                                                        name={`description[${index}]`}
                                                        type="text"
                                                        placeholder={`Description ${index + 1}`}
                                                        className="border border-gray-500 px-2 py-1 rounded-lg w-full"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="text-red-500 hover:underline"
                                                        onClick={() => remove(index)}
                                                    >
                                Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                className="mt-2 text-blue-500 hover:underline"
                                                onClick={() => push("")}
                                            >
                            Add Description
                                            </button>
                                        </div>
                                    )}
                                </FieldArray>
                            </div>
    
                            {/* Submit Button */}
                            <div className="flex justify-center">
                                <Button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                >
                                    {isFormPreFilled && projects.length > 0
                                        ? "Update"
                                        : "Add Project"}
                                </Button>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </main>
    );
};

export default Projects;