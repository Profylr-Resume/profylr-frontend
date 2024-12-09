import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MainNav from "@/components/dashboard/MainNav";
import ProjectGrid from "@/components/dashboard/ProjectGrid";
import ProjectGridHeader from "@/components/dashboard/ProjectGridHeader";
import StatsPannel from "@/components/dashboard/StatsPannel";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex h-screen w-screen bg-[#f2f6ff] ">
            <div className="h-full w-[4.5%]" >
                <MainNav />
            </div>
            <main className="h-full w-[95.5%] flex flex-col px-10">
                <div className="h-[14%] w-full  py-4  " >
                    <div className="h-full w-full rounded-[2rem] " >
                        <DashboardHeader/>
                    </div>
                </div>

                <div className="h-[86%] w-full flex" >

                    <div className="h-full w-full  pr-10 pb-6 pt-2 ">
                        <div className="h-full w-full bg-white rounded-[2rem]" >
                            <div className="w-full h-[10%] rounded-t-[2rem] "  >
                                <ProjectGridHeader />
                            </div>
                            <div className="w-full h-[90%] rounded-b-[2rem] px-3 py-2" >
                                <ProjectGrid />
                            </div>
                          
                        </div>
                    </div>
              
                    <div className="h-full w-[20%]  flex flex-col justify-between pt-2 pb-6" >
                        <div className="h-[54%] w-full bg-white rounded-[2rem] ">
                            <StatsPannel />
                        </div>
                        <div className="h-[44%] w-full bg-white rounded-[2rem] " >
                            <UpcomingEvents/>
                        </div>
                    </div>
                </div>
             
            </main>
        </div>
    );
};

export default Dashboard;