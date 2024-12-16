import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Note {
  id: number
  content: string
  createdAt: string
}

const NotesSection = () => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [newNote, setNewNote] = useState("");
  
    const addNote = () => {
        if (newNote) {
            setNotes([...notes, { id: Date.now(), content: newNote, createdAt: new Date().toISOString() }]);
            setNewNote("");
        }
    };
  
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Notes</h2>
            <div className="space-y-2">
                <Textarea
                    placeholder="Add a new note..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                />
                <Button onClick={addNote}>Add Note</Button>
            </div>
            <div className="space-y-2">
                {notes.map((note) => (
                    <div key={note.id} className="p-2 bg-muted rounded-md space-y-1">
                        <p className="text-sm">{note.content}</p>
                        <div className="text-xs text-muted-foreground">
                Added: {new Date(note.createdAt).toLocaleString()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotesSection;