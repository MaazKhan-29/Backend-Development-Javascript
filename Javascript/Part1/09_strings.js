//Lets understand strings in JavaScript

//Creating strings
let str1 = "Hello, World!";
let str2 = 'JavaScript is fun.';
let str3 = `Template literals are powerful.`;
let str4 = new String("This is a string object.");
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


console.log("\n");


//String concatenation
let greet = "Hello";
let place = "Universe";
let message = greet + ", " + place + "!";
console.log("Concatenated Message:", message); // o/p : Hello, Universe!
//Using template literals 
let templateMessage = `${greet}, ${place}! Welcome to JavaScript.`; //Most preferred way
console.log("Template Literal Message:", templateMessage); // o/p : Hello, Universe! Welcome to JavaScript.


console.log("\n");


//String properties and methods
let sampleStr = "JavaScript String Methods  ";

console.log("Sample String:", sampleStr);
console.log("Type of sampleStr:", typeof sampleStr); // o/p : string
console.log("prototype of sampleStr:", sampleStr.__proto__); // o/p : {}
console.log("Accessing First character:", sampleStr[0]); // o/p : J (accessing first character)
console.log("Length of sampleStr:", sampleStr.length); // o/p : 28 (includes spaces)
console.log("Uppercase:", sampleStr.toUpperCase());
console.log("Lowercase:", sampleStr.toLowerCase());
console.log("Trimmed:", sampleStr.trim()); // removes whitespace from both ends
console.log("Substring (0, 10):", sampleStr.substring(0, 10)); // o/p : JavaScript - 0 to 9 index, 10 not included
console.log("Slice (-7, -1):", sampleStr.slice(-7, -1)); // o/p : Method (same as substring here) difference is here we can use negative indices
console.log("Replace 'String' with 'Text':", sampleStr.replace("String", "Text"));
console.log("Index of 'Methods':", sampleStr.indexOf("Script")); // o/p : 4
console.log("Character at index 5:", sampleStr.charAt(5)); // o/p : c
console.log("Includes 'String':", sampleStr.includes("String")); // o/p : true
console.log("Starts with 'Java':", sampleStr.startsWith("Java")); // o/p : true
console.log("Ends with '  ':", sampleStr.endsWith("  ")); // o/p : true (checks for spaces at the end)
console.log("Split by space:", sampleStr.split(" ")); // o/p : [ 'JavaScript', 'String', 'Methods', '', '' ]
console.log("Repeat 2 times:", sampleStr.repeat(2)); // o/p : JavaScript String Methods  JavaScript String Methods




// In inspection mode, in console If we put declared string (i.e let str1 = "Hello, World!";)
// Each character will be shown with its index number starting from 0 in object format
// e.g 
// 0: "H"
// 1: "e"
// 2: "l"
// 3: "l" etc

//Under Prototype dropdown we can see all string methods available in JavaScript
//There we can study more string properties and methods like includes(), startsWith(), endsWith(), split(), repeat() etc.