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
            <section className="h-full w-[95.5%] flex flex-col px-8 gap-3">
                <div className="h-[10%] w-full  py-2 " >
                    <div className="h-full w-full" >
                        <DashboardHeader/>
                    </div>
                </div>
                <div className="h-[88%] w-full flex" >
                    <Outlet/>
                </div>
            </section>
        </main>
    );
};

export default ProfylrLayout;