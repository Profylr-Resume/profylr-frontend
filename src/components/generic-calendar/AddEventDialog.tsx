import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarEvent } from "@/types/calendarEvent.interface";
import AddEventForm from "./AddEventForm";

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
            <DialogContent className="max-w-[60rem] h-[40rem] " >
                <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                </DialogHeader>
                <AddEventForm/>
            </DialogContent>
        </Dialog>
    );
};

export default AddEventDialog;