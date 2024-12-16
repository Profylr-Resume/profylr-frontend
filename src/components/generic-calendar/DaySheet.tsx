import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { DateObject } from "@/types/dateObject.interface";
import { formatDateObject } from "@/utils/timeFormat";
import { CalendarEvent } from "@/types/calendarEvent.interface";
import EventsOnDate from "./EventsOnDate";

interface DaySheetProps{
    isSheetOpen:boolean,
    toggleSheet:()=>void,
    selectedSlot:Date
}

const calendarEvents: CalendarEvent[] = [
    {
        id: "1",
        title: "Meeting with Bob",
        description: "Discuss project updates and deadlines.",
        createdAt: "2024-12-01T10:00:00Z",
        updatedAt: "2024-12-01T10:00:00Z"
    },
    {
        id: "2",
        title: "Team Lunch",
        description: "Lunch with the team to celebrate project completion.",
        createdAt: "2024-12-02T12:00:00Z",
        updatedAt: "2024-12-02T12:00:00Z"
    },
    {
        id: "3",
        title: "Client Call",
        description: "Call with client to discuss requirements for the new project.",
        createdAt: "2024-12-03T09:00:00Z",
        updatedAt: "2024-12-03T09:00:00Z"
    },
    {
        id: "4",
        title: "Conference",
        description: "Attend the tech conference for networking and learning.",
        createdAt: "2024-12-05T08:30:00Z",
        updatedAt: "2024-12-05T08:30:00Z"
    }
];


const DaySheet: React.FC<DaySheetProps> = ({ isSheetOpen, toggleSheet,selectedSlot }) => {

    const [selectedDate, setSelectedDate] = useState<DateObject | null> (null);

    useEffect(()=>{
        if(selectedSlot){
            const value:DateObject = formatDateObject(selectedSlot);
            console.log(value);
            setSelectedDate(value);
        }
    },[selectedSlot]);
  
    return (
        <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
            {selectedDate && (
                <SheetContent
                    side="right"
                    className=" h-full w-full sm:max-w-[42rem] bg-gray-100 "
                >
                    <SheetHeader>
                        <SheetTitle className="text-4xl" > 
                            <div className="flex flex-col gap-3" >
                                <p>{`${selectedDate?.month} ${selectedDate?.date}, ${selectedDate?.year}`} </p>
                                <p>{`${selectedDate.day}`} </p>
                            </div>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="mt-4  " >
                        <EventsOnDate calendarEvents={calendarEvents} />
                    </div>
                </SheetContent>
            )} 

        </Sheet>
    );
};

export default DaySheet;