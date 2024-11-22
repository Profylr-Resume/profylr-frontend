import { useEffect, useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { projectValidationSchema } from "@/validations/projectsValidationSchema";
import { ProjectsType } from "@/interface/Projects.interface";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { v4 as uuidv4 } from "uuid";
import { addProject, removeProject, updateProject } from "@/redux/features/resumeformSlice";

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
                        <Form className="h-[90%] w-full  flex flex-col justify-evenly px-10 py-5 ">
                            {/* Row 1 */}
                            <div className="flex justify-between gap-4">
                                <div className="flex flex-col ">
                                    <label htmlFor="name" className="text-white tracking-wider ">
                        Project Name
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
    
                                <div className="flex flex-col w-[30%]">
                                    <label className="text-white tracking-wider ">Technologies Used</label>
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
                                                            className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                                    <label htmlFor="from" className="text-white tracking-wider ">
                        Start Date (YYYY-MM)
                                    </label>
                                    <Field
                                        name="from"
                                        type="text"
                                        placeholder="YYYY-MM"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                                    <label htmlFor="to" className="text-white tracking-wider ">
                        End Date (YYYY-MM)
                                    </label>
                                    <Field
                                        name="to"
                                        type="text"
                                        placeholder="YYYY-MM"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="to"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col w-[30%]">
                                    <label htmlFor="sourceCodeRepository" className="text-white tracking-wider ">
                        Source Code Repository
                                    </label>
                                    <Field
                                        name="sourceCodeRepository"
                                        type="url"
                                        placeholder="https://github.com/your-repo"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                    />
                                    <ErrorMessage
                                        name="sourceCodeRepository"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
    
                                <div className="flex flex-col ">
                                    <label htmlFor="liveLink" className="text-white tracking-wider ">
                        Live Link
                                    </label>
                                    <Field
                                        name="liveLink"
                                        type="url"
                                        placeholder="https://your-project-link.com"
                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                                <label className="text-white tracking-wider ">Project Description</label>
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
                                                        className=" bg-themeCream bg-opacity-40 text-themeBlack font-medium text-lg border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                                    className="bg-white text-themeGray font-bold px-4 py-2 rounded-lg"
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
            {projects &&
            projects.length > 0 &&
            projects.map((p) => (
                <main key={p.id}   className="flex items-center bg-gray-200 text-gray-700 rounded-full px-4 py-2 shadow-sm gap-2">
                    <span>{p.name}</span>
                    <button
                        onClick={() => handleRemoveProject(p.id)}
                        className="text-red-500 hover:text-red-700"
                        aria-label={`Remove ${p.name}`}
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
                </main>
            ))}
        </main>
    );
};

export default Projects;