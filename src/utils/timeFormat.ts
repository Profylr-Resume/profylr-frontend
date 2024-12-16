export const formatDateObject = (dateString:string | Date)=> {
    const date = new Date(dateString);
  
    // Mapping months to their short forms
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];

    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const shortMonths = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return {
        date: date.getDate(), // Day of the month (1-31)
        monthNumerical: date.getMonth() + 1, // Month (1-12)
        month: months[date.getMonth()],
        shortMonth: shortMonths[date.getMonth()],
        year: date.getFullYear(), // Full year (e.g., 2024)
        shortYear: date.getFullYear().toString().slice(-2),
        hour: date.getHours(), // Hours (0-23)
        minute: date.getMinutes(), // Minutes (0-59)
        day: days[date.getDay()],
        shortDay: shortDays[date.getDay()],
    };
};
 
  