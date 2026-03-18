// Lets understand functions in JavaScript

// Functions are reusable blocks of code that perform a specific task.

// Types of Functions in JavaScript
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function 

// Two types of returns
// 1. Explicit Return (return keyword is used)
// 2. Implicit Return (without return keyword)-(only in Arrow Functions)

// Function Declaration
function greet(name) {  //function is keyword, greet is function name, name is parameter
    return `Hello, ${name}!`;
}

// Function Expression
const farewell = function(name, value) {
    return `Goodbye, ${name} sleep at ${value} o'clock!`;
};

// Arrow Function
const thankYou = (name) => {
    return `Thank you, ${name}!`;
};

// Arrow Function with implicit return (no curly braces and return keyword)
const welcome = name => `Welcome, ${name}!`;

// Arrow Function with multiple parameters and implicit return
const addTwo = (a, b) => (a + b); // this concept uses as IIFE also

// Arrow Function with object literal return - problematic case
const anotherEx = (a, b) => {username: "exampleUser"}; // this will return undefined because of the curly braces

// Correct way to return object literal in arrow function
const correctObjectReturn = (a, b) => ({username: "exampleUser"}); // wrapping object in parentheses

// Displaying the results
console.log(greet("Alice")); //greet() parenthesis should be compulsory to call the function
console.log(farewell("Bob",14)); //two values are passed called arguments
console.log(thankYou("Charlie"));
console.log(welcome("Diana")); // here you can without return keyword here its printing the value
console.log(addTwo(5, 10)); // Outputs: 15
console.log(anotherEx(1, 2)); // Outputs: undefined
console.log(correctObjectReturn(1, 2)); // Outputs: { username: 'exampleUser' }

// if one number and one string arguments are passed
function add(a, b) {
     console.log(a+b)
}
add(5, "10"); // Outputs: 510 because of type coercion

// if one number and one null arguments are passed
add(5, null); // Outputs: 5 because null is coerced to 0

// Function with empty parameters
function sayHello(user) {
    return `Hello ${user}, World!`;
}
console.log(sayHello()); // Outputs: Hello undefined, World! because no argument is passed
console.log(sayHello("")); // Outputs: Hello , World! because empty string is passed

// after return statement code will not be executed
function testReturn() {
    return "This will be returned.";
    console.log("This will not be executed.");
}
console.log(testReturn()); // Outputs: This will be returned.

// Function with default parameters
function introduce(name, age = 30) {
    return `My name is ${name} and I am ${age} years old.`;
}
console.log(introduce("Eve")); // age will be 30 by default
console.log(introduce("Frank", 25)); // age will be 25

// Problem without using rest parameters
function calculate(num1) {
    return num1;
}
console.log(calculate(1, 2, 3, 4, 5)); // Outputs: 1 only first argument is considered

// Function with rest parameters
function calculateAll(...numbers) {
    return numbers;
}
console.log(calculateAll(1, 2, 3, 4, 5)); // Outputs: [1, 2, 3, 4, 5]

// Using rest parameters with other parameters
function showValues(val1, val2, ...others) {
    console.log("Value 1:", val1);
    console.log("Value 2:", val2);
    console.log("Other Values:", others);
}
showValues(10, 20, 30, 40, 50); 
// Outputs:
// Value 1: 10
// Value 2: 20
// Other Values: [30, 40, 50]

// Passing objects as arguments
function displayPerson(person) {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.cityyy}`;
}
const personObj = { name: "George", age: 28, city: "New York" };
console.log(displayPerson(personObj)); // Outputs: Name: George, Age: 28, City: undefined

// Passing arrays as arguments
function exArray(arr) { //no need to use rest operator here
    return arr[3]; //accessing the 4th element of the array
}
const numbersArray = [1, 2, 3, 4, 5];
console.log(exArray(numbersArray)); // Outputs: 4

// Immediately Invoked Function Expression (IIFE) : used to create a new scope and avoid polluting the global namespace.
// Anonymous IIFE (no name function)
(function() {
    console.log("This function runs immediately upon definition!");
})(); //NOTE : the parentheses at the end are necessary to invoke the function immediately

// IIFE with named function
(function chai() {
    console.log("This named function runs immediately upon definition!");
})();

// Arrow function IIFE
(() => {
    console.log("This arrow function runs immediately upon definition!");
})();

// IIFE with parameters
((name) => {
    console.log("Hello from IIFE, " + name + "!"); // Outputs: Hello from IIFE, argument!
})("argument"); 

// Scope of Functions
// 1. Global Scope
// 2. Local Scope (Function Scope)
// 3. Block Scope (with let and const)

let globalVar = "I am a global variable";

function scopeExample() {   
    let localVar = "I am a local variable";
    console.log(globalVar);
    console.log(localVar);
}
scopeExample();
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
// localVar is not accessible outside the function

if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar);
}
// console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
// blockVar is not accessible outside the block

// let,var const with functions
let l = 7;
const m = 9;
var n = 5;

if (true) {
    let a = 12;
    const b = 13;
    var c = 14;
    console.log(a); // Works fine (as block scope)
    console.log(b); // Works fine
    console.log(c); // Works fine
    console.log(l); // Works fine (as a global scope)
    console.log(m); // Works fine
    console.log(n); // Works fine
}
// console.log(a); // Uncaught ReferenceError: a is not defined
// console.log(b); // Uncaught ReferenceError: b is not defined
console.log(c); // Works fine because var is function-scoped (should be avoided) - that's why let and const are preferred

// nested functions
function one() {
    const username = "Nested User";
    function two() {
        const website = "Nested Website";
        console.log(`Hello, ${username} from nested function!`);
    }
    //console.log(`Welcome to ${website}`); // Uncaught ReferenceError: website is not defined
    two();
}
one();
// line execution follows as : 1. one() is called
// 2. inside one(), username is defined then directly goes to line 182 but since website is not defined thows error
// 3. then goes to line 183 where two() is called
// 4. inside two(), website is defined and username is accessed from outer function one() and prints the message
// This shows that inner functions can access variables from their outer functions, but outer functions cannot access variables from their inner functions.

// Understanding hoisting with function declarations
hoistedFunction(); // Works because of hoisting

function hoistedFunction() {
    console.log("This function is hoisted!");
}

// nonHoistedFunction(); // Uncaught TypeError: nonHoistedFunction is not a function
const nonHoistedFunction = function() {
    console.log("This function is not hoisted!");
}
nonHoistedFunction(); // Works fine here

// Understanding hoisting with arrow functions
// arrowNonHoisted(); // Uncaught ReferenceError: arrowNonHoisted is not defined
const arrowNonHoisted = () => {
    console.log("This arrow function is not hoisted!");
}
arrowNonHoisted(); // Works fine here

// This means that function declarations are hoisted, while function expressions and arrow functions are not hoisted.
// hoisted means the function can be called before its declaration in the code and it will still work.
// non-hoisted means the function cannot be called before its declaration; doing so will result in an error.

