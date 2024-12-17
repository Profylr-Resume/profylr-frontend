import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the CSS
import "../../css/custom-generic-calendar.css";
import { CalendarEvent } from "@/types/calendarEvent.interface";
import DaySheet from "./DaySheet";

const localizer = momentLocalizer(moment);

interface DialogProps {
    isDialogOpen: boolean;
    toggleDialog: () => void;
}
interface ReactCalendarEvent {
    title:string,
    start:Date,
    end:Date
}
interface DateSlot {
    actions?:string,
    start:Date,
    end:Date,
    slots:Date[],
    box?:{
        x:number,
        y:number,
        clientX:number,
        clientY:number
    }| undefined,
    bounds?:{ x: number; y: number; top: number; bottom: number; left: number; right: number; } | undefined
}

const calendarEvents:CalendarEvent[] = [
    {
        id: "1",
        title: "Meeting with Bob",
        description: "Discuss project updates and deadlines.",
        start: "2024-12-01T10:00:00Z",
        end: "2024-12-01T10:00:00Z",
        updatedAt: "2024-12-01T10:00:00Z"
    },
    {
        id: "2",
        title: "Team Lunch",
        description: "Lunch with the team to celebrate project completion.",
        start: "2024-12-02T12:00:00Z",
        end: "2024-12-02T12:00:00Z",
        updatedAt: "2024-12-02T12:00:00Z"
    },
    {
        id: "3",
        title: "Client Call",
        description: "Call with client to discuss requirements for the new project.",
        start: "2024-12-03T09:00:00Z",
        end: "2024-12-03T09:00:00Z",
        updatedAt: "2024-12-03T09:00:00Z"
    },
    {
        id: "4",
        title: "Conference",
        description: "Attend the tech conference for networking and learning.",
        start: "2024-12-05T08:30:00Z",
        end: "2024-12-05T08:30:00Z",
    }
];
const events = [
    {
        title: "Meeting with Team",
        start: new Date(2024, 12-1, 20), // December 20, 2024
        end: new Date(2024, 12-1, 20),
    },
    {
        title: "Project Deadline",
        start: new Date(2024, 12-1, 22), // December 22, 2024
        end: new Date(2024, 12-1, 22),
    },
];

const GenericCalendar: React.FC<DialogProps> = ({ isDialogOpen, toggleDialog }) => {

    const [isSheetOpen,setIsSheetOpen]  = useState<boolean>(false);
    const[selectedSlot,setSelectedSlot] = useState<Date|null>(null);

    const toggleSheet = ():void=>{
        setIsSheetOpen((prev):boolean=>!prev);
    }; 

    const handleEventClick = (event):void => {
        // alert(`Event: ${event.title}\nDescription: ${event.description}`);
        setSelectedSlot(event.start);
        toggleSheet();
    };

    const handleDateClick = (slotInfo:DateSlot):void=>{
        setSelectedSlot(slotInfo.start);
        toggleSheet();
    };

    return (
        <main>
            <Dialog open={isDialogOpen} onOpenChange={toggleDialog}>
                <DialogContent className="max-w-[96%] h-[96%] ">
                    <div className="w-full h-full flex flex-col  justify-between">
                        <div className="h-[10%]" >
                            <h2 className="text-3xl font-bold text-black " >Your Important Dates</h2>
                        </div>
                        <div className="h-[90%] w-full px-12 flex items-center justify-center " >
                            <Calendar
                                localizer={localizer}
                                startAccessor="start"
                                endAccessor="end"
                                events={calendarEvents}
                                defaultView="month" // Set default view to "month"
                                views={["month"]} // Restrict views to "month" only
                                onSelectEvent={handleEventClick} // Event click handler
                                onSelectSlot={handleDateClick} // Date click handler
                                selectable={true} // Enables slot selection
                                style={{ height: "90%", width:"100%" }} // Set full height for better visuals
                            />
                        </div>

                    </div>
                    {selectedSlot && (
                        <DaySheet isSheetOpen={isSheetOpen} toggleSheet={toggleSheet} selectedSlot={selectedSlot} />
                    )}  
                </DialogContent>
            </Dialog>
        </main>
    );
};

export default GenericCalendar;
