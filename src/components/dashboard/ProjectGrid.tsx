import React from "react";
import { Button } from "../ui/button";
import ProjectCard from "./ProjectCard";

const projects = {
    started: [
        {
            title: "Web Design",
            description: "Wireframing, mockups, client collaboration",
            progress: 56,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 6,
            attachments: 4
        },
        {
            title: "App Development",
            description: "Wireframing, mockups, client collaboration",
            progress: 65,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 6,
            attachments: 4
        }
    ],
    ongoing: [
        {
            title: "Mobile App",
            description: "Wireframing, mockups, client collaboration",
            progress: 30,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 8,
            attachments: 4
        },
        {
            title: "Dashboard",
            description: "Wireframing, mockups, client collaboration",
            progress: 45,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 6,
            attachments: 4
        }
    ],
    completed: [
        {
            title: "Landing Page",
            description: "Wireframing, mockups, client collaboration",
            progress: 100,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 5,
            attachments: 4
        },
        {
            title: "Web Development",
            description: "Wireframing, mockups, client collaboration",
            progress: 100,
            members: ["/placeholder.svg?height=32&width=32", "/placeholder.svg?height=32&width=32"],
            comments: 6,
            attachments: 4
        }
    ]
};

const ProjectGrid = () => {
    return (
        <div className="grid grid-cols-3 gap-6">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Started</h3>
                    <Button variant="ghost" size="icon" className="text-purple-500">
                +
                    </Button>
                </div>
                <div className="space-y-4">
                    {projects.started.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">On Going</h3>
                    <Button variant="ghost" size="icon" className="text-purple-500">
                +
                    </Button>
                </div>
                <div className="space-y-4">
                    {projects.ongoing.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Completed</h3>
                    <Button variant="ghost" size="icon" className="text-purple-500">
                +
                    </Button>
                </div>
                <div className="space-y-4">
                    {projects.completed.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectGrid;