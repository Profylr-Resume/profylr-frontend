import React from "react";
import { Search} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const DashboardHeader = () => {
    return (
        <div className="flex items-center justify-between pb-8">
            <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight text-white">Projects</h2>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search projects..." className="pl-8 bg-gray-900 border-gray-800" />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700">Create Project</Button>
            </div>
        </div>
    );
};

export default DashboardHeader;