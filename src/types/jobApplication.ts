interface ImportantEvent {
    title: string;
    date: string; // You may want to use a `Date` object, but for simplicity, string can work here
    description: string;
}

interface TimeStamps {
    applied: string;
    updated: string;
}

interface ExpectedFollowUp {
    date: string;
    notes: string;
}

export interface JobApplication {
    id:string
    companyName: string;
    role: string;
    jobLink: string;
    resumeVersion: string;
    // status: "Applied" | "Interviewing" | "Offer Received" | "Rejected"; // You can add more options here
    status:string,
    importantEvents: ImportantEvent[];
    timeStamps: TimeStamps;
    expectedFollowUp: ExpectedFollowUp;
}