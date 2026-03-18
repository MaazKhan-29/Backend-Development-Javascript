//Lets understand numbers in JavaScript

//We can declare numbers in two ways: 1. Directly without defining data type , 2. Using Number Object

// 1. Direct without defining data type 
let intNum = 42;
console.log("Integer:", intNum);

// 2. Using Number Object (Advantage is we can get various methods available with Number object in console and use them)
let numObj = new Number(42);
console.log("Number Object:", numObj);


// Different Types of Numbers in JavaScript

// Integer
let anotherIntNum = 100;
console.log("Another Integer:", anotherIntNum);

// Floating Point Number
let floatNum = 3.14;
console.log("Floating Point Number:", floatNum);

// Scientific Notation
let sciNum = 1.5e3;
console.log("Scientific Notation:", sciNum);

// Hexadecimal Number
let hexNum = 0xFF;
console.log("Hexadecimal Number:", hexNum);

// Octal Number
let octNum = 0o77;
console.log("Octal Number:", octNum);

// Binary Number
let binNum = 0b1010;
console.log("Binary Number:", binNum);

// Special Numeric Values
let infinityNum = Infinity;  // Represents positive infinity
console.log("Infinity:", infinityNum);

let negInfinityNum = -Infinity;
console.log("Negative Infinity:", negInfinityNum);

let nanValue = NaN;
console.log("NaN (Not a Number):", nanValue);


// Numeric Methods
let num = 123.456789;
console.log("Length of number:",num.toString().length) // to check length of number
console.log("toFixed(2):", num.toFixed(2));
console.log("toPrecision(4):", num.toPrecision(4));
console.log("toString(16):", num.toString(16)); // Convert to hexadecimal string
console.log("toExponential(3):", num.toExponential(3)); // Convert to exponential notation
console.log("toLocaleString():", num.toLocaleString('en-IN')); // Indian Numbering System ex: 1,23,456.79

// Parsing Numbers
let intFromString = parseInt("100px");
console.log("Parsed Integer from String:", intFromString);

let floatFromString = parseFloat("12.34abc");
console.log("Parsed Float from String:", floatFromString);

// Number Constants
console.log("MAX_VALUE:", Number.MAX_VALUE); // Largest possible number
console.log("MIN_VALUE:", Number.MIN_VALUE);
console.log("MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER); // Largest safe integer
console.log("MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);
console.log("EPSILON:", Number.EPSILON);

// Checking for Finite and NaN
console.log("isFinite(100):", isFinite(100)); // returns true because 100 is a finite number
console.log("isFinite(Infinity):", isFinite(Infinity)); // returns false because Infinity is not a finite number
console.log("isNaN(NaN):", isNaN(NaN));
console.log("isNaN(123):", isNaN(123));

// Conclusion:
// JavaScript provides a versatile way to work with numbers, supporting various types and methods to manipulate and analyze numeric data effectively.

