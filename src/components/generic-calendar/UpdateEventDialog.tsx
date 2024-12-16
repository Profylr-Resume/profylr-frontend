
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarEvent } from "@/types/calendarEvent.interface";

interface UpdateEventDialogProps {
    isOpen: boolean
    onClose: () => void
    onUpdate: (event: CalendarEvent) => void
    event: CalendarEvent
  }

const UpdateEventDialog = ({ isOpen, onClose, onUpdate, event }: UpdateEventDialogProps) => {

    const [title, setTitle] = useState(event.title);
    const [description, setDescription] = useState(event.description);
  
    useEffect(() => {
        setTitle(event.title);
        setDescription(event.description);
    }, [event]);
  
    const handleSubmit = () => {
        const updatedEvent: CalendarEvent = {
            ...event,
            title,
            description,
            updatedAt: new Date().toISOString(),
        };
        onUpdate(updatedEvent);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update Event</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                    <Input 
                        placeholder="Event Title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />
                    <Textarea 
                        placeholder="Event Description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
                </div>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Update Event</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateEventDialog;