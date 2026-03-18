// Lets understand filter, map and reduce functions in JavaScript

// In for each we have a problem that we cannot return a value from the callback function and also break and continue are not supported
// In order to solve these problems we have filter, map and reduce functions

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

// Example of filter method
const easyLanguages = myCoding.filter((item) => item.difficulty === "Easy");
console.log("Easy Languages:", easyLanguages); // Output: [{ language: 'Python', difficulty: 'Easy' }]

// NOTE : for above filter method , no need of curly braces if return is not used 
// if curly braces are used then return statement is must.

// Example with return statement
const mediumLanguages = myCoding.filter((item) => {
    return item.difficulty === "Medium";
});
console.log("Medium Languages:", mediumLanguages); // Output: [{ language: 'JavaScript', difficulty: 'Medium' }]

// Example without return statement (curly braces used) - Output will be empty array
const anothereasyLanguages = myCoding.filter((item) => {item.difficulty === "Easy"});
console.log("Easy Languages:", anothereasyLanguages); // Output: [] (because nothing is returned)

// If we want to use for each for return purpose forcefully then we use condition inside it and push the values to a new array.
const hardLanguages = [];
myCoding.forEach((item) => {
    if (item.difficulty === "Hard") {
        hardLanguages.push(item);
    }
});
console.log("Hard Languages:", hardLanguages); // Output: [{ language: 'C++', difficulty: 'Hard' }]

// Complex Example of filter method
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


// Since filter works for condition purpose, map works for transformation purpose.

// Example of map method
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumss = myNumers.map( (num) => { return num + 10})
console.log(newNumss); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// Chaining map and filter methods
const newNums = myNumers
                .map((num) => num * 10 ) // transformation work
                .map( (num) => num + 1) // transformation work
                .filter( (num) => num >= 40) // condition work

console.log(newNums); // Output: [41, 51, 61, 71, 81, 91, 101]


// Reduce method (used to reduce array to a single value)

const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal1); // Output: 6

// Arrow function with reduce
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

// Complex Example of reduce method
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay); // Output: 22996