import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import user_profile from "../assets/icons/user_profile.png";

  
const UserProfile = () => {

    

    return (
        <main className="w-full flex flex-col items-center pt-4 " >
            <div className="absolute" >
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <img src={user_profile} alt="user" className="h-12 filter invert " />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="absolute w-[10rem] right-[-22px] bg-themeCream  " >
                        <DropdownMenuLabel className="underline text-lg" >My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-lg font-medium" >Profile</DropdownMenuItem>
                        <DropdownMenuItem className="text-lg font-medium" >All Resumes</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

        </main>
    );
};

export default UserProfile;