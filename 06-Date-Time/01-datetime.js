// dates


let myDate = new Date();

console.log(myDate); // Current date and time

console.log(myDate.toString()); // String representation of the date
console.log(myDate.toISOString()); // ISO format
console.log(myDate.toLocaleString()); // Localized string representation
let myCreatedDate = new Date(2023, 0 , 23);

console.log(myCreatedDate.toLocaleString()); // Date object for January 23, 2023
let myTimeStamp = Date.now();

console.log(myCreatedDate.getTime()); // Get timestamp in milliseconds
console.log(myTimeStamp); // Current timestamp in milliseconds


console.log(Math.floor(myTimeStamp / 1000)); // Convert milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear()); // Get the full year (e.g., 2023
console.log(newDate.getMonth()); // Get the month (0-11, where 0 is January)
console.log(newDate.getDate()); // Get the day of the month (1-31)
console.log(newDate.getDay()); // Get the day of the week (0-6, where 0 is Sunday)
console.log(newDate.getHours()); // Get the hour (0-23)
console.log(newDate.getMinutes()); // Get the minutes (0-59)
console.log(newDate.getSeconds()); // Get the seconds (0-59)
console.log(newDate.getMilliseconds()); // Get the milliseconds (0-999)

