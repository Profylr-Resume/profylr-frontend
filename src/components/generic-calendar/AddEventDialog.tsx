import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarEvent } from "@/types/calendarEvent.interface";

interface AddEventDialogProps {
    isOpen: boolean
    onClose: () => void
    onAdd: (event: CalendarEvent) => void
  }

const AddEventDialog:React.FC<AddEventDialogProps> = ({ isOpen, onClose, onAdd }: AddEventDialogProps) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = () => {
        const newEvent: CalendarEvent = {
            id: Date.now().toString(),
            title,
            description,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        onAdd(newEvent);
        onClose();
        setTitle("");
        setDescription("");
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
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
                    <Button onClick={handleSubmit}>Add Event</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddEventDialog;