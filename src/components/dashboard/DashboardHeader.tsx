import React, { useState } from "react";
import { Bell, CalendarDays, ChevronDown, Menu, Search} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import avatar from "../../assets/icons/avatars/avatar1.jpg";
import GenericCalendar from "../generic-calendar/GenericCalendar";

const DashboardHeader = () => {

    const [isDialogOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpenDialog = ()=>{
        setIsOpen((prev):boolean=>!prev);
    };


    return (
        <div className="w-full h-full flex justify-between " >
            <div className="flex items-center gap-10 " > 
                <div>
                    <Menu size={30} />
                </div>
                <div className=" bg-white flex items-center  border-2 rounded-full  " >
                    <label htmlFor="search" className="px-3" > <Search/> </label>   
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="border-0 h-12 rounded-r-[2rem] w-[26rem] bg-white focus:ring-gray-200 focus:ring-2 focus:outline-none"
                    />

                </div>
            </div>
            <div className="flex items-center  " >
                <div className="flex items-center justify-center gap-8 border-r-4 border-gray-400 px-12" >
                    <Bell className="text-gray-800  " />
                    <CalendarDays className="text-gray-800 hover:cursor-pointer" onClick={toggleOpenDialog}  />
                    <GenericCalendar isDialogOpen={isDialogOpen} toggleDialog={toggleOpenDialog}/>
                </div>
               
                <div className="flex items-center gap-3 px-8" >
                    <div className="flex items-center justify-center rounded-full ">
                        <img src={avatar} alt="Avatar" className="h-12 w-10 rounded-full " />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 " >Hemant</h3>
                    <ChevronDown/>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;