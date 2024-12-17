import React from "react";
import { Calendar } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";


const StatsPannel = () => {
    return (
        <div className="h-full w-full ">
            <div className="h-full w-full flex items-center justify-evenly flex-col ">
                <div className="flex flex-col items-center justify-center gap-2 " >
                    <h3 className="text-lg font-semibold text-black ">JOB APPLICATIONS</h3>
                    <div className=" ">
                        <div className=" flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-3xl font-bold text-black text-center">72%</span>
                            </div>
                        </div>
                        {/* <Progress value={72} className="h-40 w-40 rounded-full bg-red-800" /> */}
                    </div>
                </div>
                <Card className="shaodw-xl p-4">
                    <h4 className="font-semibold text-black mb-3">STATS</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm font-medium text-gray-400">SCHEDULED</div>
                            <div className="text-2xl font-bold text-purple-700">144</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">IN PROGRESS</div>
                            <div className="text-2xl font-bold text-green-500">56</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">APPLIED</div>
                            <div className="text-2xl font-bold text-amber-500">72</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">NO REVERT</div>
                            <div className="text-2xl font-bold text-gray-600">24</div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default StatsPannel;