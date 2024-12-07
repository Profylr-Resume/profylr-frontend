import { Calendar } from "lucide-react";
import React from "react";
import { Card } from "../ui/card";

const UpcomingEvents = () => {
    return (
        <div className="p-6">
            <h3 className="text-lg font-semibold text-black mb-4">Upcoming Events</h3>
            <Card className="h-full w-fullbg-white  p-4">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <Calendar className="h-5 w-5 text-purple-500" />
                        <div className="text-sm font-medium text-black mt-1">Sunday, 20 December</div>
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

    );
};

export default UpcomingEvents;