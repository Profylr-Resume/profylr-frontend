import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const statuses = [
    "Applied",
    "In Progress",
    "Interview Scheduled",
    "Offer Received",
    "Rejected",
    "Accepted"
];

const StatusTrajectory = () => {
    const [currentStatus, setCurrentStatus] = useState("Applied");
    const [statusHistory, setStatusHistory] = useState([
        { status: "Applied", timestamp: new Date().toISOString() }
    ]);
  
    const handleStatusChange = (newStatus: string) => {
        setCurrentStatus(newStatus);
        setStatusHistory([...statusHistory, { status: newStatus, timestamp: new Date().toISOString() }]);
    };
  
    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Status Trajectory</h2>
            <div className="flex items-center space-x-4">
                <Select onValueChange={handleStatusChange} value={currentStatus}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                        {statuses.map((status) => (
                            <SelectItem key={status} value={status}>{status}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <span>Current Status: {currentStatus}</span>
            </div>
            <div className="space-y-2">
                {statusHistory.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-muted rounded-md">
                        <span>{item.status}</span>
                        <span className="text-sm text-muted-foreground">
                            {new Date(item.timestamp).toLocaleString()}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatusTrajectory;