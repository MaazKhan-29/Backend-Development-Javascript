// Lets understand this keyword in JavaScript

// 'this' keyword refers to the object it belongs to. Its value depends on how a function is called.

// In the global context
console.log("this keyword used outside:",this); // In global context, 'this' refers to the global object (window in browsers, global in Node.js)
// Output will be the global object : {}

// Regular function example
function showThis() {
    console.log("this keyword under function:",this); // In a regular function, 'this' refers to the global object (or undefined in strict mode)
    // Output is something like : <ref *1> Object [global] {global: [Circular *1],clearImmediate: [Function: clearImmediate]........
}
showThis();

// Regular function accessing variable (same happens with arrow functions)
function chai(){
    let username = "Chai";
    console.log("Hello, " + username) // Normal variable access
    console.log("Hello, " + this.username); // 'this' does not refer to the function's scope, so this.username is undefined
}

// Method inside an object
const obj = {
    name: "My Object",
    showThisInMethod: function() {  
        console.log("this keyword under method in object:",this); // In a method, 'this' refers to the object that owns the method
        // Output will be : { name: 'My Object', showThisInMethod: [Function: showThisInMethod] }
        console.log("Accessing name property using this:", this.name); // Accessing property using 'this'
    }
};
obj.showThisInMethod();
obj.name = "Updated Object Name"; // Advantage of using 'this' is that it reflects current state
obj.showThisInMethod(); 

// Arrow function example
const arrowFunction = () => {
    console.log("this keyword under arrow function:",this); // In an arrow function, 'this' retains the value of the enclosing lexical context
    // Output will be the global object : {}
}
arrowFunction();

// Arrow function inside an object
const objWithArrow = {
    name: "Object with Arrow",
    showThisInArrow: () => {    
        console.log("this keyword under arrow function in object:",this); // In an arrow function inside an object, 'this' still refers to the global object
        // Output will be the global object : {}
    }
};
objWithArrow.showThisInArrow();

