import { BasicInfoType } from "@/interface/BasicInfo.interface";
import { basicInfoValidationSchema } from "@/validations/basicInfoValidationSchema";
import { Field, Form, Formik, ErrorMessage, FormikProps } from "formik";
import { forwardRef, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormikValueWatcher from "@/utils/formikValuesWatcher";
import { debounce } from "lodash";
import { updateBasicInfo } from "@/redux/features/resumeformSlice";
import { RootState } from "../../redux/store";

const BasicInfo= forwardRef<FormikProps<BasicInfoType> ,object> ((_,ref) => {

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
        <main className='h-full w-full  flex flex-col items-center justify-center ' > 
            <Formik 
                initialValues={initialValues}
                validationSchema={basicInfoValidationSchema}
                onSubmit={()=>{}}
                innerRef={ref}
                enableReinitialize={true}
            >
                {() => (
                    <>
                        <Form className='h-full w-full bg-red-100 flex flex-col items-center justify-center gap-4' >
                            <div className=" flex flex-col  gap-6" > 
                                <div className='text-xl font-semibold flex items-center  gap-2' >
                                    <label htmlFor="name">Name</label>
                                    <Field className="border border-gray-500 rounded-lg px-3 py-1"  autoComplete="off" name="name" type="text"   />
                                    <ErrorMessage name="name" component="div" />
                                </div>
                  
                                <div className='text-xl font-semibold flex items-center  gap-2' >
                                    <label htmlFor="github">GitHub</label>
                                    <Field  className="border border-gray-500 rounded-lg px-3 py-1"  name="github" type="text" />
                                    <ErrorMessage name="github" component="div" />
                                </div>
                  
                                <div className='text-xl font-semibold flex items-center  gap-2' >
                                    <label htmlFor="linkedIn">LinkedIn</label>
                                    <Field  className="border border-gray-500 rounded-lg px-3 py-1"  name="linkedIn" type="text" />
                                    <ErrorMessage name="linkedIn" component="div" />
                                </div>
                  
                                <div className='text-xl font-semibold flex items-center  gap-2' >
                                    <label htmlFor="email">Email</label>
                                    <Field className="border border-gray-500 rounded-lg px-3 py-1"  name="email" type="email" />
                                    <ErrorMessage name="email" component="div" />
                                </div>
                  
                                <div className='text-xl font-semibold flex items-center  gap-2' >
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <Field className="border border-gray-500 rounded-lg px-3 py-1"  name="phoneNumber" type="text" />
                                    <ErrorMessage name="phoneNumber" component="div" />
                                </div>
                            </div>
                            <button type="submit" >Submit</button>
                        </Form>
                        <FormikValueWatcher<BasicInfoType> onChange={handleOnChange} />
                    </>
                )}
            </Formik>
        </main>

    );
});

BasicInfo.displayName="BasicInfo";

export default BasicInfo;

