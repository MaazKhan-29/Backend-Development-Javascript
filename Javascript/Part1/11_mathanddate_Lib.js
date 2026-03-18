// Lets understand Math and Date library in JavaScript

// Math Library
console.log(Math); // this is a built-in object that has properties and methods for mathematical constants and functions.

// Some commonly used Math methods
console.log("Math.PI:", Math.PI); // returns the value of PI
console.log("Math.round(4.7):", Math.round(4.7)); // rounds a number to the nearest integer
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // rounds a number up to the next largest integer
console.log("Math.floor(4.7):", Math.floor(4.7)); // rounds a number down to the next smallest integer
console.log("Math.sqrt(16):", Math.sqrt(16)); // returns the square root of a number
console.log("Math.abs(-5):", Math.abs(-5)); // returns the absolute value of a number
console.log("Math.max(1, 3, 2):", Math.max(1, 3, 2)); // returns the largest of zero or more numbers
console.log("Math.min(1, 3, 2):", Math.min(1, 3, 2)); // returns the smallest of zero or more numbers
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // returns the base to the exponent power
console.log("Math.random():", Math.random()); // returns a random number between 0 and 1    
console.log("Random number between 1 and 10:", Math.floor(Math.random()*10 + 1)); // returns a random number between 1 and 10


//NOTE : Js takes beginning Date and Year is 1st January 1970 00:00:00 UTC

// Date Library 
console.log(Date); // this is a built-in object that stores the date and time and provides methods for manipulating them.
let currentDate = new Date(); //we can check functions in console by applying this line of code 
console.log("Current Date and Time:", currentDate); // returns the current date and time
console.log("Current Date and Time in proper way:", currentDate.toString()); // to see the full date string
console.log("Current Date :", currentDate.toDateString()); // to see the date string only
console.log("Current Time:", currentDate.toTimeString()); // to see the time string only
console.log("Current Time in Local Format:", currentDate.toLocaleString('en-IN')); // to see the date and time in local format
console.log("Current Year:", currentDate.getFullYear()); // returns the year (4 digits)
console.log("Current Month (0-11):", currentDate.getMonth()); // returns the month (0-11)
console.log("Current Date (1-31):", currentDate.getDate()); // returns the day of the month (1-31)
console.log("Current Day (0-6):", currentDate.getDay()); // returns the day of the week (0-6)
console.log("Current Hours (0-23):", currentDate.getHours()); // returns the hour (0-23)
console.log("Current Minutes (0-59):", currentDate.getMinutes()); // returns the minutes (0-59)
console.log("Current Seconds (0-59):", currentDate.getSeconds()); // returns the seconds (0-59)
console.log("Current Milliseconds (0-999):", currentDate.getMilliseconds()); // returns the milliseconds (0-999)
console.log("Current Timestamp (ms since Jan 1, 1970):", currentDate.getTime()); // returns the number of milliseconds since January 1, 1970
console.log("Current Timestamp using Date.now():", Date.now()); // returns the number of milliseconds since January 1, 1970
console.log("Current Timestamp in seconds since Jan 1, 1970:", Math.floor(Date.now()/1000)); // returns the number of seconds since January 1, 1970

let PassDate = new Date("2023-01-01"); // Creating a date object for January 1, 2023 (This is how we can pass date)
console.log("Passed Date:", PassDate.toString());
console.log("Passed Date in Local Format:", PassDate.toLocaleString('en-IN'));

// Creating a date object with specific date and time
let specificDate = new Date(2022, 11, 25, 10, 30, 0);
console.log("Specific Date (25 Dec 2022 10:30:00):", specificDate.toString());
console.log("Specific Date in Local Format:", specificDate.toLocaleString('en-IN'));

// Setting date and time
specificDate.setFullYear(2023);
specificDate.setMonth(0);
specificDate.setDate(1);
specificDate.setHours(0);
specificDate.setMinutes(0);
specificDate.setSeconds(0);
console.log("Updated Specific Date (1 Jan 2023 00:00:00):", specificDate.toString());
console.log("Updated Specific Date in Local Format:", specificDate.toLocaleString('en-IN'));

// Note: Months are zero-indexed (0 = January, 11 = December)

//Conclusion:
// The Math and Date libraries in JavaScript provide a wide range of functions to perform mathematical calculations and manipulate dates and times effectively.