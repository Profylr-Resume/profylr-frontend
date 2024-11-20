import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";
import loginImage from "../../assets/images/login_cartoons.png";
import graduationIcon from "../../assets/icons/graduation.png";

const Register = () => {
    
    return (
        <main className="w-screen h-screen bg-gradient-to-br from-themeGreen to-themeGray flex items-center justify-center ">
            <section className="h-[80%] w-[90%] bg-[#EDEDED] rounded-3xl flex shadow-2xl " >
                <section className="w-[60%] h-full rounded-tl-3xl rounded-bl-3xl" >
                    <div className="h-full w-full rounded-tl-3xl rounded-bl-3xl flex items-start justify-center" >
                        <img src={loginImage} alt="" className="h-full w-ful rounded-tl-3xl rounded-bl-3xl" />
                    </div>
                </section>
                <section className="w-[40%] h-full bg-themeGreen rounded-tr-xl rounded-br-xl " >
                    <div className="h-full w-full p-12">
                        <div className="h-full w-full  flex flex-col items-center justify-center gap-8 ">
                            <div className="w-full  flex flex-col gap-2 items-center justify-center">
                                <h1 className="text-6xl font-bold antialiased text-themeCream " >Welcome!</h1>
                                <h4 className="text-sm font-semibold antialiased tracking-wide text-themeBlack " >Please register your details</h4>
                            </div>

                            <div className=" w-full  " >
                                <RegisterForm/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
};

export default Register;