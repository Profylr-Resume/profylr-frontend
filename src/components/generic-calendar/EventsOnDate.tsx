import { useEffect, useState } from "react";
import { CalendarEvent } from "@/types/calendarEvent.interface";
import { Plus } from "lucide-react";
import EventCard from "./EventCard";
import { Button } from "../ui/button";
import AddEventDialog from "./AddEventDialog";

 
interface EventsOnDateProps {
    calendarEvents:CalendarEvent[]
}

const EventsOnDate:React.FC<EventsOnDateProps> = ({calendarEvents}) => {

    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [isAddEventOpen, setIsAddEventOpen] = useState<boolean>(false);
  
    useEffect(()=>{
        if(calendarEvents){
            setEvents(calendarEvents);
        }
    },[calendarEvents]);

    const addEvent = (newEvent: CalendarEvent) => {
        setEvents([...events, newEvent]);
    };
  
    const deleteEvent = (id: string) => {
        setEvents(events.filter(event => event.id !== id));
    };
  
    const updateEvent = (updatedEvent: CalendarEvent) => {
        setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event));
    };
 
    return(
        <>
            <div className="flex flex-col gap-4" >
                {/* header */}
                <div className="w-full flex items-center justify-end " >
                    <Button onClick={() => setIsAddEventOpen(true)} >
                        <Plus className="mr-2 h-4 w-4" /> Add Event
                    </Button>
                </div>
                <div className="h-[32rem] flex flex-col gap-5 overflow-y-auto custom-scrollbar" >
                    {events.map(event => (
                        <EventCard 
                            key={event.id} 
                            event={event} 
                            onDelete={deleteEvent} 
                            onUpdate={updateEvent} 
                        />
                    ))}
                </div>

                <AddEventDialog
                    isOpen={isAddEventOpen} 
                    onClose={() => setIsAddEventOpen(false)} 
                    onAdd={addEvent}  />
           
            </div>
         
        </>
    );
};

export default EventsOnDate;