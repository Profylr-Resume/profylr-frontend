import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { CalendarEvent } from "@/types/calendarEvent.interface";
import UpdateEventDialog from "./UpdateEventDialog";


  
interface EventCardProps {
  event: CalendarEvent
  onDelete: (id: string) => void
  onUpdate: (event: CalendarEvent) => void
}


const EventCard = ({ event, onDelete, onUpdate }:EventCardProps)=> {
   
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    
    return (
        <div className=" h-[10rem] bg-white p-4 rounded-xl shadow-md hover:shadow-xl " >
            <div className="mb-2" >
                <p className="text-lg font-semibold" >{event.title}</p>
            </div>
            <div>
                <div className="flex justify-between " >
                    <div className="flex flex-col" >
                        <p className="text-base font-medium text-gray-700 " >{event.description}</p>
                        <p className="text-sm italic text-muted-foreground mt-2">Created: {new Date(event.createdAt).toLocaleString()}</p>
                        <p className="text-sm italic text-muted-foreground">Last Updated: {new Date(event.updatedAt).toLocaleString()}</p>
                    </div>
                    <div className="flex items-center gap-4" >
                        <Button variant="outline" size="sm" onClick={() => setIsUpdateOpen(true)}>
                            <Pencil className="mr-2 h-4 w-4" /> Update
                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger asChild={true}>
                                <Button variant="destructive" size="sm">
                                    <Trash className="mr-2 h-4 w-4" /> Delete
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete the event.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction onClick={() => onDelete(event.id)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </div>
            </div>
    
            <UpdateEventDialog 
                isOpen={isUpdateOpen} 
                onClose={() => setIsUpdateOpen(false)} 
                onUpdate={onUpdate} 
                event={event} 
            />
        </div>
    );
};

export default EventCard;