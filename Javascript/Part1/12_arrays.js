// Lets understand arrays in JavaScript

// An Array is a special variable, which can hold more than one value at a time.
// As Array is non-primitive Datatype : Memory for array is in heap section through which we takes reference and original array can be modified (i.e arrays create shallow copies rather than deep copies).

// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Mango', 'Orange' ]

// Accessing array elements using index
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Mango

// Modifying array elements
fruits[1] = "Grapes";
console.log(fruits); // Output: [ 'Apple', 'Grapes', 'Mango', 'Orange' ]

// Array properties
console.log(fruits.length); // Output: 4
console.log(Array.isArray(fruits)); // Output: true

// Array methods
fruits.push("Pineapple"); // Adds an element at the end
console.log(fruits); // Output: [ 'Apple', 'Grapes', 'Mango', 'Orange', 'Pineapple' ]
fruits.pop(); // Removes the last element
console.log(fruits); // Output: [ 'Apple', 'Grapes', 'Mango', 'Orange' ]
fruits.shift(); // Removes the first element
console.log(fruits); // Output: [ 'Grapes', 'Mango', 'Orange' ]
fruits.unshift("Strawberry"); // Adds an element at the beginning
console.log(fruits); // Output: [ 'Strawberry', 'Grapes', 'Mango', 'Orange' ]
// Searching in array : indexOf and includes
let index = fruits.indexOf("Mango"); // Finds the index of an element
console.log(index); // Output: 2
let notFoundIndex = fruits.indexOf("Pineapple"); // if indexOf element not found it returns -1 see below example
console.log(notFoundIndex); // Output: -1
console.log(fruits.includes("Orange")); // Output: true
console.log(fruits.includes("Apple")); // Output: false
//slice and splice
console.log("Before Slice:",fruits); // Output: [ 'Strawberry', 'Grapes', 'Mango', 'Orange' ]
let slicedFruits = fruits.slice(1, 3); // Slices the array from index (1 to 2) (original array not affected)
console.log(slicedFruits); // Output: [ 'Grapes', 'Mango' ]
console.log(fruits); // Output: [ 'Strawberry', 'Grapes', 'Mango', 'Orange' ]
fruits.splice(1, 3); // Removes 3 elements starting from index 1
console.log(fruits); // Output: [ 'Strawberry' ] (original array modified)
fruits.push("Banana", "Kiwi", "Peach", "Watermelon");
console.log(fruits); // Output: [ 'Strawberry', 'Banana', 'Kiwi', 'Peach', 'Watermelon' ]
fruits.splice(2, 1, "Blueberry", "Raspberry"); // At index 2, removes 1 element and adds "Blueberry" and "Raspberry"
console.log(fruits); // Output: [ 'Strawberry', 'Banana', 'Blueberry', 'Raspberry', 'Peach', 'Watermelon' ]

// Slice and Splice are very useful methods to manipulate arrays.
// We learn difference between them is (Interview Frequently Asked Question):
//1) Slice method does not modify original array where as Splice method modifies original array.
//2) Slice method returns a new array containing the extracted elements whereas Splice method returns an array containing the deleted elements.
//3) Slice follows (start, end) parameters where as Splice follows (start, end-1).
//4) Slice follows (start, end) parameters where as Splice follows (start, deleteCount, item1, item2, ...).

// for more methods go to console and type Array.prototype. to explore all array methods available in JavaScript.

// above we take example of a string array but arrays can hold multiple datatypes as well.
let mixedArray = [42, "Hello", true, null, { name: "John" }, [1, 2, 3]];
console.log(mixedArray); // Output: [ 42, 'Hello', true, null, { name: 'John' }, [ 1, 2, 3 ] ]

// Array can also be created using the Array constructor (above we used array literal method)
let numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers); // Output: [ 1, 2, 3, 4, 5 ]
console.log(numbers[2]); // Output: 3
// However, using array literals is generally preferred for simplicity and readability.

// join method
console.log(fruits); // Output: [ 'Strawberry', 'Banana', 'Blueberry', 'Raspberry', 'Peach', 'Watermelon' ]
let joinedFruits = fruits.join(", "); // Joins : Convert array elements into a string with ", " as separator
console.log(joinedFruits); // Output: Strawberry, Banana, Blueberry, Raspberry, Peach, Watermelon

// Combining of two arrays 
let veggies = ["Carrot", "Broccoli", "Spinach"];
let dryFruits = ["Almonds", "Cashews", "Walnuts"];
veggies.push(dryFruits); // combines dryFruits array into veggies array
console.log(veggies); // Output: [ 'Carrot', 'Broccoli', 'Spinach', [ 'Almonds', 'Cashews', 'Walnuts' ] ]
//accessing cashhews from combined array
console.log(veggies[3][1]); // Output: Cashews
// but the above method is not recommended as it creates nested array instead we can use concat method or spread operator
let combinedArray1 = veggies.concat(dryFruits); // combines two arrays using concat method
console.log(combinedArray1); // Output: [ 'Carrot', 'Broccoli', 'Spinach', 'Almonds', 'Cashews', 'Walnuts' ]
//more better way is using spread operator
let combinedArray2 = [...veggies, ...dryFruits];
console.log(combinedArray2); // Output: [ 'Carrot', 'Broccoli', 'Spinach', 'Almonds', 'Cashews', 'Walnuts' ]

// Nested Arrays and flattening
const anotherArray = [10, 20, [30, 40, 50], 60, 70, [80, [90, 100], 110], 120];
console.log(anotherArray); // Output: [ 10, 20, [ 30, 40, 50 ], 60, 70, [ 80, [ 90, 100 ], 110 ], 120 ]
//flatten method
//let flattenedArray = anotherArray.flat(2); // Flattens the array up to 2 levels deep
let flattenedArray = anotherArray.flat(Infinity); // Flattens the array completely
console.log(flattenedArray); // Output: [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ]

// Converting string to array
let sampleString = "Welcome";
//from method
let stringToArray1 = Array.from(sampleString);
console.log(stringToArray1); // Output: [ 'W', 'e', 'l', 'c', 'o', 'm', 'e' ]
//split method
let stringToArray2 = sampleString.split("");
console.log(stringToArray2); // Output: [ 'W', 'e', 'l', 'c', 'o', 'm', 'e' ]
// Both methods are useful to convert a string into an array of characters.

//NOTE
let objectToArray1 = Array.from({ a: 1, b: 2, c: 3 });
console.log(objectToArray1); // Output: [ undefined, undefined, undefined ]
// from method creates array from array-like or iterable objects but plain objects are not iterable so it creates array of undefined values.

//use of OF METHOD
let score1 = 100;
let score2 = 200;
let score3 = 300;
let scoresArray = Array.of(score1, score2, score3);
console.log(scoresArray); // Output: [ 100, 200, 300 ]
// The of method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

//CONCLUSION: 
// Arrays are versatile and powerful data structures in JavaScript that allow you to store and manipulate collections of data efficiently. Understanding how to create, access, modify, and utilize various array methods is essential for effective JavaScript programming.