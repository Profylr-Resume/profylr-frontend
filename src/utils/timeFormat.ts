export const givenDateWithZ = (dateString:string)=> {
    const date = new Date(dateString);
  
    // Mapping months to their short forms
    const monthShortForms = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    return {
        day: date.getDate(), // Day of the month (1-31)
        month: date.getMonth() + 1, // Month (1-12)
        year: date.getFullYear(), // Full year (e.g., 2024)
        hour: date.getHours(), // Hours (0-23)
        minute: date.getMinutes(), // Minutes (0-59)
        shortMonth: monthShortForms[date.getMonth()], // Short form of the month (e.g., Dec)
        shortYear: date.getFullYear().toString().slice(-2), // Last two digits of the year (e.g., 24)
    };
};
 
  