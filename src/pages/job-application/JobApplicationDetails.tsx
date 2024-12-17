import JobApplicationDialog from "@/components/job-application/JobApplicationDialog";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const JobApplicationDetails = () => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const toggleDialog = ()=>{
        setDialogOpen(prev=>!prev);
    };
    return (
        <div>
            <Button onClick={() => setDialogOpen(true)}>Open Job Application Details</Button>
            <JobApplicationDialog open={dialogOpen} toggleDialog={toggleDialog} />
        </div>
    );
};

export default JobApplicationDetails;