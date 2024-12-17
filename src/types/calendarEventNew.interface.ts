export interface CalendarEventNew {
    title: string;
    description: string;
    date: string;
    startTime: string;
    endTime: string;
    isAllDay: boolean;
    eventType: "Meeting" | "Task" | "Reminder" | "Other";
    priority: "High" | "Medium" | "Low";
    isRecurring: boolean;
    recurrenceFrequency: "Daily" | "Weekly" | "Monthly" | "Yearly" | null;
    reminder: number;
  }