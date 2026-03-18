// Lets understand control flow in JavaScript

// Types of control flow statements:
// 1. Conditional Statements
// 2. Loops

//NOTE : {} is a scope - the variable declared inside a scope cannot be accessed outside it (use const and let becuz var not follow this rule)

// 1. Conditional Statements

// conditional statements allow you to execute different blocks of code based on certain conditions.
// different condition symbols are : <, >, <=, >=, ==, ===, !=, !==
// === is strict equality (checks value and type both) while == is loose equality (checks value only)

// if statement
let age = 20;
if (age >= 18) {  //(condition)
    console.log("You are an adult.");
}

if (2 == "2") {  
    console.log("only value is checked here.");
}

if (2 === "2") {  
    console.log("both value and type is checked here (this will not execute).");
}

//implicit if statement (without curly braces)- not recommended
if (age >= 18) console.log("You are an adult (implicit if)."), console.log("This is another statement.");

// if-else statement (anyone executed)
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// if-else if-else statement (multiple conditions) with logical operators
let marks = 85;
if (marks >= 90) {
    console.log("Grade A"); 
} else if (marks >= 75 && marks < 90) { // && is logical AND operator - both conditions must be true
    console.log("Grade B");
} else if (marks >= 60 || marks < 75) { // || is logical OR operator - at least one condition must be true  
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

//switch case with string 
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Yellow fruit");
        break;
    case "apple":
        console.log("Red fruit");
        break;
    default:
        console.log("Unknown fruit");
}

// truthy and falsy values
// falsy values: false, 0, -0, "", null, undefined, NaN
// truthy values: "hello", 1, [], {}, function(){}, "0", "false", " "

let testValue = [];
if (testValue) { // empty array is truthy
    console.log("This is truthy.");
} else {
    console.log("This is falsy.");
}

// Actual array empty check (Usually done this way)
if (testValue.length === 0) {
    console.log("Array is empty.");
} else {
    console.log("Array is not empty.");
}

//for object check
let testObject = {};
if (Object.keys(testObject).length === 0) { //Object.keys() returns an array
    console.log("Object is empty.");
} else {
    console.log("Object is not empty.");
}

//NOTE : false == 0 , false == "" , 0 == "" are all true but false === 0 , false === "" , 0 === "" are all false because of type difference

// Nullish Coalescing Operator (??)
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue; // if userInput is null or undefined, defaultValue is used
console.log(finalValue); // Output: Default Value

let val1 = undefined ?? 10;
console.log(val1); // Output: 10

let val2 = 0 ?? 10;
console.log(val2); // Output: 0 (because 0 is not null or undefined) - why not 10 ? becuz here both are considered as number thats why 0 is returned becuz its come first

let val3 = null ?? 10 ?? 20;
console.log(val3); // Output: 10 (first non-nullish value is returned)

// Optional Chaining Operator (?.)
let user = {
    name: "Alice",
    address: {
        city: "Wonderland"
    }
};
console.log(user.address?.city); // Output: Wonderland
console.log(user.contact?.phone); // Output: undefined (no error thrown)
//console.log(user.contact.phone); // Throws error: Cannot read property 'phone' of undefined

// Ternary Operator : (condition ? exprIfTrue : exprIfFalse)
const iceTeaPrice = 30;
const canBuyIceTea = (iceTeaPrice <= 50) ? "You can buy Ice Tea." : "You cannot buy Ice Tea.";
console.log(canBuyIceTea);



// 2. Loops

// loops allow you to execute a block of code multiple times based on a condition.

// for loop
for (let i = 0; i < 5; i++) {  //(initialization; condition; increment)
    console.log("Iteration:", i);
}

// nested for loop
for (let i = 1; i <= 3; i++) {
    console.log(`Outer loop i: ${i}`);
    for (let j = 1; j <= 2; j++) {
        console.log(`inner loop value j: ${j} and inner loop i: ${i}`);
    }
} 

// for loop with array
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit:", fruits[i]);
}

// while loop (works similarly like for loop)
let count = 0; // initialization
while (count < 5) { //(condition)
    console.log("Count:", count);
    count++; // increment
}

// while loop with array
let vegetables = ["carrot", "broccoli", "spinach"];
let index = 0; // initialization
while (index < vegetables.length) { //(condition)
    console.log("Vegetable:", vegetables[index]);
    index++; // increment
}

// do-while loop (execute at least once)
let num = 5; // initialization
do {
    console.log("Do-while Output:", num); // execute one time : Output: 5 then check condition i.e false 
    num++; // increment
} while (num < 2); //(condition)- false but still executed once


// Break and Continue Statements

// break statement exits the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // exit loop when i is 5
    }
    console.log("Break Example i:", i); // prints 0 to 4
}

// continue statement skips the current iteration and moves to the next one
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skip when i is 5
    }
    console.log("Continue Example i:", i); // prints 0 to 9 except 5
}


// for of,in, foreach loop

// for...of loop (used for arrays, strings & map)

// with arrays
let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log("Color:", color);
}

// for...of loop with index 
for (let value of colors) {
    console.log(`${value}: ${colors[value]}`); // Output: red: undefined, green: undefined, blue: undefined (because key is value here)
}

// with strings
let message = "Hello";
for (let char of message) {
    console.log("Character:", char); // Output: H, e, l, l, o
}

// with Map
let capitals = new Map();
capitals.set("USA", "Washington D.C.");
capitals.set("France", "Paris");
capitals.set("Japan", "Tokyo");
console.log(capitals);

for (let [key, value] of capitals) {
    console.log(`${key}: ${value}`); // Output: USA: Washington D.C., France: Paris, Japan: Tokyo
}

// with objects - not recommended
// for object we should use for...in loop instead of for...of loop


// for...in loop (used for objects)
let person = {name: "Bob", age: 25, city: "New York"};

// to get keys
for (let value in person) {
    console.log("Output:",value); // Output: name, age, city (because value is key here)
}

// to get key-value pairs
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Output: name: Bob, age: 25, city: New York
}

// with arrays (not recommended) 
let numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(`Index ${index}: ${numbers[index]}`); // Output: Index 0: 10, Index 1: 20, Index 2: 30
}

// with strings (not recommended)
let text = "Hi";
for (let index in text) {
    console.log(`Index ${index}: ${text[index]}`); // Output: Index 0: H, Index 1: i
}

// with Map (not recommended)
// new example
let countries = new Map();
countries.set("India", "New Delhi");
countries.set("Germany", "Berlin");
countries.set("Italy", "Rome");

// nothing printed...
for (let [key, value] in countries) {
    console.log(`${key}: ${value}`); // Output: [object Map Iterator]: undefined (because key is [object Map Iterator] here) 
}
console.log("for in used for Map : Nothing printed");


// Since array is most commonly used everywhere, foreach loop is introduced specifically for arrays.
// In console you can see under prototype of array, there is a method called forEach.

// forEach loop (array method)  
let animals = ["dog", "cat", "rabbit"];
animals.forEach(function(animal, index, arr) {
    console.log(`Animal ${index}: ${animal} , ${arr}`); // Output: Animal 0: dog, Animal 1: cat, Animal 2: rabbit where arr is the whole array
});

// Arrow function with forEach
animals.forEach((animal, index) => { //similarly arr can be added as third parameter which returns the whole array
    console.log(`Animal ${index} (arrow function): ${animal}`);
});

// Declared a function and passed it to forEach
function printAnimal(animal) {
    console.log("Animal from function:", animal);
}
animals.forEach(printAnimal);

// const myCoding = [{},{},{}] now we can easily able to access each object key using forEach loop.
const myCoding = [
    {
        language: "JavaScript",
        difficulty: "Medium"
    },
    {       
        language: "Python",
        difficulty: "Easy"
    },
    {
        language: "C++",
        difficulty: "Hard"
    }
]

const values = myCoding.forEach((item) => {
    console.log(`Language: ${item.language}, Difficulty: ${item.difficulty}`);
});

console.log(values); // Output: undefined (forEach does not return anything)

// Note : forEach loop does not support break and continue statements.

// The Above problem is solved by filter and map methods.

//see in filter-map-reduce.js file
