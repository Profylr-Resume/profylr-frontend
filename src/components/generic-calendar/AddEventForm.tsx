import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Select,  SelectContent,  SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup,  RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CalendarEventNew } from "@/types/calendarEventNew.interface";
import { calendarEventSchema } from "@/validations/calendarEventSchema";
import { Label } from "../ui/label";


const initialValues:CalendarEventNew = {
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    startTime: "",
    endTime: "",
    isAllDay: false,
    eventType: "Other",
    priority: "Medium",
    isRecurring: false,
    recurrenceFrequency: null,
    reminder: 15
};

export const AddEventForm = ()=> {
    const [isAllDay, setIsAllDay] = useState(false);
    const [isRecurring, setIsRecurring] = useState(false);
  
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <div className="">
            <Formik
                initialValues={initialValues}
                validationSchema ={calendarEventSchema}
                onSubmit={(values, { setSubmitting }) => {
                    try {
                        console.log(values);
                    } catch (error) {
                        console.error(error);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ values, setFieldValue, handleChange, handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit} className="bg-white  rounded-lg  ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Column */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Details</h2>
                    
                                {/* Title and Description */}
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                          Event Title
                                        </label>
                                        <Input
                                            id="title"
                                            name="title"
                                            placeholder="Enter event title"
                                            value={values.title}
                                            onChange={handleChange}
                                            className={errors.title && touched.title ? "border-red-500" : ""}
                                        />
                                        <ErrorMessage 
                                            name="title" 
                                            component="div" 
                                            className="text-red-500 text-sm mt-1" 
                                        />
                                    </div>
    
                                    <div className="space-y-2">
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                          Description
                                        </label>
                                        <Textarea
                                            id="description"
                                            name="description"
                                            placeholder="Event description"
                                            value={values.description}
                                            onChange={handleChange}
                                            className={`${errors.description && touched.description ? "border-red-500" : ""} h-24`}
                                        />
                                        <ErrorMessage 
                                            name="description" 
                                            component="div" 
                                            className="text-red-500 text-sm mt-1" 
                                        />
                                    </div>
                                </div>
    
                                {/* Date and Time Section */}
                                <div className="space-y-4">
                                    <h3 className="text-lg font-medium text-gray-700">Date and Time</h3>
                      
                                    {/* Date Picker */}
                                    <div className="space-y-2">
                                        <Label className="block text-sm font-medium text-gray-700">Event Date</Label>
                                        <Popover>
                                            <PopoverTrigger asChild={true}>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "w-full pl-3 text-left font-normal",
                                                        !values.date && "text-muted-foreground"
                                                    )}
                                                >
                                                    {values.date ? (
                                                        format(new Date(values.date), "PPP")
                                                    ) : (
                                                        <span>Pick a date</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent 
                                                className="w-auto p-0 z-[9999]" 
                                                align="start" 
                                                side="bottom" 
                                                sideOffset={8}
                                            >
                                                <Calendar
                                                    mode="single"
                                                    selected={values.date ? new Date(values.date) : undefined}
                                                    onSelect={(selectedDate) => {
                                                        if (selectedDate) {
                                                            setFieldValue("date", format(selectedDate, "yyyy-MM-dd"));
                                                        }
                                                    }}
                                                    className="rounded-md border p-3"
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    </div>
    
                                    {/* All Day Checkbox */}
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="isAllDay"
                                            checked={isAllDay}
                                            onCheckedChange={(checked) => {
                                                setIsAllDay(!!checked);
                                                setFieldValue("isAllDay", !!checked);
                                                if (checked) {
                                                    setFieldValue("startTime", "");
                                                    setFieldValue("endTime", "");
                                                }
                                            }}
                                        />
                                        <label 
                                            htmlFor="isAllDay" 
                                            className="text-sm font-medium leading-none"
                                        >
                          All Day Event
                                        </label>
                                    </div>
    
                                    {/* Time Fields (if not All Day) */}
                                    {!isAllDay && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
                              Start Time
                                                </label>
                                                <Input
                                                    id="startTime"
                                                    name="startTime"
                                                    type="time"
                                                    value={values.startTime}
                                                    onChange={handleChange}
                                                    className={errors.startTime && touched.startTime ? "border-red-500" : ""}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
                              End Time
                                                </label>
                                                <Input
                                                    id="endTime"
                                                    name="endTime"
                                                    type="time"
                                                    value={values.endTime}
                                                    onChange={handleChange}
                                                    className={errors.endTime && touched.endTime ? "border-red-500" : ""}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
    
                            {/* Right Column */}
                            <div className="space-y-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Properties</h2>
    
                                {/* Event Type Dropdown */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Event Type</label>
                                    <Select 
                                        value={values.eventType}
                                        onValueChange={(value) => setFieldValue("eventType", value)}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select event type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Meeting">Meeting</SelectItem>
                                            <SelectItem value="Task">Task</SelectItem>
                                            <SelectItem value="Reminder">Reminder</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
    
                                {/* Priority Radio Group */}
                                <div className="space-y-2">
                                    <label className="block text-sm font-medium text-gray-700">Priority</label>
                                    <RadioGroup
                                        value={values.priority}
                                        onValueChange={(value) => setFieldValue("priority", value)}
                                        className="flex space-x-4"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="High" id="high-priority" />
                                            <label htmlFor="high-priority">High</label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Medium" id="medium-priority" />
                                            <label htmlFor="medium-priority">Medium</label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Low" id="low-priority" />
                                            <label htmlFor="low-priority">Low</label>
                                        </div>
                                    </RadioGroup>
                                </div>
    
                                {/* Recurring Event Section */}
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id="isRecurring"
                                            checked={isRecurring}
                                            onCheckedChange={(checked) => {
                                                setIsRecurring(!!checked);
                                                setFieldValue("isRecurring", !!checked);
                                                if (!checked) {
                                                    setFieldValue("recurrenceFrequency", null);
                                                    setFieldValue("reminder", 15);
                                                }
                                            }}
                                        />
                                        <label 
                                            htmlFor="isRecurring" 
                                            className="text-sm font-medium leading-none"
                                        >
                          Recurring Event
                                        </label>
                                    </div>
    
                                    {/* Recurring Fields */}
                                    {isRecurring && (
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="block text-sm font-medium text-gray-700">
                              Recurrence Frequency
                                                </label>
                                                <Select 
                                                    value={values.recurrenceFrequency || undefined}
                                                    onValueChange={(value) => setFieldValue("recurrenceFrequency", value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select frequency" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Daily">Daily</SelectItem>
                                                        <SelectItem value="Weekly">Weekly</SelectItem>
                                                        <SelectItem value="Monthly">Monthly</SelectItem>
                                                        <SelectItem value="Yearly">Yearly</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="reminder" className="block text-sm font-medium text-gray-700">
                              Reminder (minutes)
                                                </label>
                                                <Input
                                                    id="reminder"
                                                    name="reminder"
                                                    type="number"
                                                    value={values.reminder}
                                                    onChange={handleChange}
                                                    className={errors.reminder && touched.reminder ? "border-red-500" : ""}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
    
                        {/* Submit Button */}
                        <div className="mt-6">
                            <Button 
                                type="submit" 
                                className="w-full"
                                size="lg"
                            >
                    Create Event
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddEventForm;