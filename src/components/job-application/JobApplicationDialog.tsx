import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import BasicDetails from "./BasicDetails";
import StatusTrajectory from "./StatusTrajectory";
import MiscEvents from "./MiscEvents";
import NotesSection from "./NotesSection";

const JobApplicationDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Job Application Details</DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    <BasicDetails />
                    <StatusTrajectory />
                    <MiscEvents />
                    <NotesSection />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default JobApplicationDialog;