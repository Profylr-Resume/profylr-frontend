import * as Yup from "yup";

export const calendarEventSchema = Yup.object().shape({
    title: Yup.string()
        .max(100, "Title cannot exceed 100 characters.")
        .required("Title is required."),
  
    description: Yup.string()
        .max(500, "Description cannot exceed 500 characters.")
        .required("Description is required."),
  
    date: Yup.date()
        .required("Date is required."),
  
    // startTime: Yup.date()
    //     .nullable()
    //     .typeError("Start time must be a valid ISO date."),
  
    // endTime: Yup.date()
    //     .nullable()
    //     .typeError("End time must be a valid ISO date.")
    //     .min(
    //         Yup.ref("startTime"),
    //         "End time must be after start time."
    //     ),
  
    isAllDay: Yup.boolean()
        .default(false),
  
    eventType: Yup.string()
        .oneOf(["Meeting", "Task", "Reminder", "Other"], "Event type must be one of Meeting, Task, Reminder, or Other.")
        .default("Other"),
  
    priority: Yup.string()
        .oneOf(["High", "Medium", "Low"], "Priority must be one of High, Medium, or Low.")
        .default("Medium"),
  
    isRecurring: Yup.boolean()
        .default(false),
  
    recurrenceFrequency: Yup.string()
        .oneOf(["Daily", "Weekly", "Monthly", "Yearly"], "Recurrence frequency must be one of Daily, Weekly, Monthly, or Yearly.")
        .nullable(),
  
    reminder: Yup.number()
        .integer("Reminder must be an integer.")
        .min(0, "Reminder must be at least 0 minutes.")
        .default(15),
});
