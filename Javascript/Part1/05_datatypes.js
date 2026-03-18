//use of use strict directive : for new versions of JavaScript & to avoid common mistakes
'use strict';

//install prettier extension in vscode for better formatting of code

//use of alert: to show popup message in browser
// alert("Hello, welcome to JavaScript datatypes tutorial!"); cant be run in node.js environment

//use documentation like mdn or ecmascript to understand standards and more about JavaScript

// JavaScript Data Types Overview
// JavaScript has several data types which can be categorized into two main types: Primitive and Non-Primitive (Reference) types.
// 1. Primitive Data Types:
//    - Number: Represents both integer and floating-point numbers.
//    - String: Represents a sequence of characters.
//    - Boolean: Represents logical entities and can have two values: true or false.
//    - Undefined: A variable that has been declared but not assigned a value.
//    - Null: Represents the intentional absence of any object value.
//    - Symbol: A unique and immutable primitive value used as the key of an object property.
//    - BigInt: Represents integers with arbitrary precision.

// 2. Non-Primitive (Reference) Data Types:
//    - Object: A collection of properties, where each property is defined as a key-value pair.
//    - Array: A special type of object used to store ordered collections of values.
//    - Function: A block of code designed to perform a particular task.
//    - Date: An object that represents a single moment in time.
//    - RegExp: An object that describes a pattern of characters used for matching within strings.

// Examples of Different Data Types:
// Primitive Data Types
let num = 42; // Number
let str = "Hello, World!"; // String
let bool = true; // Boolean
let undef; // Undefined
let nul = null; // Null
let sym = Symbol("unique"); // Symbol
let bigIntNum = 9007199254740991n; // BigInt

console.log("Primitive Data Types:");
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", bool);  
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym.toString());
console.log("BigInt:", bigIntNum+"\n");

// Non-Primitive (Reference) Data Types
let obj = { name: "Alice", age: 30 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
let func = function() { return "I am a function"; }; // Function
let date = new Date(); // Date
let regex = /ab+c/; // RegExp       

console.log("Non-Primitive (Reference) Data Types:");
console.log("Object:", obj);
console.log("Array:", arr);
console.log("Function:", func());
console.log("Date:", date);
console.log("RegExp:", regex+"\n");

// Checking Data Types using typeof operator
console.log("Data Types using typeof operator:");
console.log("Type of num:", typeof num); //or console.log("Type of num:", typeof(num));
console.log("Type of str:", typeof str);
console.log("Type of bool:", typeof bool);
console.log("Type of undef:", typeof undef);
console.log("Type of nul:", typeof nul); // Note: typeof null returns "object" due to a historical bug in JavaScript
console.log("Type of sym:", typeof sym);
console.log("Type of bigIntNum:", typeof bigIntNum);
console.log("Type of obj:", typeof obj);
console.log("Type of arr:", typeof arr);    
console.log("Type of func:", typeof func);
console.log("Type of date:", typeof date);
console.log("Type of regex:", typeof regex);

//Note : Null,object,Array,Function,Date,RegExp are non-primitive data types but typeof operator returns "object" for all of them except Function which returns "function"

// Conclusion:
// Understanding JavaScript data types is crucial for effective programming. Each data type has its own characteristics and use cases. Primitive types are immutable and stored directly in memory, while non-primitive types are mutable and stored as references. Familiarity with these data types will help you write better and more efficient JavaScript code.