import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Grid, Home, Image, Mail, MessageSquare, SquarePen, Timer, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const MainNav = () => {

    const location = useLocation();

    return (
        <div className="h-full w-full flex  flex-col items-center gap-20 border-r border-gray-800 bg-[#1e0058] py-4">
           
            {/* Logo */}
            <Button variant="ghost" size="icon" asChild={true} className="mb-4">
                <Link to="/">
                    <Grid className="h-6 w-6 text-orange-500" />
                    <span className="sr-only">Home</span>
                </Link>
            </Button>

            <nav className="flex flex-col items-center gap-8">

                {/* dashboard */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-full text-white",
                        location.pathname === "/dashboard" && "bg-[#774cea] text-white"
                    )}
                    asChild={true}
                >
                    <Link to="/dashboard">
                        <Home className="h-5 w-5" />
                        <span className="sr-only">Home</span>
                    </Link>
                </Button>

                {/* timeline */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-full text-white ",
                        location.pathname === "/timeline" && "bg-orange-500 text-white"
                    )}
                    asChild={true}
                >
                    <Link to="/timeline">
                        <Timer className="h-5 w-5" />
                        <span className="sr-only">Timeline</span>
                    </Link>
                </Button>

                {/* create */}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        "h-10 w-10 rounded-full text-white",
                        location.pathname === "/create-resume" && "bg-orange-500 text-white"
                    )}
                    asChild={true}
                >
                    <Link to="/create-resume">
                        <SquarePen className="h-5 w-5" />
                        <span className="sr-only">Create</span>
                    </Link>
                </Button>

                {/* <Button
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
                </Button> */}
            </nav>
        </div>
    );
};

export default MainNav;