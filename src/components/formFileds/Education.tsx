import  { useCallback, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { educationValidationSchema } from "@/validations/educationValidationSchema";
import { EducationType } from "@/interface/Education.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import FormikValueWatcher from "@/utils/formikValuesWatcher";
import { debounce } from "lodash";
import { updateEducation } from "@/redux/features/resumeformSlice";
import { InitialStateType } from "@/interface/InitialState.type";



const renderEducationLevel = (level:string, title: string) => (
    <div className="flex flex-col items-start">
        <div className="">
            <h2 className="font-semibold underline text-xl text-white tracking-wider ">{title}</h2>
        </div>
        <div className="bg-transparent">
            <div className=" flex items-center gap-4 ">
                <div className="flex flex-col items-start gap-1">
                    <Label
                        htmlFor={`${level}.instituteName`}
                        className="text-themeCream tracking-wider "
                    >
                        Institute Name
                    </Label>
                    <Field
                        name={`${level}.instituteName`}
                        as={Input}
                        className=" bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                        className="text-themeCream tracking-wider "
                    >
          Year
                    </Label>
                    <Field
                        name={`${level}.yearOfPassing`}
                        as={Input}
                        type="number"
                        className=" bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-36 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                            className="text-themeCream tracking-wider "
                        >
            Specialization
                        </Label>
                        <Field
                            name={`${level}.field`}
                            as={Input}
                            className=" bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
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
                        className="text-themeCream tracking-wider "
                    >
                    Result 
                    </Label>
                    <Field
                        name={`${level}.result`}
                        as={Input}
                        type="number"
                        className=" bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-36 focus:outline-none focus:ring-2 focus:ring-themeGray"
                    />
                    <ErrorMessage
                        name={`${level}.result`}
                        component="div"
                    />
                </div>
            </div>
        </div>
    </div>
);

const Education = () => {

    const {education} = useSelector((state:RootState):InitialStateType=>state.resumeForm);
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
        <main className="h-full w-full  flex items-center justify-center">
            <Formik
                initialValues={initialValues}
                validationSchema={educationValidationSchema}
                onSubmit={()=>{}}
            >
                {()=>(
                    <>
                        <Form className="h-full w-full flex flex-col items-center justify-evenly">
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
};

export default Education;
