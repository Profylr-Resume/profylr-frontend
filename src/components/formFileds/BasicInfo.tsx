import { BasicInfoType } from "@/interface/BasicInfo.interface";
import { basicInfoValidationSchema } from "@/validations/basicInfoValidationSchema";
import { Field, Form, Formik, ErrorMessage, FormikProps } from "formik";
import { forwardRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormikValueWatcher from "@/utils/formikValuesWatcher";
import { debounce } from "lodash";
import { updateBasicInfo } from "@/redux/features/resumeformSlice";
import { RootState } from "../../redux/store";
import { Button } from "../ui/button";

const BasicInfo= () => {

    const {basicInfo} = useSelector((state:RootState)=>state.resumeForm);
    const dispatch = useDispatch();

    const debounceStateUpdate = useCallback(
        debounce((newValues)=>{
            console.log(newValues);
            dispatch( updateBasicInfo(newValues));
        },2000)
        ,[]);

    const initialValues:BasicInfoType  = {
        name: basicInfo.name || "",
        github: basicInfo.github || "",
        linkedIn: basicInfo.linkedIn || "",
        email:basicInfo.email || "",
        phoneNumber: basicInfo.phoneNumber ||"",
    };

    const handleOnChange =  (values:BasicInfoType):void=>{
        debounceStateUpdate(values);
    };

    useEffect(():void => {
        console.log(basicInfo);
    }, [basicInfo]);
    
    return (
        <main className="h-full w-full  flex flex-col items-center justify-center ">
            <Formik
                initialValues={initialValues}
                validationSchema={basicInfoValidationSchema}
                onSubmit={() => {}}
                enableReinitialize={true}
            >
                {() => (
                    <>
                        <Form className="h-full w-full flex flex-col items-center justify-evenly mt-8">
                            <div className="h-full flex flex-col w-full items-center justify-evenly space-y-6">
                                {/* Row 1: Name, GitHub, LinkedIn */}
                                <div className="flex space-x-8">
                                    {/* Name Field */}
                                    <div className="text-xl font-semibold flex flex-col items-start space-y-2">
                                        <label htmlFor="name" className="w-36 text-themeCream tracking-wider ">
        Name
                                        </label>
                                        <Field
                                            className=" bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                            autoComplete="off"
                                            name="name"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    {/* GitHub Field */}
                                    <div className="text-xl font-semibold flex flex-col items-start space-y-2">
                                        <label htmlFor="github" className="w-36 text-themeCream tracking-wider ">
        GitHub
                                        </label>
                                        <Field
                                            className="bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                            name="github"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name="github"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    {/* LinkedIn Field */}
                                    <div className="text-xl font-semibold flex flex-col items-start space-y-2">
                                        <label htmlFor="linkedIn" className="w-36 text-themeCream tracking-wider ">
        LinkedIn Link
                                        </label>
                                        <Field
                                            className="bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                            name="linkedIn"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name="linkedIn"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email, Phone Number */}
                                <div className="flex space-x-8">
                                    {/* Email Field */}
                                    <div className="text-xl font-semibold flex flex-col items-start space-y-2">
                                        <label htmlFor="email" className="w-36 text-themeCream tracking-wider ">
        Email
                                        </label>
                                        <Field
                                            className="bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                            name="email"
                                            type="email"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>

                                    {/* Phone Number Field */}
                                    <div className="text-xl font-semibold flex flex-col items-start space-y-2">
                                        <label htmlFor="phoneNumber" className="w-40 text-themeCream tracking-wider ">
        Phone Number
                                        </label>
                                        <Field
                                            className="bg-themeCream bg-opacity-40 text-themeBlack text-lg border border-gray-300 rounded-lg px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-themeGray"
                                            name="phoneNumber"
                                            type="text"
                                        />
                                        <ErrorMessage
                                            name="phoneNumber"
                                            component="div"
                                            className="text-red-500 text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* <Button
                                type="submit"
                            >
                                Compile
                            </Button> */}
                        </Form>
    
                        <FormikValueWatcher<BasicInfoType> onChange={handleOnChange} />
                    </>
                )}
            </Formik>
        </main>
    );
};

export default BasicInfo;

