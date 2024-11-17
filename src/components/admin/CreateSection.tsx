import { blackButton } from "@/css/buttons";
import { SectionType } from "@/models/resumeSection.type";
import { useCreateSectionMutation } from "@/redux/features/resumeSectionSlice";
import { sectionValidationSchema } from "@/validations/sectionValidationSchema";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { toast } from "react-toastify";


const initialValues :SectionType = {
    name:"",
    description:""
};
const CreateSection = () => {

    const [createSection] = useCreateSectionMutation();


    const handleSectionSubmission= async(values:SectionType,{setSubmitting,resetForm}: FormikHelpers<SectionType> ):Promise<void>=>{

        setSubmitting(false);

        const {data:{data,error,message}}= await createSection(values);

        if(error){
            toast.error(error || message);
            return;
        }
        toast.success(message);
        resetForm();
        return;
    };

    return (
        <div className="h-full w-full" >
            <Formik
                initialValues={initialValues}
                validationSchema={sectionValidationSchema}
                onSubmit={(values,helpers):Promise<void>=> handleSectionSubmission(values,helpers) }
            >
                {({isSubmitting})=>(
                    <>
                        <Form className="h-full w-full flex flex-col items-center justify-evenly   relative ">
                            <div className="w-full px-32 flex flex-col items-center justify-center gap-10" >

                                <div className="w-full  flex items-center justify-center gap-2">
                                    <label htmlFor="name" className="w-1/2 text-center text-themeWhite font-medium text-6xl whitespace-nowrap ">Name :</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        autoComplete="off"
                                        className={"w-full mx-24 text-xl font-medium  border-0 rounded-2xl text-themeBlack px-4 py-3"}
                                    />
                                </div>

                                <div  className="w-full flex items-center justify-center gap-2 ">
                                    <label htmlFor="description" className="w-1/2 text-center text-themeWhite font-medium text-6xl whitespace-nowrap  ">Description :</label>
                                    <Field
                                        as="textarea"
                                        name="description"
                                        rows={4}
                                        className={"w-full mx-8 text-xl font-medium  border-0 rounded-2xl text-themeBlack px-4 py-3"}
                                    />
                           
                                </div>
                            </div>

                            <div>
                                <button 
                                    type="submit"
                                    className={`${blackButton}`}
                                >
                                            Submit
                                </button>

                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
};

export default CreateSection;