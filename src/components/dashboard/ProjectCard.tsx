import React from "react";
import { MessageSquare, Paperclip } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  project: {
    title: string
    description: string
    progress: number
    members: string[]
    comments: number
    attachments: number
  }
}

const ProjectCard = ({project}:ProjectCardProps) => {
    return (
        <Card className="p-4 bg-gray-900 border-gray-800">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-white">{project.title}</h4>
                    <button className="text-gray-400 hover:text-gray-300">...</button>
                </div>
                <p className="text-sm text-gray-400">{project.description}</p>
                <Progress value={project.progress} className="h-2 bg-gray-800" indicatorClassName="bg-purple-500" />
                <div className="flex items-center justify-between">
                    <div className="flex -space-x-2">
                        {project.members.map((member, i) => (
                            <img
                                key={i}
                                src={member}
                                alt='Team Member'
                                className="rounded-full border-2 border-gray-900"
                                width={32}
                                height={32}
                            />
                        ))}
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400">
                        <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span className="text-xs">{project.comments}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Paperclip className="h-4 w-4" />
                            <span className="text-xs">{project.attachments}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProjectCard;