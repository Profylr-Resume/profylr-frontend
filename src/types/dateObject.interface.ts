export interface DateObject {
    date: number; // Day of the month (1-31)
    monthNumerical: number; // Month (1-12)
    month: string; // Full month name
    shortMonth: string; // Short month name
    year: number; // Full year (e.g., 2024)
    shortYear: string; // Last two digits of the year (e.g., "24")
    hour: number; // Hours (0-23)
    minute: number; // Minutes (0-59)
    day: string; // Full day name
    shortDay: string; // Short day name
}
