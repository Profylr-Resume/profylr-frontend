import { basicInfoValidationSchema } from "@/validations/basicInfoValidationSchema";
import { Field, Form, Formik, ErrorMessage } from "formik";


const initialiValues = {
    name:"",
    github:"",
    linkedIn:"",
    email:"",
    phoneNumber:""
};

const BasicInfo:React.FC = () => {


    const handleSubmit=()=>{
    
    };

    return (
        <main className='h-screen w-screen flex flex-col items-center justify-center' >
            <h1 className='text-5xl font-bold text-blue-500 mb-10' >Basic Info</h1>
            <Formik 
                initialValues={initialiValues}
                validationSchema={basicInfoValidationSchema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form className='flex flex-col gap-4' >
                        <div className='text-xl font-semibold flex items-center  gap-2' >
                            <label htmlFor="name">Name</label>
                            <Field className="border border-gray-500 rounded-lg px-3 py-1"  name="name" type="text"  />
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
                
                        <button type="submit"  >Submit</button>
                    </Form>
                )}

            </Formik>
        </main>

    );
};

export default BasicInfo;