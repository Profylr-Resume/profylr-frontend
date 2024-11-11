import React from "react";
import loginImage from "../../assets/images/login_cartoons.png";
import graduationIcon from "../../assets/icons/graduation.png";
import LoginForm from "../../components/auth/LoginForm";




const Login = () => {


    return (
        <main className="w-screen h-screen bg-themeBlack px-36 py-12">
            <section className="h-full w-full bg-[#e9e9e9] rounded-3xl flex " >
                <section className="w-[60%] h-full rounded-tl-3xl rounded-bl-3xl" >
                    <div className="h-full w-full rounded-tl-3xl rounded-bl-3xl flex items-start justify-center" >
                        <img src={loginImage} alt="" className=" rounded-tl-3xl rounded-bl-3xl" />
                    </div>
                </section>
                <section className="w-[40%] h-full bg-white rounded-3xl " >
                    <div className="h-full w-full p-12">
                        <div className="h-full w-full  flex flex-col items-center mt-12 ">
                            {/* LOGO */}
                            <div className="h-[10%] w-full  flex items-center justify-center" >
                                <img src={graduationIcon} alt="" className="h-10 w-10" />
                            </div>
                            
                            <div className="h-[20%] w-full  flex flex-col gap-2 items-center justify-center  ">
                                <h1 className="text-3xl font-bold antialiased " >Welcome Back!</h1>
                                <h4 className="text-sm font-medium text-gray-600 antialiased " >Please enter your details</h4>
                            </div>

                            <div className="h-[50%] w-full  " >
                                <LoginForm/>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </main>
    );
};

export default Login;