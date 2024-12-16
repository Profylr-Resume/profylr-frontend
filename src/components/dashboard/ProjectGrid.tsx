import React from "react";
import { getRandomColor } from "@/utils/randomColor";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        id:"1",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"2",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"3",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {

        id:"4",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"5",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"6",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"7",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
    {
        id:"8",
        companyName: "Tech Corp",
        role: "Frontend Developer",
        jobLink: "https://techcorp.com/careers/frontend-developer",
        resumeVersion: "Resume_V3.pdf",
        status: "Applied", // Options: "Applied", "Interviewing", "Offer Received", "Rejected", etc.
        importantEvents: [
            {
                title: "Technical Interview",
                date: "2024-12-10",
                description: "Technical interview with the frontend team",
            },
            {
                title: "Follow-Up Email",
                date: "2024-12-15",
                description: "Send a follow-up email to HR regarding interview feedback",
            },
        ],
        timeStamps: {
            applied: "2024-12-01",
            // applied: "2024-12-01T10:30:00Z",
            updated: "2024-12-03T15:00:00Z",
        },
        expectedFollowUp: {
            date: "2024-12-15",
            notes: "Follow up with HR via email to check the status of the application",
        },
    },
];


const ProjectGrid = () => {
    return (
        <div className="h-full w-full ">
            <div className="grid grid-cols-3 gap-6 h-full w-full overflow-y-auto custom-scrollbar " >
                {projects.map((project) => (
                    <ProjectCard key={project.id} jobApplication={project} selectedColor={getRandomColor()} />
                ))} 
            </div>
        </div>
    );
};

export default ProjectGrid;