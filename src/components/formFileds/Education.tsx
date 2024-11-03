import React, { forwardRef, useCallback, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FormikProps } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { educationValidationSchema } from "@/validations/educationValidationSchema";
import { EducationType } from "@/interface/Education.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FormikValueWatcher from "@/utils/formikValuesWatcher";
import { debounce } from "lodash";
import { updateEducation } from "@/redux/features/resumeformSlice";



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

const Education = forwardRef<FormikProps<EducationType> ,object> ( (_,ref) => {

    const {education} = useSelector((state:RootState)=>state.resumeForm);
    const dispatch = useDispatch();
    
    const debounceUpdateState = useCallback(
        debounce((newValues)=>{
            dispatch(updateEducation(newValues));
        },2000)
        ,[]);

    const initialValues: EducationType = {
        underGraduate: {
            instituteName: education.underGraduate.instituteName || "",
            yearOfPassing:education.underGraduate.yearOfPassing ||  "",
            result:education.underGraduate.result ||  "",
            field:education.underGraduate.field ||  "",
        },
        twelfthGrade: {
            instituteName:education.twelfthGrade.instituteName ||  "",
            yearOfPassing:education.twelfthGrade.yearOfPassing ||  "",
            result:education.twelfthGrade.result ||  "",
            field:education.twelfthGrade.field || "",
        },
        tenthGrade: { 
            instituteName:education.tenthGrade.instituteName || "", 
            yearOfPassing:education.tenthGrade.yearOfPassing || "", 
            result:education.tenthGrade.result || "" },
    };

    const handleOnChange = (values:EducationType):void=>{
        debounceUpdateState(values);
    };

    useEffect(():void => {
        console.log(education);
    }, [education]);

    return (
        <main className="h-full w-full flex items-center justify-center">
            <Formik
                initialValues={initialValues}
                validationSchema={educationValidationSchema}
                onSubmit={()=>{}}
                innerRef={ref}
            >
                {()=>(
                    <>
                        <Form className="flex flex-col gap-8">
                            {renderEducationLevel("underGraduate", "Undergraduate")}
                            {renderEducationLevel("twelfthGrade", "12th Grade")}
                            {renderEducationLevel("tenthGrade", "10th Grade")}
                        </Form>
                        <FormikValueWatcher<EducationType> onChange={handleOnChange} />
                    </>
                )}
             
            </Formik>
        </main>
    );
});

Education.displayName="Education";
export default Education;
