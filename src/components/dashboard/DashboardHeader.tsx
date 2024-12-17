import React, { useState } from "react";
import { ALargeSmall, Bell, CalendarDays, ChevronDown, Menu, Plus, Search} from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import avatar from "../../assets/icons/avatars/avatar1.jpg";
import GenericCalendar from "../generic-calendar/GenericCalendar";
import AddEventDialog from "../generic-calendar/AddEventDialog";

const DashboardHeader = () => {

    const [isDialogOpen, setIsOpen] = useState<boolean>(false);
    const [isAddEventOpen, setIsAddEventOpen] = useState<boolean>(false);

    const toggleOpenDialog = ()=>{
        setIsOpen((prev):boolean=>!prev);
    };


    return (
        <div className="w-full h-full flex justify-between " >
            <div className="flex items-center gap-6 " > 
                <div>
                    <Menu size={20} />
                </div>
                <div className=" bg-white flex items-center  border-2 rounded-full  " >
                    <label htmlFor="search" className="px-3" > <Search/> </label>   
                    <input
                        type="text"
                        name="search"
                        id="search"
                        className="border-0 h-10 rounded-r-[2rem] w-[26rem] bg-white focus:ring-gray-200 focus:ring-2 focus:outline-none"
                    />

                </div>
            </div>
            <div className="flex items-center  " >
                <div className="flex items-center justify-center gap-8 border-r-4 border-gray-400 px-12" >
                    <Bell className="text-gray-800  " />
                    <CalendarDays className="text-gray-800 hover:cursor-pointer" onClick={toggleOpenDialog}  />
                    <GenericCalendar isDialogOpen={isDialogOpen} toggleDialog={toggleOpenDialog}/>
                    <Button onClick={() => setIsAddEventOpen(true)} size={"sm"} >
                        <Plus className="mr-2 h-4 w-4" /> Add Event
                    </Button>
                    
                    <AddEventDialog
                        isOpen={isAddEventOpen} 
                        onClose={() => setIsAddEventOpen(false)} 
                        onAdd={()=>true}  />
                </div>
               
                <div className="flex items-center gap-3 px-8" >
                    <div className="flex items-center justify-center rounded-full ">
                        <img src={avatar} alt="Avatar" className="h-10 w-8 rounded-full " />
                    </div>
                    <h3 className="text-base font-semibold text-gray-800 " >Hemant</h3>
                    <ChevronDown/>
                </div>
            </div>
        </div>
    );
};

export default DashboardHeader;