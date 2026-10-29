# React.js Developer Interview Guide — Absolute Beginner to Interview-Ready

**Target role:** React.js Developer (Fresher)  
**Location in job description:** Turbhe, Navi Mumbai  
**Preparation time:** 4–7 focused hours  
**Prepared around your resume:** React Full-Stack Blog Application (React, Redux Toolkit, Appwrite, Tailwind CSS) and MediAI (React, Node.js, Express.js, MongoDB, Firebase, Ollama/Llama)

> **Goal:** Learn the concepts needed for a fresher React interview in the shortest practical way. Each topic has a simple explanation, examples, and the key point to remember. Run the code yourself wherever possible. Reading alone will not make you interview-ready.

---

## 🔥 Interview Priority Map — Read This First

Use these labels to decide how deeply to study each section:

- **🔥 MUST MASTER** — Study carefully, understand every example, and practise writing code without copying.
- **⭐ SHOULD KNOW** — Understand the purpose and be able to explain it in 2–3 sentences.
- **👀 QUICK READ** — Read once for awareness. Do not spend scarce preparation time memorising details.

### If you have only 4–7 hours

**Do these first, in this order:**

1. **🔥 JavaScript:** variables, data types, type conversion, operators, conditions, loops, functions, arrays (`map`, `filter`, `find`), objects, destructuring, spread/rest, promises, `async/await`.
2. **🔥 React:** JSX, components, props vs state, events, list keys, `useState`, `useEffect`, dependency arrays.
3. **🔥 API integration:** `fetch`, `response.ok`, JSON, loading/error states, rendering API data.
4. **🔥 Resume project:** Blog Application — Redux Toolkit, Appwrite, authentication, protected routes, CRUD, Tailwind. Verify your own code and explain only what you actually built.
5. **⭐ Tailwind CSS:** Flexbox, Grid, spacing, responsive breakpoints.
6. **⭐ Git and debugging:** basic commands, browser console, Network tab.
7. **👀 Quick read:** deeper closures/hoisting details, advanced Redux patterns, TypeScript, and extra routing details if time remains.

> **Important:** “Most likely” does not mean guaranteed. The labels reflect this job description and common fresher React interviews—not a promise about the exact interviewer.

---

## Table of Contents

1. [How to Use This Guide](#1-how-to-use-this-guide)
2. [Set Up Your Development Environment](#2-set-up-your-development-environment)
3. [JavaScript Fundamentals](#3-javascript-fundamentals)
   - [Program, comments, and console](#31-program-comments-and-console)
   - [Variables: `let`, `const`, `var`](#32-variables-let-const-var)
   - [Data types](#33-data-types)
   - [Type conversion](#34-type-conversion)
   - [Operators](#35-operators)
   - [Conditions](#36-conditions)
   - [Loops](#37-loops)
   - [Functions](#38-functions)
   - [Scope, hoisting, and closures](#39-scope-hoisting-and-closures)
   - [Arrays and array methods](#310-arrays-and-array-methods)
   - [Objects](#311-objects)
   - [Destructuring, spread, and rest](#312-destructuring-spread-and-rest)
   - [Useful modern JavaScript syntax](#313-useful-modern-javascript-syntax)
   - [Modules: `import` and `export`](#314-modules-import-and-export)
4. [Asynchronous JavaScript and APIs](#4-asynchronous-javascript-and-apis)
5. [JavaScript Coding Questions](#5-javascript-coding-questions)
6. [React Fundamentals](#6-react-fundamentals)
7. [React Hooks](#7-react-hooks)
8. [Forms, API Handling, and CRUD](#8-forms-api-handling-and-crud)
9. [Tailwind CSS and Responsive UI](#9-tailwind-css-and-responsive-ui)
10. [Redux Toolkit Basics](#10-redux-toolkit-basics)
11. [Routing and Protected Routes](#11-routing-and-protected-routes)
12. [Git and GitHub Essentials](#12-git-and-github-essentials)
13. [Your Resume: Project Preparation](#13-your-resume-project-preparation)
14. [React and JavaScript Interview Questions](#14-react-and-javascript-interview-questions)
15. [Practical Tasks to Try Yourself](#15-practical-tasks-to-try-yourself)
16. [4-Hour and 7-Hour Study Plans](#16-4-hour-and-7-hour-study-plans)
17. [Final Interview Checklist](#17-final-interview-checklist)

---

# 1. How to Use This Guide

You are revising React, not starting a long-term course. Use the following priority order:

1. **JavaScript basics:** variables, data types, conditions, functions, arrays, objects, and asynchronous code.
2. **React basics:** components, JSX, props, state, events, and lists.
3. **React hooks:** `useState` and `useEffect` first.
4. **API integration:** GET requests, loading/error states, and rendering data.
5. **Tailwind CSS:** responsive design and common utility classes.
6. **Your projects:** especially the React Full-Stack Blog Application listed on your resume.
7. **Redux Toolkit, routing, and Git:** learn the fundamentals and explain your actual project implementation.

### The best way to study each topic

1. Read the short explanation.
2. Type the code instead of only reading it.
3. Change one part of the code and observe what happens.
4. Explain the concept aloud in two or three sentences.
5. Try answering the interview question without looking at the answer.

**Important:** Do not claim that you used a library or implemented a feature if you cannot explain it. Check your own repositories before the interview.

# 2. Set Up Your Development Environment

You need a code editor, Node.js, and a browser.

## 2.1 Check whether Node.js and npm are installed

Open a terminal in VS Code and run:

```bash
node -v
npm -v
```

If both commands display version numbers, they are available. If they are not found, install the current **LTS** version of Node.js from the official Node.js website, then reopen the terminal.

## 2.2 Create a basic React project using Vite

In the terminal, run:

```bash
npm create vite@latest react-practice -- --template react
cd react-practice
npm install
npm run dev
```

Open the local URL shown by the terminal, often `http://localhost:5173`.

- `npm create vite@latest ...` creates the project.
- `cd react-practice` enters the project folder.
- `npm install` installs dependencies.
- `npm run dev` starts the development server.

If the commands fail, read the terminal's error message carefully. Do not repeatedly run random commands.

## 2.3 Important files in a Vite React project

| File/folder | Purpose |
|---|---|
| `src/` | Your application source code |
| `src/main.jsx` | Starts React and renders the root component |
| `src/App.jsx` | Main application component in the starter project |
| `src/index.css` | Global styles; exact use depends on the setup |
| `public/` | Static assets served as-is |
| `package.json` | Project information, dependencies, and scripts |
| `node_modules/` | Installed packages; do not manually edit this folder |

---

# 3. JavaScript Fundamentals

React uses JavaScript. If the JavaScript basics are unclear, React hooks and API examples will also feel confusing.

## 3.1 Program, comments, and console

JavaScript instructions are statements or expressions. The browser can run JavaScript, and Node.js can run JavaScript outside the browser.

```js
// This is a single-line comment

/* This is a
   multi-line comment */

console.log("Hello, JavaScript!");
console.log(10 + 5);
```

**Output:**

```text
Hello, JavaScript!
15
```

`console.log()` is used to print values while learning or debugging. It is not usually how a user-facing result is displayed in a React interface.

## 3.2 Variables: `let`, `const`, `var`

> **Priority:** 🔥 MUST MASTER

A variable is a named place to hold a value.

```js
let age = 21;
age = 22; // reassignment is allowed

const name = "Maaz";
// name = "Ali"; // TypeError: cannot reassign a const binding

var city = "Thane";
```

| Keyword | Scope | Can reassign? | Recommended use |
|---|---|---|---|
| `let` | Block | Yes | A variable whose value will change |
| `const` | Block | No | Default choice when reassignment is not needed |
| `var` | Function (or global scope) | Yes | Know it for older code; normally avoid in new code |

### What does block scope mean?

A block is code inside `{}` such as an `if` block. `let` and `const` declared inside that block cannot be accessed outside it.

```js
if (true) {
  let score = 90;
  const passed = true;
  console.log(score, passed); // 90 true
}

// console.log(score); // ReferenceError
```

**Common interview trap:** `const` prevents reassignment of the variable binding, but it does not make an object deeply immutable.

```js
const user = { name: "Maaz" };
user.name = "Aman"; // Allowed
// user = {};        // Not allowed
```

**Remember:** Prefer `const`, use `let` when reassignment is needed, and avoid `var` in new code.

## 3.3 Data types

> **Priority:** 🔥 MUST MASTER

A data type describes the kind of value stored or used.

### A. Primitive data types

| Type | Example | Notes |
|---|---|---|
| String | `"Hello"` | Text |
| Number | `25`, `3.14` | Integers and decimals use the Number type in ordinary JavaScript |
| Boolean | `true`, `false` | Yes/no condition values |
| Undefined | `let x;` | Declared but not assigned a value |
| Null | `const selected = null;` | Intentionally represents no value |
| BigInt | `12345678901234567890n` | Very large integers when needed |
| Symbol | `Symbol("id")` | Unique identifiers; uncommon in a beginner React interview |

### B. Non-primitive/reference values

Objects, arrays, and functions are reference values.

```js
const product = { name: "Keyboard", price: 1200 }; // object
const colors = ["red", "blue", "green"];          // array
const greet = () => "Hello";                        // function
```

### Checking a type with `typeof`

```js
console.log(typeof "hello"); // "string"
console.log(typeof 42);       // "number"
console.log(typeof true);     // "boolean"
console.log(typeof undefined);// "undefined"
console.log(typeof {});       // "object"
console.log(typeof []);       // "object"
console.log(typeof null);     // "object" (a long-standing JavaScript quirk)
console.log(typeof (() => {}));// "function"
```

To check an array:

```js
console.log(Array.isArray([1, 2, 3])); // true
```

### String, number, and boolean examples

```js
const firstName = "Maaz";  // string
const marks = 85;           // number
const isSelected = false;   // boolean
```

### Truthy and falsy values

In an `if` condition, JavaScript converts a value to a Boolean. Common falsy values are:

- `false`
- `0` and `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

Most other values are truthy, including `"0"`, `"false"`, `[]`, and `{}`.

```js
if ("") {
  console.log("Runs");
} else {
  console.log("Empty string is falsy");
}
```

**Common mistake:** `if (someArray)` does not check whether the array has items. An empty array is truthy. Use `someArray.length > 0` when you need to check whether it contains items.

## 3.4 Type conversion

> **Priority:** 🔥 MUST MASTER

Type conversion changes a value from one type to another.

```js
const textNumber = "25";
const numberValue = Number(textNumber);
console.log(numberValue + 5); // 30

console.log(String(123));  // "123"
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
```

Input fields usually provide strings, even when the user types digits.

```js
const inputValue = "42";
const age = Number(inputValue);
```

**Avoid relying on confusing implicit conversion.** For example, `"5" + 2` produces `"52"`, while `"5" - 2` produces `3` because the operators behave differently.

## 3.5 Operators

> **Priority:** 🔥 MUST MASTER

### Arithmetic operators

| Operator | Purpose | Example/result |
|---|---|---|
| `+` | Add or concatenate strings | `2 + 3` → `5` |
| `-` | Subtract | `5 - 2` → `3` |
| `*` | Multiply | `4 * 3` → `12` |
| `/` | Divide | `8 / 2` → `4` |
| `%` | Remainder | `7 % 2` → `1` |
| `**` | Exponent | `2 ** 3` → `8` |
| `++` | Increment by one | `count++` |
| `--` | Decrement by one | `count--` |

### Comparison operators

```js
console.log(5 > 3);      // true
console.log(5 <= 5);     // true
console.log(5 === "5"); // false
console.log(5 !== "5"); // true
console.log(5 == "5");  // true: type coercion occurs
```

Prefer `===` and `!==` because they do not coerce types before comparison.

### Logical operators

- `&&` (AND): true when both sides are truthy.
- `||` (OR): returns the first truthy operand, or the last operand if none is truthy.
- `!` (NOT): converts to Boolean and reverses it.

```js
const hasAccount = true;
const isLoggedIn = true;

console.log(hasAccount && isLoggedIn); // true
console.log(false || "Guest");        // "Guest"
console.log(!isLoggedIn);              // false
```

### Assignment operators

```js
let score = 10;
score += 5; // score = score + 5; now 15
score -= 2; // now 13
score *= 2; // now 26
```

### Ternary operator

A compact alternative to a simple `if/else` expression.

```js
const age = 20;
const result = age >= 18 ? "Adult" : "Minor";
console.log(result); // "Adult"
```

Do not use nested ternaries for complicated logic; use `if/else` for readability.

## 3.6 Conditions

> **Priority:** 🔥 MUST MASTER

### `if`, `else if`, and `else`

```js
const marks = 76;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 75) {
  console.log("B grade");
} else if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

Order matters. Put more specific/high-threshold conditions before broader ones.

### `switch`

Use `switch` when comparing one value against several exact cases.

```js
const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Normal access");
    break;
  default:
    console.log("Unknown role");
}
```

`break` prevents execution from falling through to the next case.

## 3.7 Loops

> **Priority:** ⭐ SHOULD KNOW

Loops repeat work.

### `for` loop

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### `while` loop

```js
let count = 1;
while (count <= 3) {
  console.log(count);
  count++;
}
```

### `for...of`

Useful for reading values from arrays or other iterables.

```js
const names = ["Aisha", "Maaz", "Sara"];
for (const name of names) {
  console.log(name);
}
```

### `forEach()`

```js
[1, 2, 3].forEach((number) => {
  console.log(number);
});
```

`forEach()` is useful for performing an action for each item. It does not return a new array. Use `map()` when you need a transformed array.

## 3.8 Functions

> **Priority:** 🔥 MUST MASTER

A function is a reusable block of code. It can accept inputs (parameters) and return a result.

### Function declaration

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```

- `a` and `b` are parameters.
- `2` and `3` are arguments supplied at the call.
- `return` sends a result back to the caller.

### Function expression

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12
```

### Arrow function

```js
const subtract = (a, b) => a - b;
const square = (number) => number * number;

console.log(subtract(7, 2)); // 5
console.log(square(4));      // 16
```

If an arrow function has one expression and no braces, it returns that expression automatically. With `{}`, use `return` when you want to return a value.

### Default parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}`;
}

console.log(greet());       // Hello, Guest
console.log(greet("Maaz"));// Hello, Maaz
```

### Why functions matter in React

Event handlers, reusable UI logic, callbacks to array methods, and components are functions or use functions.

## 3.9 Scope, hoisting, and closures

> **Priority:** ⭐ SHOULD KNOW — know the basics; avoid spending too long on internals.

### Scope

Scope determines where a variable can be accessed.

```js
const appName = "My App"; // global/module scope

function showMessage() {
  const message = "Hello"; // function scope
  console.log(appName, message);
}

showMessage();
// console.log(message); // not accessible here
```

### Hoisting — the interview-level explanation

JavaScript processes declarations before executing code, but `var`, `let`, `const`, and function declarations behave differently.

- Function declarations can usually be called before their written position.
- A `var` declaration is hoisted and initialized to `undefined`.
- `let` and `const` exist in the scope before their declaration but cannot be accessed before initialization (the temporal dead zone).

Prefer declaring variables before using them; you rarely need to depend on hoisting.

### Closure

A closure happens when an inner function continues to access variables from its outer function.

```js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

The returned function remembers the `count` variable even after `createCounter()` has finished.

## 3.10 Arrays and array methods

> **Priority:** 🔥 MUST MASTER — especially `map`, `filter`, and `find`.

An array stores an ordered collection of values.

```js
const fruits = ["apple", "banana", "mango"];
console.log(fruits[0]);       // apple
console.log(fruits.length);  // 3
```

Array indexes start at `0`.

### Add/remove items

```js
const items = ["pen", "book"];
items.push("bag");       // add to end
items.pop();              // remove from end
items.unshift("pencil");// add to beginning
items.shift();            // remove from beginning
```

These methods modify the array. In React state, avoid modifying the existing state array directly; create a new array instead.

### Most important array methods for React

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]

const evenNumbers = numbers.filter((n) => n % 2 === 0);
// [2, 4]

const firstGreaterThanThree = numbers.find((n) => n > 3);
// 4

const total = numbers.reduce((sum, n) => sum + n, 0);
// 15

const hasEven = numbers.some((n) => n % 2 === 0);
// true

const allPositive = numbers.every((n) => n > 0);
// true
```

| Method | What it does | Returns |
|---|---|---|
| `map()` | Transforms every item | New array |
| `filter()` | Keeps items matching a condition | New array |
| `find()` | Finds the first match | Item or `undefined` |
| `reduce()` | Combines items into one result | Accumulated value |
| `some()` | Checks if at least one matches | Boolean |
| `every()` | Checks if all match | Boolean |
| `forEach()` | Performs an action per item | `undefined` |
| `includes()` | Checks whether a value exists | Boolean |

### Practical filtering example

```js
const users = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Maaz" },
  { id: 3, name: "Sara" },
];

const matchingUsers = users.filter((user) =>
  user.name.toLowerCase().includes("a")
);

console.log(matchingUsers);
```

### Sorting numbers

```js
const values = [30, 4, 100, 20];
const ascending = [...values].sort((a, b) => a - b);
console.log(ascending); // [4, 20, 30, 100]
```

`sort()` modifies its array, so `[...values]` makes a shallow copy before sorting.

## 3.11 Objects

> **Priority:** 🔥 MUST MASTER

An object stores related information as key-value pairs.

```js
const user = {
  id: 1,
  name: "Maaz",
  city: "Thane",
  isStudent: true,
};

console.log(user.name);      // Maaz
console.log(user["city"]);   // Thane
user.city = "Mumbai";       // update property
user.email = "maaz@example.com"; // add property
```

### Array of objects

This is very common when rendering API responses in React.

```js
const products = [
  { id: 1, name: "Mouse", price: 500 },
  { id: 2, name: "Keyboard", price: 1200 },
];

const affordableProducts = products.filter((product) => product.price < 1000);
```

### Check whether a property exists

```js
const user = { name: "Maaz" };
console.log("name" in user);  // true
console.log("email" in user); // false
```

## 3.12 Destructuring, spread, and rest

> **Priority:** 🔥 MUST MASTER

### Object destructuring

```js
const user = { name: "Maaz", city: "Thane" };
const { name, city } = user;
```

### Array destructuring

```js
const colors = ["red", "green", "blue"];
const [firstColor, secondColor] = colors;
```

### Spread syntax (`...`)

Spread expands values from an array or object.

```js
const first = [1, 2];
const combined = [...first, 3, 4]; // [1, 2, 3, 4]

const user = { name: "Maaz", city: "Thane" };
const updatedUser = { ...user, city: "Mumbai" };
```

It creates a **shallow copy**, not a deep copy. Nested objects may still be shared.

### Rest parameters

Rest collects remaining arguments into an array.

```js
function sumAll(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sumAll(1, 2, 3, 4)); // 10
```

Spread expands; rest collects. The same `...` syntax has different uses depending on where it appears.

## 3.13 Useful modern JavaScript syntax

> **Priority:** ⭐ SHOULD KNOW

### Template literals

Use backticks to interpolate variables and create strings across lines.

```js
const name = "Maaz";
console.log(`Hello, ${name}!`);
```

### Optional chaining (`?.`)

Safely access a nested property when an intermediate value might be `null` or `undefined`.

```js
const user = { profile: { city: "Thane" } };
console.log(user.profile?.city);   // Thane
console.log(user.contact?.email);  // undefined
```

### Nullish coalescing (`??`)

Use a fallback only when the left value is `null` or `undefined`.

```js
const userName = null;
console.log(userName ?? "Guest"); // Guest
```

This differs from `||`, which also falls back for values like `0` and `""`.

### `NaN`

`NaN` means “Not a Number,” often produced by an invalid numeric calculation. Check it with `Number.isNaN(value)`.

```js
console.log(Number("hello")); // NaN
console.log(Number.isNaN(Number("hello"))); // true
```

## 3.14 Modules: `import` and `export`

> **Priority:** ⭐ SHOULD KNOW

Modules let you split an application across files.

### Named export

```js
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

```js
// app.js
import { add, multiply } from "./math.js";
console.log(add(2, 3));
```

### Default export

```jsx
// Greeting.jsx
export default function Greeting() {
  return <h1>Hello!</h1>;
}
```

```jsx
// App.jsx
import Greeting from "./Greeting.jsx";
```

A file can have one default export and can have multiple named exports. Named imports normally use the same exported name and braces; a default import can choose its local name.

---

# 4. Asynchronous JavaScript and APIs

API integration is specifically mentioned in the job description. Understand this section carefully.

## 4.1 Synchronous vs asynchronous

- **Synchronous:** operations run in sequence; the next line waits for the previous operation to finish.
- **Asynchronous:** tasks such as network requests can complete later while JavaScript continues running other work.

```js
console.log("First");
setTimeout(() => console.log("Later"), 0);
console.log("Second");
```

Typical output:

```text
First
Second
Later
```

Even with a delay of `0`, a timer callback runs later through the event loop.

## 4.2 Promises

A Promise represents the eventual result of an asynchronous operation. Its states are pending, fulfilled, or rejected.

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error("Request failed");
    return response.json();
  })
  .then((users) => console.log(users))
  .catch((error) => console.error(error));
```

- `.then()` handles a fulfilled result.
- `.catch()` handles a rejected Promise or an error thrown in the chain.
- `response.json()` returns a Promise too.

## 4.3 `async` and `await`

`async/await` provides a readable way to work with Promises.

```js
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Could not load users:", error);
    throw error;
  }
}
```

- An `async` function always returns a Promise.
- `await` waits for a Promise result inside an `async` function.
- `try/catch` is commonly used to handle errors.

## 4.4 What is an API?

An API is a defined way for software systems to communicate. A frontend may request information from a backend, which can read or write data and send a response.

**Typical flow:** React UI → HTTP request → backend/API → database or service → HTTP response → React updates the UI.

## 4.5 HTTP methods

| Method | Common use | Example |
|---|---|---|
| GET | Read data | Get all users |
| POST | Create data | Add a new user |
| PUT | Replace/update a resource | Replace a user record |
| PATCH | Partially update data | Change only a user's name |
| DELETE | Remove data | Delete a user |

## 4.6 Common HTTP status codes

| Status | Meaning |
|---|---|
| `200 OK` | Request succeeded |
| `201 Created` | New resource created |
| `204 No Content` | Request succeeded with no response body expected |
| `400 Bad Request` | Request data is invalid or malformed |
| `401 Unauthorized` | Authentication is missing or invalid |
| `403 Forbidden` | Caller is not permitted to access the resource |
| `404 Not Found` | Resource was not found |
| `500 Internal Server Error` | Server encountered an error |

## 4.7 `fetch()` vs Axios

- `fetch()` is built into modern browsers; no extra package is needed for basic requests.
- Axios is a separate HTTP client library with convenient features such as interceptors and automatic JSON handling for common responses.
- `fetch()` generally does **not** reject just because the server returns `404` or `500`; check `response.ok`.
- Both can send HTTP requests and be used in React applications.

## 4.8 JSON

JSON (JavaScript Object Notation) is a text format commonly used for data exchange.

```js
const user = { name: "Maaz", age: 21 };
const jsonText = JSON.stringify(user); // object -> JSON text
const parsedUser = JSON.parse(jsonText); // JSON text -> object
```

An API often sends JSON. With `fetch()`, `await response.json()` parses a JSON response body.

## 4.9 CORS and common API errors

**CORS** is a browser security mechanism that controls whether a page from one origin can read a response from another origin. If an API call fails, inspect the browser's Console and Network tabs; a CORS error normally needs the server to allow the frontend origin. Do not try to “fix” it by disabling browser security.

Common reasons an API request fails:
- Incorrect endpoint URL.
- Internet/server issue.
- Missing or invalid authorization.
- HTTP error response.
- Unexpected response format.
- CORS configuration.
- Code tries to render data before it has loaded.

---

# 5. JavaScript Coding Questions

Try each first, then compare with the solution.

## 5.1 Reverse a string

```js
function reverseString(text) {
  return text.split("").reverse().join("");
}

console.log(reverseString("react")); // "tcaer"
```

## 5.2 Check whether a number is even

```js
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(8)); // true
```

## 5.3 Find the largest number in an array

```js
function findLargest(numbers) {
  if (numbers.length === 0) return undefined;
  return Math.max(...numbers);
}

console.log(findLargest([3, 10, 2, 8])); // 10
```

## 5.4 Sum an array

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 10
```

## 5.5 Remove duplicate primitive values

```js
const values = [1, 2, 2, 3, 4, 4];
const uniqueValues = [...new Set(values)];
console.log(uniqueValues); // [1, 2, 3, 4]
```

## 5.6 Count occurrences of values

```js
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];

const counts = fruits.reduce((result, fruit) => {
  result[fruit] = (result[fruit] || 0) + 1;
  return result;
}, {});

console.log(counts);
// { apple: 3, banana: 2, mango: 1 }
```

## 5.7 Filter products by price

```js
const products = [
  { id: 1, name: "Mouse", price: 500 },
  { id: 2, name: "Monitor", price: 9000 },
  { id: 3, name: "Keyboard", price: 1200 },
];

const affordable = products.filter((product) => product.price < 2000);
console.log(affordable);
```

## 5.8 Search users by name

```js
const users = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Maaz" },
  { id: 3, name: "Sara" },
];

const query = "ma";
const results = users.filter((user) =>
  user.name.toLowerCase().includes(query.toLowerCase())
);
```

## 5.9 Find the first matching item

```js
const users = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Maaz" },
];

const user = users.find((item) => item.id === 2);
console.log(user); // { id: 2, name: "Maaz" }
```

## 5.10 Coding practice without solutions

Try these without looking anything up:

1. Check if a string is a palindrome, such as `level`.
2. Find the sum of only the even numbers in an array.
3. Convert an array of names to uppercase using `map()`.
4. Find all products costing more than ₹1,000.
5. Count how many characters are in a string.
6. Sort an array of numbers in ascending order without changing the original array.
7. Create a function that returns a greeting, using a default parameter.

---

# 6. React Fundamentals

## 6.1 What is React?

React is a JavaScript library for creating user interfaces from reusable components. A component describes what UI should appear for its current props and state.

**Interview answer:** “React is a JavaScript library for building component-based user interfaces. It uses a declarative approach, so we describe the UI for the current data and React updates the interface when that data changes.”

## 6.2 What is a component?

A component is a reusable piece of UI. In modern React, function components are common.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

Rules to remember:
- Component names start with a capital letter.
- A component returns React elements, often written using JSX.
- Build small components when they have a clear purpose.

## 6.3 What is JSX?

JSX is a syntax that looks similar to HTML but is written inside JavaScript and transformed into JavaScript instructions that React can use.

```jsx
const name = "Maaz";

function Greeting() {
  return <h1>Hello, {name}!</h1>;
}
```

Important JSX rules:
- Use `className`, not `class`.
- Use `{}` to place JavaScript expressions inside JSX.
- Close tags such as `<img />` and `<input />`.
- Return one parent element, or use a Fragment: `<>...</>`.
- Use `onClick`, not `onclick`.

## 6.4 Render a component inside another component

```jsx
function Header() {
  return <header><h1>My App</h1></header>;
}

function App() {
  return (
    <main>
      <Header />
      <p>Welcome.</p>
    </main>
  );
}

export default App;
```

`<Header />` is a component instance used inside `App`.

## 6.5 Props

Props are inputs passed from a parent component to a child component.

```jsx
function Greeting({ name, city }) {
  return <p>Hello {name} from {city}!</p>;
}

function App() {
  return <Greeting name="Maaz" city="Thane" />;
}
```

Here, `name` and `city` are props. The receiving child should treat props as read-only.

### `children` prop

Content placed between a component's opening and closing tags is available through `children`.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}

function App() {
  return <Card><h2>User details</h2><p>Profile information</p></Card>;
}
```

## 6.6 Props vs state

| Props | State |
|---|---|
| Inputs passed into a component | Data managed by a component or state store |
| The child should not modify props directly | Updated through a setter or store mechanism |
| Used to configure a component | Used for data that changes over time |
| Changes from a parent can trigger a re-render | Updating state can trigger a re-render |

## 6.7 State and `useState`

State is data that a component needs to remember between renders. `useState` returns the current state value and a setter function.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount((previous) => previous + 1)}>
        Increase
      </button>
      <button onClick={() => setCount((previous) => previous - 1)}>
        Decrease
      </button>
    </section>
  );
}
```

### Why not use `count = count + 1`?

React state is not an ordinary local variable. Directly assigning to it does not tell React to update the UI. Use the setter function.

### Functional state update

When the next value depends on the previous value, use an updater function:

```jsx
setCount((previous) => previous + 1);
```

This is safer than relying on a possibly older value captured by the current render.

## 6.8 Event handling

```jsx
function SaveButton() {
  function handleSave() {
    console.log("Save clicked");
  }

  return <button onClick={handleSave}>Save</button>;
}
```

Correct: `onClick={handleSave}` passes the function for React to call when clicked.  
Usually incorrect for a click handler: `onClick={handleSave()}` calls it immediately while rendering.

For event data, React passes an event object to the handler:

```jsx
function SearchBox() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
```

## 6.9 Conditional rendering

```jsx
function LoginMessage({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }

  return <p>Please sign in.</p>;
}
```

You can also use a ternary:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```

And `&&` for a simple condition:

```jsx
{hasError && <p role="alert">Something went wrong.</p>}
```

Be careful when using `count && <Component />`: if `count` is `0`, React may render the number `0`. Use `count > 0 && ...` if that is your intent.

## 6.10 Rendering arrays and keys

```jsx
const users = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Maaz" },
  { id: 3, name: "Sara" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

A **key** helps React identify which list item changed, was added, or was removed.

- Use stable unique IDs from data when available.
- Do not use random keys that change every render.
- Avoid array indexes as keys when items may be inserted, removed, or reordered.

## 6.11 What is the Virtual DOM?

React works with a representation of the UI and determines which changes need to be applied to the actual DOM. This helps React manage UI updates declaratively.

**Interview answer:** “The Virtual DOM is a representation of the UI that React uses while calculating updates. React compares the rendered result and applies the required changes to the real DOM. It does not mean every React operation is automatically faster than any direct DOM operation.”

## 6.12 Why does a component re-render?

Common reasons include:
- Its state changes.
- Its parent re-renders.
- A context value it consumes changes.
- A subscribed external store changes.

A re-render means React runs the component's render logic again. It does not automatically mean the entire real DOM is rebuilt.

## 6.13 Component composition and reusable UI

Instead of writing the same markup repeatedly, create a reusable component and pass values as props.

```jsx
function ProductCard({ product }) {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>₹{product.price}</p>
    </article>
  );
}
```

Composition means building a larger interface by combining smaller components. Keep components focused and easy to understand.

---

# 7. React Hooks

Hooks are functions that let function components use React features. The two most important for this interview are `useState` and `useEffect`.

## 7.1 Rules of Hooks

1. Call hooks at the top level of a React function component or a custom hook.
2. Do not call hooks inside `if` blocks, loops, or nested functions.
3. Custom hook names begin with `use`, such as `useUsers`.

## 7.2 `useState`

Already covered above. Remember that it stores a value between renders and its setter requests an update.

## 7.3 `useEffect`

`useEffect` is used to synchronize a component with something outside React, such as a network request, subscription, browser API, or timer.

```jsx
import { useEffect, useState } from "react";

function PageTitle() {
  const [title, setTitle] = useState("React Practice");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <button onClick={() => setTitle("Title Updated")}>Change title</button>;
}
```

### Dependency array

| Form | Typical behavior |
|---|---|
| `useEffect(() => { ... })` | Runs after every committed render |
| `useEffect(() => { ... }, [])` | Runs after initial mount; development Strict Mode can run an extra setup/cleanup cycle |
| `useEffect(() => { ... }, [value])` | Runs after initial mount and when `value` changes |

Effects should include the reactive values they use. Do not add an empty dependency array automatically just to stop repeated requests; understand which values the Effect depends on.

### Cleanup function

Some effects create a resource that must be cleaned up, such as a timer or subscription.

```jsx
useEffect(() => {
  const timerId = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => clearInterval(timerId);
}, []);
```

The cleanup runs before the Effect is set up again when dependencies change and when the component unmounts. Development Strict Mode may test setup and cleanup again to help reveal bugs.

### Common `useEffect` mistakes

- Forgetting dependencies, causing stale values or lint warnings.
- Updating state in a way that repeatedly triggers the same Effect.
- Using an Effect for a simple value that can be calculated during render.
- Forgetting to clear a timer or cancel an unneeded request.

## 7.4 `useContext` and Context API

Context can share values such as theme, language, or authenticated-user information across components without passing props through each intermediate level.

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

function ThemeLabel() {
  const theme = useContext(ThemeContext);
  return <p>Current theme: {theme}</p>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemeLabel />
    </ThemeContext.Provider>
  );
}
```

Context is not automatically a replacement for every state-management library. Use it for suitable shared values and avoid needlessly making large parts of the UI re-render.

## 7.5 Other hooks: know the purpose

| Hook | Purpose | Interview priority |
|---|---|---|
| `useState` | Local component state | Must know |
| `useEffect` | Synchronize with external systems | Must know |
| `useContext` | Read Context | High |
| `useRef` | Hold a value between renders without triggering a render when changed; also access DOM elements | Medium |
| `useMemo` | Cache a calculated value between renders when appropriate | Low for this short prep |
| `useCallback` | Cache a function reference between renders when appropriate | Low for this short prep |

Do not add `useMemo` or `useCallback` everywhere. They are optimization tools, not requirements for every component.

---

# 8. Forms, API Handling, and CRUD

## 8.1 Controlled inputs

A controlled input takes its displayed value from React state. The `onChange` handler updates that state.

```jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted name:", name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

- `value={name}` connects the input to state.
- `onChange` updates the state as the user types.
- `event.preventDefault()` stops the browser's default form submission navigation.

## 8.2 API list with loading and error states

This is one of the highest-value practical examples for the advertised role.

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Could not load users");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> — {user.email}
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

### Explain this code in an interview

1. `useState` holds the users, loading status, and error message.
2. `useEffect` starts the fetch when the component mounts.
3. `fetch()` sends the GET request.
4. `response.ok` checks for an HTTP success status.
5. `response.json()` parses the response body.
6. `setUsers(data)` stores the result; React then renders the list.
7. Loading, error, and empty states give feedback for different outcomes.
8. `AbortController` allows the request to be cancelled during cleanup.

`JSONPlaceholder` is a demo API for practice. Its write operations are not a real persistent backend for your application.

## 8.3 Search/filter in React

Keep the full list in state and calculate the visible list from the current search query.

```jsx
const [query, setQuery] = useState("");

const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(query.toLowerCase())
);
```

```jsx
<input
  value={query}
  onChange={(event) => setQuery(event.target.value)}
  placeholder="Search users"
/>

<ul>
  {filteredUsers.map((user) => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>
```

If `users` is already in state, `filteredUsers` can normally be calculated during render. You do not need another Effect just to keep a filtered list in sync.

## 8.4 CRUD: Create, Read, Update, Delete

| Operation | Example UI | Common HTTP method |
|---|---|---|
| Create | Add a blog post | POST |
| Read | Display blog posts | GET |
| Update | Edit a post | PUT or PATCH |
| Delete | Remove a post | DELETE |

For an interview, be ready to explain how your frontend sends the request, receives a response, handles errors, and updates the displayed data. The backend must also validate permissions and data; hiding a button in the UI is not a security boundary.

## 8.5 Loading, error, success, and empty states

A usable data-driven interface should not show a blank screen while waiting for a request.

- **Loading:** “Loading users…” or a skeleton.
- **Error:** explain that the request failed and optionally provide a retry action.
- **Success:** display the data.
- **Empty:** explain that no records were found.

These states are often discussed in practical frontend interviews.

---

# 9. Tailwind CSS and Responsive UI

The vacancy specifically mentions React and Tailwind CSS.

## 9.1 What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework. Instead of writing a separate CSS class for every small styling rule, you combine utility classes in your markup.

```jsx
function ProfileCard() {
  return (
    <div className="mx-auto max-w-sm rounded-xl border border-gray-200 p-4 shadow-sm">
      <h2 className="text-xl font-semibold">User Profile</h2>
      <p className="mt-2 text-gray-600">Frontend Developer</p>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
}
```

## 9.2 Common utility classes

| Class | Meaning |
|---|---|
| `flex` | Use Flexbox |
| `grid` | Use CSS Grid |
| `items-center` | Align items on the cross axis |
| `justify-center` | Center items along the main axis |
| `justify-between` | Put space between items |
| `gap-4` | Gap between children |
| `p-4` | Padding |
| `px-4` | Horizontal padding |
| `py-2` | Vertical padding |
| `mt-4` | Top margin |
| `w-full` | Full available width |
| `max-w-xl` | Limit maximum width to a predefined size |
| `rounded-lg` | Rounded corners |
| `shadow-sm` | Small shadow |
| `text-lg` | Larger text size |
| `font-semibold` | Semibold text |
| `bg-blue-600` | Background color |
| `hover:bg-blue-700` | Change background on hover |
| `hidden` | Hide element |
| `block` | Display as block |

Utility names and available values can vary slightly by Tailwind version and configuration.

## 9.3 Flexbox example

```jsx
<div className="flex items-center justify-between gap-4">
  <h2 className="font-semibold">Users</h2>
  <button className="rounded bg-blue-600 px-3 py-2 text-white">Add User</button>
</div>
```

`flex` places items in a flex layout, `items-center` aligns them, `justify-between` distributes them, and `gap-4` adds space between children.

## 9.4 Grid example

```jsx
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <article className="rounded border p-4">Card 1</article>
  <article className="rounded border p-4">Card 2</article>
  <article className="rounded border p-4">Card 3</article>
</div>
```

This layout has one column by default, two columns at the small breakpoint and above, and three columns at the large breakpoint and above.

## 9.5 Responsive/mobile-first design

Tailwind responsive prefixes normally apply from the named breakpoint **upward**:

- `sm:` applies at the small breakpoint and above.
- `md:` applies at the medium breakpoint and above.
- `lg:` applies at the large breakpoint and above.

Example:

```jsx
<div className="p-3 md:p-6 lg:p-8">
  Responsive spacing
</div>
```

The default spacing is `p-3`; it becomes `p-6` on medium screens and `p-8` on large screens.

## 9.6 Responsive design checklist

- Test narrow mobile widths, tablets, and desktop.
- Avoid fixed widths that cause horizontal overflow.
- Use Flexbox or Grid where appropriate.
- Ensure text remains readable and buttons are easy to tap.
- Add labels to inputs and use semantic elements.
- Check keyboard navigation and visible focus styles.
- Verify empty, error, and loading states do not break the layout.

---

# 10. Redux Toolkit Basics

Your resume lists Redux Toolkit in the React Full-Stack Blog Application. You should be able to explain why it was used and how data moves through it.

## 10.1 Why do we need state management?

When several components need the same state, passing props through many levels can become difficult. A shared store can provide a central place to read and update application state.

Do not use Redux for every small input. Local component state is usually enough when data is only needed in one component.

## 10.2 Important Redux terms

| Term | Meaning |
|---|---|
| Store | Holds the application state |
| Slice | Groups a feature's state, reducers, and generated actions |
| Action | Describes an event or requested state change |
| Reducer | Defines how state changes in response to an action |
| `dispatch()` | Sends an action to the store |
| `useSelector()` | Reads part of the Redux state in a component |
| `useDispatch()` | Gets the dispatch function in a component |
| Provider | Makes the Redux store available to React components |

## 10.3 Simple slice example

```js
// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
```

Redux Toolkit uses Immer internally, so the mutation-like syntax shown in a reducer produces an immutable state update. **This does not mean you should directly mutate ordinary React state.**

## 10.4 Store setup

```js
// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

## 10.5 Provide the store to React

```jsx
// main.jsx (simplified)
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

## 10.6 Read and update state in a component

```jsx
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}
```

### How to explain the data flow

1. A user clicks a button.
2. The component dispatches an action.
3. The matching reducer calculates the next state.
4. The store holds the updated state.
5. Components using the changed state can re-render.

**Interview answer:** “Redux Toolkit helps organize shared application state using a store and feature slices. In React, `useSelector` reads the needed state and `useDispatch` sends actions. It is useful when state needs to be shared across multiple components.”

---

# 11. Routing and Protected Routes

Your resume says the Blog Application includes protected routes. Be ready to explain your implementation.

## 11.1 What is client-side routing?

Routing selects which UI should be shown for a URL, such as `/login`, `/posts`, or `/posts/12`, without requiring a full page load for every navigation in a single-page application.

React projects often use React Router for this purpose.

## 11.2 Typical routing concepts

- **Route:** associates a URL path with a UI element.
- **Link/NavLink:** lets users navigate to a route.
- **Route parameter:** a dynamic part of a URL, such as `/posts/:id`.
- **Nested route:** a route rendered inside a parent layout.
- **Protected route:** a UI route that checks whether the user appears to be authenticated before showing protected content.

Illustrative pattern (exact API may depend on the router version and project setup):

```jsx
// Conceptual example — adapt to the React Router version in your project.
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <p>Please log in to continue.</p>;
  }

  return children;
}
```

For real navigation, the unauthenticated branch commonly redirects to the login page using the router's redirect/navigation facilities.

**Security note:** a protected frontend route is not sufficient to secure data. The backend or service must also verify authentication and authorization for private operations.

## 11.3 Authentication vs authorization

- **Authentication:** verifies who the user is.
- **Authorization:** determines what an authenticated user is allowed to do.

Example: logging in establishes identity; checking whether that user may edit a particular blog post is authorization.

---

# 12. Git and GitHub Essentials

Git is listed as an advantage in the job description and on your resume.

## 12.1 Common commands

```bash
git status
git add .
git commit -m "Add user list"
git push
```

| Command | Purpose |
|---|---|
| `git status` | See changed/untracked files |
| `git add .` | Stage changes in the current directory tree |
| `git commit -m "message"` | Save a commit locally |
| `git push` | Upload local commits to a remote repository |
| `git pull` | Fetch and integrate remote changes |
| `git clone <url>` | Copy a remote repository locally |
| `git log --oneline` | View a compact commit history |
| `git diff` | Inspect unstaged changes |

Before committing, inspect `git status` and make sure secrets and `.env` files are not included. Never commit API keys or passwords. If a secret has already been pushed, removing it from the latest file alone is not enough; rotate/revoke the secret as appropriate.

## 12.2 What is a branch?

A branch lets you develop a change separately from another line of work. Teams commonly use branches for features and bug fixes before merging them into a shared branch.

## 12.3 What is a merge conflict?

A merge conflict occurs when Git cannot automatically combine conflicting changes. Inspect the conflict markers, choose the correct final code, remove the markers, test the result, then stage and commit the resolution.

---

# 13. Your Resume: Project Preparation

Your submitted resume lists a React Full-Stack Blog Application and MediAI. The descriptions below are based on those resume entries. The resume does not show the detailed code, component structure, or exact implementation, so verify those details in your repository before the interview.

## 13.1 First priority: React Full-Stack Blog Application

**Technologies on the resume:** React, Redux Toolkit, Appwrite, Tailwind CSS.

**Features listed on the resume:**
- Authentication and protected routes.
- CRUD operations.
- Appwrite authentication, database, and storage.
- Responsive Tailwind CSS interface.
- TinyMCE rich-text editing.
- Redux Toolkit for state management.

### Revise these areas in your actual code

1. **Component structure:** Which components are used for the navbar, post list, post editor, login, and post details?
2. **State:** Which values use local `useState`? Which values are in Redux?
3. **API/data service:** Where are Appwrite calls located? Which function creates, reads, updates, and deletes posts?
4. **Authentication:** How does the application know whether a user is logged in? Where does logout happen?
5. **Protected routes:** What happens when a logged-out user tries to open an editor page?
6. **Forms:** How are inputs collected and validated? What happens after submit?
7. **Editor:** How did you integrate TinyMCE and get the final content?
8. **Responsive design:** Which Tailwind classes change the layout at mobile/tablet/desktop sizes?
9. **Errors:** How are failed requests or invalid forms shown to the user?
10. **Contribution:** What code did you personally write, debug, or adapt?

### Project questions and answer structures

**Q. Explain your Blog Application.**  
Answer structure: “I developed a full-stack blog application using React for the interface, Appwrite for the backend services, Redux Toolkit for shared state, and Tailwind CSS for responsive styling. It supports [state the features you personally verified]. My main contribution was [specific real work].”

**Q. Why did you use Redux Toolkit?**  
Possible answer if accurate: “I used it to manage state that needed to be accessed across multiple components. Slices group a feature's state and reducers, while `useSelector` reads state and `useDispatch` dispatches actions.”

**Q. Why use Appwrite?**  
Possible answer if accurate: “Appwrite provided backend services used by the application, including authentication and database/storage capabilities. This allowed the React frontend to call those services rather than implementing every backend feature from scratch.”

**Q. What are protected routes?**  
Possible answer: “They check whether the user is authenticated before rendering a protected page, and typically redirect an unauthenticated user to the login page. The server or backend still needs its own authorization checks.”

**Q. What is CRUD?**  
“CRUD stands for Create, Read, Update, and Delete. In a blog app, these correspond to creating a post, viewing posts, editing a post, and deleting a post.”

**Q. What was your biggest challenge?**  
Choose a real issue you actually encountered. Explain the symptom, how you investigated it, the root cause, the change you made, and how you verified the fix. Do not memorise an invented story.

## 13.2 Second priority: MediAI

**Technologies on the resume:** React, Node.js, Express.js, MongoDB, Firebase, Ollama/Llama.

The resume describes an AI-powered healthcare platform with AI-assisted features and a responsive interface.

Be prepared to explain, based on your real implementation:
- What problem the platform was intended to address.
- What the React frontend displayed and which forms/components you built.
- How requests moved between React and the Node/Express backend.
- What data was stored in MongoDB and/or Firebase.
- How the application called the AI model through Ollama.
- What happened when the model/API was unavailable or returned an error.
- What precautions were taken with health-related output and user data.

Do not present generated health information as a confirmed medical diagnosis. Explain the platform's actual limits if asked.

## 13.3 Bank Management System

This project is less directly related to React, but it appears on your resume. Be ready to explain:
- Java Swing for the UI.
- JDBC for connecting Java code to MySQL.
- The account operations implemented.
- How classes and database operations were organised.

If the interviewer is focused on React, keep the explanation brief and return to your React project.

## 13.4 Your self-introduction

Adapt this only if each statement reflects your real experience:

> “Hello, I am Maaz Khan, a final-year Electronics and Computer Science Engineering student. I have worked with JavaScript, React.js, Tailwind CSS, Node.js, Express.js, and databases. One of my relevant projects is a React Full-Stack Blog Application using Redux Toolkit, Appwrite, and Tailwind CSS for features such as authentication and blog CRUD operations. I have also worked on MediAI, a full-stack project with React and Node.js and AI integration. I am looking for an opportunity to strengthen my frontend development skills, contribute to real projects, and learn from the development team.”

If asked about a concept you have forgotten, do not pretend to be an expert. A credible answer is: “I have worked with it before and I am revising the fundamentals. My current understanding is ____. I would confirm the exact API or implementation in the documentation and test it.”

---

# 14. React and JavaScript Interview Questions

Answer these aloud in your own words. Most answers should take 20–45 seconds.

## React basics

### 1. What is React?

A JavaScript library for building component-based user interfaces. It lets developers describe UI based on props and state.

### 2. What is a component?

A reusable piece of UI. A function component receives props and returns React elements, commonly written in JSX.

### 3. What is JSX?

A syntax that allows HTML-like markup inside JavaScript; build tools transform it into code React can use.

### 4. What are props?

Inputs passed from a parent component to a child. The child should treat them as read-only.

### 5. What is state?

Data managed by a component or store that can change and affect what the UI displays.

### 6. Props vs state?

Props are passed in; state is managed by the component or state store. Both can influence rendering, but a component should not directly modify its props.

### 7. What is `useState`?

A hook that lets a function component keep state between renders and provides a setter to request updates.

### 8. What is `useEffect`?

A hook for synchronizing a component with external systems such as fetching data, subscriptions, timers, or browser APIs.

### 9. What is the dependency array?

It tells React which reactive values an Effect depends on. The Effect runs after mount and again when its dependencies change. An omitted array means it runs after every committed render.

### 10. Why are keys needed?

Keys help React identify list items across renders. Stable unique IDs are preferred.

### 11. What is conditional rendering?

Displaying different UI based on a condition, using normal JavaScript such as `if`, ternary, or `&&`.

### 12. What is prop drilling?

Passing data through multiple intermediate components that do not need the data. Context or another state-management approach can reduce this when it becomes hard to manage.

### 13. What is Context API?

A React feature for sharing a value with components in a subtree without manually passing it as props at every level.

### 14. What is a controlled input?

An input whose displayed value is driven by React state, with changes handled through an event handler.

### 15. What is the Virtual DOM?

A representation React uses to work out necessary UI updates. Avoid claiming it makes every possible UI operation faster.

### 16. What is lifting state up?

Moving state to the closest common parent when multiple child components need to share it.

## JavaScript

### 17. `let` vs `const` vs `var`?

`let` and `const` are block-scoped; `let` can be reassigned and `const` cannot. `var` is function-scoped and is generally avoided in new code.

### 18. `==` vs `===`?

`==` performs type coercion in many cases; `===` compares without type coercion. Prefer strict equality.

### 19. `map()` vs `forEach()`?

`map()` creates a new array from callback results. `forEach()` performs an action per item and returns `undefined`.

### 20. `filter()` vs `find()`?

`filter()` returns all matching items in an array. `find()` returns the first matching item or `undefined`.

### 21. What is destructuring?

A syntax for extracting values from arrays or properties from objects into variables.

### 22. What is a Promise?

An object representing the eventual fulfillment or rejection of an asynchronous operation.

### 23. What are `async` and `await`?

They provide a readable syntax for working with Promises. An `async` function returns a Promise, and `await` waits for a Promise's result inside that function.

### 24. What is a closure?

A function retaining access to variables from its lexical environment even after the outer function has completed.

## API, CSS, tools

### 25. What is a REST API?

A web interface that allows a client and server to exchange resources through HTTP requests and responses.

### 26. What is the difference between GET and POST?

GET is commonly used to retrieve data; POST is commonly used to submit data or create a resource.

### 27. Why check `response.ok` with `fetch()`?

Because `fetch()` does not generally reject just because an HTTP response has a status such as 404 or 500. The code must check the status and handle unsuccessful responses.

### 28. What is Tailwind CSS?

A utility-first CSS framework where styling is composed using classes such as `flex`, `p-4`, and `md:grid-cols-2`.

### 29. What is responsive design?

Designing the interface to remain usable across viewport sizes, with flexible layouts, appropriate breakpoints, readable content, and usable controls.

### 30. What is Redux Toolkit?

The recommended Redux approach that simplifies store setup and slice/reducer creation. React components can read values with `useSelector` and dispatch actions with `useDispatch`.

### 31. What is Git?

A version-control system that records changes and supports collaboration through commits, branches, and merges.

### 32. What is TypeScript?

A programming language built on JavaScript that adds static type checking. It helps identify many type errors during development.

---

# 15. Practical Tasks to Try Yourself

Do not just read these tasks. Open your React project and try to implement them.

## Task 1 — Counter

- Show a count starting at `0`.
- Add Increase and Decrease buttons.
- Use `useState`.
- Update based on the previous state.

## Task 2 — User list

- Fetch users from `https://jsonplaceholder.typicode.com/users`.
- Show names and email addresses.
- Add `key={user.id}`.
- Add loading, error, and empty states.

## Task 3 — Search box

- Add a controlled input.
- Filter users by name regardless of uppercase/lowercase.
- Show “No users found” if there are no matches.

## Task 4 — Reusable card

- Create a `UserCard` component.
- Pass `name`, `email`, and `city` as props.
- Render multiple cards from an array.
- Use Tailwind classes for spacing and responsive layout.

## Task 5 — Form

- Build a form with name and email.
- Store values in state.
- Stop the default browser submission with `preventDefault()`.
- Check that required fields are not blank.
- Display a success message after valid submission.

## Task 6 — Explain your Blog Application

Without opening the source code, explain its architecture in 60–90 seconds. Then open the repository to verify component names, state management, authentication, CRUD functions, and data-service calls. The answer should match the code, not memory alone.

---

# 16. Four-Hour and Seven-Hour Study Plans

## If you have only 4 hours

| Time | What to do | What not to skip |
|---|---|---|
| 0:00–0:50 | JavaScript | Variables, data types, functions, `map`, `filter`, objects, `async/await` |
| 0:50–1:40 | React basics | JSX, components, props, state, events, lists and keys |
| 1:40–2:20 | Hooks | `useState`, `useEffect`, dependency array |
| 2:20–3:00 | API integration | Fetch, JSON, loading/error states, status checks |
| 3:00–3:25 | Tailwind | Flexbox, Grid, responsive prefixes |
| 3:25–4:00 | Resume and mock interview | Blog app, Redux Toolkit basics, self-introduction |

## If you have 7 hours

| Time | What to do | Practice outcome |
|---|---|---|
| Hour 1 | JavaScript basics | Variables, data types, operators, conditions, functions |
| Hour 2 | Arrays, objects, ES6+ | Solve 4–5 small problems |
| Hour 3 | React fundamentals | Counter, props, list rendering, conditional UI |
| Hour 4 | Hooks and forms | Controlled form and `useEffect` |
| Hour 5 | API integration | Fetch users, loading/error states, search |
| Hour 6 | Tailwind + Redux + routing | Explain common classes and project architecture |
| Hour 7 | Resume + mock interview | Inspect your real project code and answer questions aloud |

### Suggested 10-minute breaks

After 50–60 minutes of focused work, take a short break if needed. If your interview is imminent, do not spend the remaining time making perfect notes or styling a project. Spend it writing code and practising explanations.

---

# 17. Final Interview Checklist

Before the interview, confirm that you can do the following without copying line-by-line from a tutorial:

- [ ] Explain variables, primitive/reference types, conditions, functions, arrays, and objects.
- [ ] Explain `map()`, `filter()`, `find()`, destructuring, and spread syntax.
- [ ] Explain Promises and `async/await`.
- [ ] Create a function component using JSX.
- [ ] Pass props from a parent to a child.
- [ ] Use `useState` to update a counter or input.
- [ ] Explain `useEffect` and its dependency array.
- [ ] Render an array with stable keys.
- [ ] Fetch data with `fetch()` and handle HTTP errors.
- [ ] Display loading, error, success, and empty states.
- [ ] Explain basic Tailwind responsive classes.
- [ ] Explain the purpose of Redux Toolkit, slices, `useSelector`, and `useDispatch`.
- [ ] Explain your Blog Application based on its actual implementation.
- [ ] Explain the real work you did on MediAI.
- [ ] Discuss one real technical problem you encountered and how you debugged it.
- [ ] Give a clear 45–60 second self-introduction.
- [ ] Check your resume repositories and do not expose secrets/API keys.

## Final advice

For this fresher vacancy, prioritize **JavaScript fundamentals, React components and hooks, REST API integration, Tailwind CSS, and explaining your own project**. You do not need to master every React ecosystem library in a few hours. You do need to explain the basics clearly and show that you can write, test, and debug simple code.

---

## Final Priority Rule

If preparation time is running out, do **not** sacrifice practical React and API coding to memorise advanced theory.

You should be able to do these five things without copying:
1. Explain `let`, `const`, common data types, functions, arrays, and objects.
2. Write a component that receives props and uses `useState`.
3. Explain `useEffect` and its dependency array.
4. Fetch API data and show loading, error, and success states.
5. Explain your Blog Application's real implementation, especially Redux Toolkit, Appwrite, authentication, CRUD, and Tailwind.

Everything else is secondary until these are solid.
