import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Grid, Home, Image, Mail, MessageSquare, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const MainNav = () => {

    const location = useLocation();

    return (
        <div className="flex w-16 flex-col items-center space-y-4 border-r border-gray-800 bg-[#1a1625] py-4">
            <Button variant="ghost" size="icon" asChild={true} className="mb-4">
                <Link to="/">
                    <Grid className="h-6 w-6 text-purple-500" />
                    <span className="sr-only">Home</span>
                </Link>
            </Button>
            <nav className="flex flex-col items-center space-y-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/">
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Home</span>
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/projects" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/projects">
                        <Box className="h-5 w-5" />
                        <span className="sr-only">Projects</span>
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/messages" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/messages">
                        <MessageSquare className="h-5 w-5" />
                        <span className="sr-only">Messages</span>
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/media" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/media">
                        <Image className="h-5 w-5" />
                        <span className="sr-only">Media</span>
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/mail" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/mail">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Mail</span>
                    </Link>
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-lg",
                        location.pathname === "/profile" && "bg-purple-500/10 text-purple-500"
                    )}
                    asChild={true}
                >
                    <Link to="/profile">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Profile</span>
                    </Link>
                </Button>
            </nav>
        </div>
    );
};

export default MainNav;