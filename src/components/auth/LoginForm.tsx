import LoginType from "@/interface/Login.interface";
import loginValidationSchema from "@/validations/loginValidationSchema";
import { Formik, Field, ErrorMessage, Form } from "formik";
import React from "react";
import { Button } from "../ui/button";


const initialvalues: LoginType = {
    email:"",
    password:""
};

const LoginForm = () => {

    const handleLogin = (values:LoginType):void=>{
        console.log(values);
    };

    return (
        <main className="h-full w-full">
            <Formik
                initialValues={initialvalues}
                validationSchema={loginValidationSchema}
                onSubmit={(values):void=>handleLogin(values)}
            >
                {()=>(
                    <Form className="h-full w-full flex flex-col items-center justify-between" >
                        {/* <div>
                            <Field className="px-3 pt-3 pb-2 border-b-4  border-black w-[24rem] bg-transparent text-xl font-semibold tracking-wider " name="email" placeholder="Email" />
                            <ErrorMessage name="email" component="div" className="text-red-500 font-medium" />
                        </div> */}
                        <section>
                            <div className="relative ">
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    className="peer w-full border-b-2 border-gray-800 py-3 bg-transparent text-black placeholder-transparent focus:outline-none focus:border-black"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-0 -top-4 text-black text-sm font-medium transition-all duration-200 
               transform peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 
               peer-focus:-top-4 peer-focus:text-sm"
                                >
    Email
                                </label>
                                <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                            </div>
                        </section>
                       


                        <Button className="w-[16rem] rounded-3xl bg-black" >Login In</Button>
                    </Form>
                )}
             

            </Formik>
        </main>
    );
};

export default LoginForm;