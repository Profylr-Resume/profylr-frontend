import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash } from "lucide-react";

interface Event {
  id: number
  title: string
  description: string
  createdAt: string
  updatedAt: string
}
const MiscEvents = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [newEvent, setNewEvent] = useState({ title: "", description: "" });

    const addEvent = () => {
        if (newEvent.title && newEvent.description) {
            const now = new Date().toISOString();
            setEvents([...events, { ...newEvent, id: Date.now(), createdAt: now, updatedAt: now }]);
            setNewEvent({ title: "", description: "" });
        }
    };

    const deleteEvent = (id: number) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Miscellaneous Job Events</h2>
            <div className="space-y-2">
                <Input
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <Textarea
                    placeholder="Event Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
                <Button onClick={addEvent}>Add Event</Button>
            </div>
            <div className="space-y-2">
                {events.map((event) => (
                    <div key={event.id} className="p-2 bg-muted rounded-md space-y-1">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium">{event.title}</h3>
                            <div>
                                <Button variant="ghost" size="sm"><Pencil className="h-4 w-4" /></Button>
                                <Button variant="ghost" size="sm" onClick={() => deleteEvent(event.id)}><Trash className="h-4 w-4" /></Button>
                            </div>
                        </div>
                        <p className="text-sm">{event.description}</p>
                        <div className="text-xs text-muted-foreground">
                            <span>Created: {new Date(event.createdAt).toLocaleString()}</span>
                            <span className="ml-2">Updated: {new Date(event.updatedAt).toLocaleString()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiscEvents;