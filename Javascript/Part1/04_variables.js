//Keywords : var, let, const

// var : Function scoped or globally scoped
var name = "John";
console.log(name); // John
name = "Doe";
console.log(name+"\n"); // Doe

// let : Block scoped
let age = 25;
console.log(age); // 25
age = 26; // Reassigning value to 'age' 
console.log(age+"\n"); // 26     
// Uncommenting the below line will throw an error as 'age' is already declared
// let age = 30; // SyntaxError: Identifier 'age' has already been declared

// const : Block scoped, cannot be reassigned
const country = "USA";
console.log(country+"\n"); // USA    
// Uncommenting the below line will throw an error as 'country' is a constant
// country = "Canada"; // TypeError: Assignment to constant variable.

// Summary:
// Use 'var' for function or global scope variables (not recommended in modern JS).
// Use 'let' for block-scoped variables that may change.
// Use 'const' for block-scoped variables that should not change.

// Note: Always prefer 'let' and 'const' over 'var' for better code maintainability and to avoid scope-related issues.

// Best Practices:
// 1. Use 'const' by default unless you know the variable's value will change.
// 2. Use 'let' when you need to reassign a variable.
// 3. Avoid using 'var' to prevent scope-related bugs.

// Example of block scope with let and const
if (true) {
    let blockScopedLet = "I am block scoped";   
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // I am block scoped
    console.log(blockScopedConst+"\n"); // I am also block scoped
}           
// Uncommenting the below lines will throw errors as they are not accessible outside the block
// console.log(blockScopedLet); // ReferenceError: blockScopedLet is not defined
// console.log(blockScopedConst); // ReferenceError: blockScopedConst is not defined

// Example of function scope with var 
//Note:
//Case 1: var declared outside a function
var x = 10;
console.log(x); // works

function test() {
  console.log(x+"\n"); // also works
}
test();

//Case 2: var declared inside a function
function demo() {
  var y = 20;
  console.log(y+"\n"); // works
}

demo(); // works 

// Uncommenting the below line will throw an error as y is not accessible outside the function
// console.log(y); // ❌ ERROR (y is not global) ReferenceError: functionScopedVar is not defined

//When values not assigned then output will be undefined
var unassignedVar;
console.log(unassignedVar); // undefined

// Conclusion: Understanding the differences between var, let, and const is crucial for writing effective JavaScript code.

//Use of console table with normal variables
let fruit = "Apple";
let quantity = 5;
let price = 2.5;    
console.table({ fruit, quantity, price });

//If know about array and object then go through below examples
//Use of console table with arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.table(fruits);

//Use of console table with objects
let product = {
    name: "Laptop",
    brand: "Dell",
    price: 800
};      
console.table(product);
