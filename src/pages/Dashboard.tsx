import DashboardHeader from "@/components/dashboard/DashboardHeader";
import MainNav from "@/components/dashboard/MainNav";
import ProjectGrid from "@/components/dashboard/ProjectGrid";
import StatsPannel from "@/components/dashboard/StatsPannel";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex h-screen bg-black">
            <MainNav />
            <main className="flex-1 overflow-auto">
                <div className="h-full px-4 py-6 lg:px-8">
                    <DashboardHeader />
                    <ProjectGrid />
                </div>
            </main>
            <StatsPannel />
        </div>
    );
};

export default Dashboard;