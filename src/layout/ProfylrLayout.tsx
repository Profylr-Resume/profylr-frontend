import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MainNav from "@/components/dashboard/MainNav";
import React from "react";
import { Outlet } from "react-router-dom";

const ProfylrLayout = () => {
    return (
        <main className="flex h-screen w-screen bg-[#f2f6ff] ">
            <section className="h-full w-[4.5%]" >
                <MainNav />
            </section>
            <section className="h-full w-[95.5%] flex flex-col px-10">
                <div className="h-[14%] w-full  py-4  " >
                    <div className="h-full w-full rounded-[2rem] " >
                        <DashboardHeader/>
                    </div>
                </div>
                <div className="h-[86%] w-full flex" >
                    <Outlet/>
                </div>
            </section>
        </main>
    );
};

export default ProfylrLayout;