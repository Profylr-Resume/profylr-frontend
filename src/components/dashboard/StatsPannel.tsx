import React from "react";
import { Calendar } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";


const StatsPannel = () => {
    return (
        <div className="w-80 border-l border-gray-800 bg-[#1a1625] p-6">
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Design Team</h3>
                    <div className="relative w-40 h-40 mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-3xl font-bold text-white">72%</span>
                            </div>
                        </div>
                        <Progress value={72} className="h-40 w-40 rounded-full bg-gray-800" indicatorClassName="bg-purple-500" />
                    </div>
                </div>
                <Card className="bg-gray-900 border-gray-800 p-4">
                    <h4 className="font-semibold text-white mb-3">Projects</h4>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-sm font-medium text-gray-400">TOTAL</div>
                            <div className="text-2xl font-bold text-white">144</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">COMPLETED</div>
                            <div className="text-2xl font-bold text-orange-500">56</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">IN PROGRESS</div>
                            <div className="text-2xl font-bold text-purple-500">72</div>
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-400">WAITING</div>
                            <div className="text-2xl font-bold text-gray-300">24</div>
                        </div>
                    </div>
                </Card>
                <Card className="bg-gray-900 border-gray-800 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <Calendar className="h-5 w-5 text-purple-500" />
                            <div className="text-sm font-medium text-white mt-1">Sunday, 20 December</div>
                            <div className="text-xs text-gray-400">08:00-11:00 AM</div>
                        </div>
                        <button title="hello" type="button" className="text-gray-400 hover:text-gray-300">
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                        <div className="text-sm text-gray-400">Discussion notes</div>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">Internal Messages</div>
                </Card>
            </div>
        </div>
    );
};

export default StatsPannel;