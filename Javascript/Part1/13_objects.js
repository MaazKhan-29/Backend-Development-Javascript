//Lets understand objects in javascript

//There are two types declaration of objects
//1. Object Literal Notation (called non-singleton)  2. Object Constructor Notation (called Singleton Object)

//Object Literal Notation

const uniqueKey = Symbol("id");

let person = {
    firstName: "John", //key: value pairs
    "lastName": "Doe", //keys can be strings with quotes (This string conversion happens in background)
    age: 30,
    isloggin: true,
    [uniqueKey]: "mykey", //Using Symbol as a key
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    hobbies: ["reading", "traveling", "swimming"]
};
    
console.log("Person Object: ", person);

//Accessing object properties (two ways)
console.log("First Name using dot notation: ", person.firstName); //Dot Notation
console.log("First Name using bracket notation: ", person['firstName']); //Bracket Notation

console.log("Last Name using dot notation: ", person.lastName); //Dot Notation
console.log("Last Name using bracket notation: ", person['lastName']); //Bracket Notation

//Accessing Symbol key
console.log("Unique Key using bracket notation: ", person[uniqueKey]);
//console.log("Unique Key using dot notation: ", person.uniqueKey); //This will be undefined
console.log("Type of Unique Key: ", typeof uniqueKey); //Output: symbol

//Calling method of object
console.log("Full Name using method: ", person.fullName());

//Accessing array inside object
console.log("Hobbies: ", person.hobbies);
console.log("First Hobby: ", person.hobbies[0]); //Output: reading

//Modifying object properties
person.age = 31; //Updating age
console.log("Updated Age: ", person.age);

//Adding new property
person.country = "USA";
console.log("Added Country: ", person.country);
person.greeting = function() {
    return `Hello, my name is ${this.firstName} ${this.lastName} from ${this.country}.`;
}
console.log(person.greeting()); //Calling new method

console.log("Final Person Object: ", person);

//Deleting a property
// delete person.isloggin;
// console.log("After Deleting isloggin Property: ", person);
// console.log("Is isloggin Property Present: ", person.hasOwnProperty('isloggin')); //Output: false



//Object Constructor Notation

let car = new Object(); //Creating object using Object constructor
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;
car.getCarInfo = function() {
    return `${this.year} ${this.make} ${this.model}`;
}
console.log("Car Object: ", car);
console.log("Car Make: ", car.make);
console.log("Car Info: ", car.getCarInfo());

//Modifying car object
car.year = 2021;
console.log("Updated Car Year: ", car.year);
console.log("Updated Car Info: ", car.getCarInfo());
console.log("Final Car Object: ", car);

//Nested Objects
let student = {
    name: "Alice",  
    age: 22,
    address: {
        street: "123 Main St",
        city: {
            name: "Wonderland",
            state: "Fantasy"
        },
        zip: "12345"
    },
};

console.log("Student Object: ", student);
console.log("Student City: ", student.address.city.name); //Accessing nested object property

//Adding new nested property
student.address.city.country = "Imagination";
console.log("Updated Student Object with Country: ", student);

//Combining Objects
let employee = {
    empId: 101,
    empName: "Bob",
    department: "Engineering"
};
let people = {
    peopleId: 201,
    peopleName: "Charlie",
    team: "Design"
}

const combined = {employee, people}; //Combining two objects
console.log("Combined Object: ", combined); // this is not good practice but for combining

//another way is using Object.assign() 
const combinedBetter = Object.assign({}, employee, people);
console.log("Combined Object using Object.assign(): ", combinedBetter);

//Using Spread Operator to combine objects (Most preferred way)
const combinedSpread = {...employee, ...people};
console.log("Combined Object using Spread Operator: ", combinedSpread);

//get keys and values of an object
console.log("Employee Keys: ", Object.keys(employee));
console.log("Employee Values: ", Object.values(employee));
console.log("Employee Entries: ", Object.entries(employee));

//Check if a property exists
console.log("Does empName exist in employee?: ", 'empName' in employee); //Output: true
//using hasOwnProperty
console.log("Does empId exist in employee?: ", employee.hasOwnProperty('empId')); //Output: true

//Freezing an object (making it immutable(cannot be changed))
Object.freeze(employee);
employee.empName = "Eve"; //This will not change the name
console.log("After trying to modify frozen object: ", employee); //empName will still be "Bob"

//Sealing an object (can modify existing properties but cannot add or delete properties)
Object.seal(people);
people.team = "Marketing"; //This will work
people.newProp = "New"; //This will not be added
console.log("After trying to modify sealed object: ", people); //newProp will not be present

//Destructuring Objects
const {empId, empName:newName, department} = employee;
console.log("Destructured Employee ID: ", empId);
console.log("Destructured Employee Name with new variable name: ", newName);

//Why destructuring? explain with above example
//Destructuring allows us to extract multiple properties from an object and assign them to variables in a single statement. 
//In the example above, we extracted empId, empName (renamed to newName), and department from the employee object. 
//This makes the code cleaner and more readable compared to accessing each property individually.


//Conclusion: Objects are fundamental in JavaScript and understanding how to create, access, modify, and combine them is crucial for effective programming.
