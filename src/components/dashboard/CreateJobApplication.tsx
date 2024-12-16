import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Formik, Form, Field } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarArrowDown, CalendarDays, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import * as Yup from "yup";
import { truncateString } from "@/utils/stringUtils";


  
  interface FormValues {
    companyName: string;
    jobTitle: string;
    jobLink: string;
    followUpDate: Date | null;
    selectedResume: string;
    importedResume: File | null;
  }
  
const initialValues: FormValues = {
    companyName: "",
    jobTitle: "",
    jobLink: "",
    followUpDate: null,
    selectedResume: "",
    importedResume: null,
};

// const validationSchema = Yup.object().shape({
//     companyName:Yup.string().required("Company name is required"),
//     jobTitle:Yup.string().required("Job title is required"),
//     jobLink:Yup.string().url().required("job link is required"),
//     followUpDate: null,
//     selectedResume: "",
//     importedResume: null,
// })

const existingResumes = ["resume1.pdf", "resume2.pdf", "resume3.pdf"];

interface JobApplicationProps{
    isOpen:boolean,
    toggleModal:()=>void
}

const CreateJobApplication:React.FC<JobApplicationProps> = ({isOpen,toggleModal}) => {
    
    const [importedResume, setImportedResume] = useState<File|null>(null);
    
    const fileInputRef = useRef(null); // Create a ref for the file input

    
    const handleSubmit = (values: FormValues) => {
        console.log(values);
        toggleModal();
    };


    const handleImportButtonClick = (e) => {
        e.preventDefault();
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Programmatically click the input
        }
    };

    const handleResumeImported = (file:File)=>{
        console.log(file);
        setImportedResume(file);
    };

    const handleRemoveImportedResume = ()=>{
        setImportedResume(null);
    };

    return (
        <Dialog open={isOpen} onOpenChange={toggleModal}>
         
            <DialogContent className="py-10  ">
                <DialogHeader>
                    <DialogTitle>Job Application Details</DialogTitle>
                </DialogHeader>
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                    {({ values, setFieldValue }) => (
                        <Form className="flex flex-col gap-6 mt-10   ">

                            <div>
                                <Label htmlFor="companyName">Company Name*</Label>
                                <Field name="companyName" as={Input} id="companyName" />
                            </div>
                            <div>
                                <Label htmlFor="jobTitle">Job Title*</Label>
                                <Field name="jobTitle" as={Input} id="jobTitle" />
                            </div>
                          
                            <div>
                                <Label htmlFor="jobLink">Link to Job*</Label>
                                <Field name="jobLink" as={Input} id="jobLink" type="url" />
                            </div>
                            <div className="flex items-center gap-3 ">      
                                <Label htmlFor="followUpDate">Follow-up Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild={true} >
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[240px] pl-3 text-left font-normal",
                                                !values.followUpDate && "text-muted-foreground"
                                            )}
                                        >
                                            {values.followUpDate ? (
                                                format(values.followUpDate, "PPP")
                                            ) : (
                                                <span>Pick a date</span>
                                            )}
                                            <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start"> 
                                        <Calendar
                                            mode="single"
                                            selected={values.followUpDate}
                                            onSelect={(date) => setFieldValue("followUpDate", date)}
                                            className="rounded-md border"
                                            disabled={(date) =>
                                                date < new Date() 
                                            }
                                            initialFocus={true}
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                       
                            <div>
                                <Label htmlFor="selectedResume">Select Resume*</Label>
                                <div className="flex items-center  " >
                                    {importedResume ? 
                                        <div className="flex items-center justify-between gap-12" >
                                            <p>{truncateString(importedResume.name,30)}</p>
                                            <Trash2 className="text-red-500 hover:cursor-pointer " size={30} onClick={(e)=>{
                                                setFieldValue("importedResume", null);
                                                handleRemoveImportedResume();
                                            }
                                           
                                            }/>
                                        </div> :
                                        <>
                                            <Field name="selectedResume" as="select" className="w-full border rounded-md p-2">
                                                <option value="">Select a resume</option>
                                                {existingResumes.map((resume) => (
                                                    <option key={resume} value={resume}>
                                                        {resume}
                                                    </option>
                                                ))}
                                            </Field>
                              
                                            <p className="text-lg text-gray-400 font-medium px-4  items-center " >OR</p>
                                            <Button 
                                                onClick={(event) => {
                                                    handleImportButtonClick(event);
                                                }}
                                            >
                                        Import
                                            </Button>
                                            <Input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={(event) => {
                                                    const file = event.currentTarget.files?.[0];
                                                    setFieldValue("importedResume", file || null);
                                                    if(file){
                                                        handleResumeImported(file);
                                                    }
                                                }}
                                                accept=".pdf,.doc,.docx"
                                                className="hidden"
                                            />
                                        </>

                                    }

                                </div>

                            </div>
                            <Button type="submit">Submit Application</Button>

                        </Form>
                    )}
                </Formik>
            </DialogContent>
        </Dialog>
    );
};

export default CreateJobApplication;