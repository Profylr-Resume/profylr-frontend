import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { educationValidationSchema } from "@/validations/educationValidationSchema";

interface EducationLevel {
  instituteName: string;
  yearOfPassing: string;
  result: string;
  field?: string;
}

interface EducationInfo {
  underGraduate: EducationLevel;
  twelfthGrade: EducationLevel;
  tenthGrade: EducationLevel;
}

const Education: React.FC = () => {

    const initialValues: EducationInfo = {
        underGraduate: {
            instituteName: "",
            yearOfPassing: "",
            result: "",
            field: "",
        },
        twelfthGrade: {
            instituteName: "",
            yearOfPassing: "",
            result: "",
            field: "",
        },
        tenthGrade: { instituteName: "", yearOfPassing: "", result: "" },
    };

    const renderEducationLevel = (level:string, title: string) => (
        <div className="">
            <div className="">
                <h2 className="font-semibold underline ">{title}</h2>
            </div>
            <body className="">
                <div className=" flex items-center gap-4">
                    <div className="">
                        <Label
                            htmlFor={`${level}.instituteName`}
                            className=""
                        >
                Institute Name
                        </Label>
                        <Field
                            name={`${level}.instituteName`}
                            as={Input}
                            className="border border-gray-400 "
                        />
                        <ErrorMessage
                            name={`${level}.instituteName`}
                            component="div"
                            className=""
                        />
                    </div>
                    <div className="">
                        <Label
                            htmlFor={`${level}.yearOfPassing`}
                            className=""
                        >
                Year
                        </Label>
                        <Field
                            name={`${level}.yearOfPassing`}
                            as={Input}
                            type="number"
                            className="border border-gray-400"
                        />
                        <ErrorMessage
                            name={`${level}.yearOfPassing`}
                            component="div"
                            className=""
                        />
                    </div>

                    {(level === "underGraduate" || level === "twelfthGrade") && (
                        <div >
                            <Label
                                htmlFor={`${level}.field`}
                                
                            >
                  Specialization
                            </Label>
                            <Field
                                name={`${level}.field`}
                                as={Input}
                                className="border border-gray-400"
                            />
                            <ErrorMessage
                                name={`${level}.field`}
                                component="div"
                            />
                        </div>
                    )}
                    <div >
                        <Label
                            htmlFor={`${level}.result`}
                        >
                          Result 
                        </Label>
                        <Field
                            name={`${level}.result`}
                            as={Input}
                            type="number"
                            className="border border-gray-400"
                        />
                        <ErrorMessage
                            name={`${level}.result`}
                            component="div"
                        />
                    </div>
                </div>
            </body>
        </div>
    );

    const handleSubmit = (values: EducationInfo, actions: { setSubmitting: (arg0: boolean) => void; }) => {
        console.log(values);
        // Handle form submission
        actions.setSubmitting(false);
    };

    return (
        <main className="h-screen w-screen flex items-center justify-center">
            <Formik
                initialValues={initialValues}
                validationSchema={educationValidationSchema}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-8">
                    <h1 className="text-4xl font-bold text-blue-500">Education Information</h1>
                    {renderEducationLevel("underGraduate", "Undergraduate")}
                    {renderEducationLevel("twelfthGrade", "12th Grade")}
                    {renderEducationLevel("tenthGrade", "10th Grade")}
                    <Button type="submit">Submit</Button>
                </Form>
            </Formik>
        </main>
    );
};

export default Education;
