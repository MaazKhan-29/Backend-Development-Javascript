# React.js Developer Interview --- Crash Preparation Notes

**Target role:** React.js Developer (Fresher)\
**Job location:** Turbhe, Navi Mumbai\
**CTC:** Up to ₹2.5 LPA\
**Preparation window:** 4--7 hours\
**Candidate profile:** Final-year B.E. Electronics and Computer Science
Engineering student

------------------------------------------------------------------------

## 1. How to Use This Guide

You do **not** have enough time to relearn all of React. Prioritize the
skills explicitly listed in the job description and be ready to explain
the React projects already mentioned on your resume.

### Priority order

1.  JavaScript ES6+ fundamentals
2.  React components, props, state, and hooks
3.  REST API integration and loading/error states
4.  Your React Full-Stack Blog Application
5.  Tailwind CSS and responsive UI
6.  Redux Toolkit basics
7.  Git basics and common debugging questions
8.  TypeScript basics, only if time remains

**Study method:** Read a concept, explain it aloud in your own words,
then write or modify the example without copying. Do not claim
experience with a tool or feature you cannot explain.

------------------------------------------------------------------------

## 2. Four-Hour Emergency Plan

  -----------------------------------------------------------------------
  Time                    Topic                   Required outcome
  ----------------------- ----------------------- -----------------------
  0:00--0:50              JavaScript ES6+         Understand arrays,
                                                  objects, callbacks,
                                                  promises, and
                                                  `async/await`

  0:50--1:50              React basics and hooks  Explain components,
                                                  props, state,
                                                  `useState`, and
                                                  `useEffect`

  1:50--2:35              REST API practice       Fetch and render data
                                                  with loading and error
                                                  states

  2:35--3:05              Tailwind CSS            Build a responsive
                                                  layout using
                                                  Flexbox/Grid and
                                                  breakpoints

  3:05--3:40              Resume projects + Redux Explain the Blog
                                                  Application and your
                                                  actual contribution

  3:40--4:00              Rapid interview         Practise answers aloud
                          revision                
  -----------------------------------------------------------------------

## 3. Seven-Hour Plan

  -----------------------------------------------------------------------
  Time                    Topic                   Required outcome
  ----------------------- ----------------------- -----------------------
  Hour 1                  JavaScript fundamentals Revise ES6+, arrays,
                                                  objects, and functions

  Hour 2                  React fundamentals      Build a counter and a
                                                  list component

  Hour 3                  Hooks and forms         Practise `useState`,
                                                  `useEffect`, and
                                                  controlled inputs

  Hour 4                  API integration         Fetch, display, search,
                                                  and handle errors

  Hour 5                  Tailwind + responsive   Build a responsive user
                          UI                      list

  Hour 6                  Redux Toolkit + resume  Explain the Blog
                          projects                Application and MediAI
                                                  accurately

  Hour 7                  Mock interview + coding Answer common questions
                                                  and solve small tasks
  -----------------------------------------------------------------------

------------------------------------------------------------------------

# Part A --- JavaScript Essentials

## 4. `let`, `const`, and `var`

-   `let`: block-scoped; can be reassigned.
-   `const`: block-scoped; cannot be reassigned.
-   `var`: function-scoped and can cause unexpected behavior due to
    hoisting.

Prefer `const` by default. Use `let` when reassignment is required.

``` js
const name = "Maaz";
let count = 0;

count = count + 1;
console.log(name, count);
```

Important: a `const` object can still have its properties changed; the
variable binding itself cannot be reassigned.

## 5. Arrow Functions

``` js
const add = (a, b) => a + b;

const greet = (name) => {
  return `Hello, ${name}`;
};
```

Arrow functions have lexical `this` behavior, unlike regular functions.

## 6. Array Methods

``` js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
// [2, 4, 6, 8, 10]

const even = numbers.filter((n) => n % 2 === 0);
// [2, 4]

const firstLarge = numbers.find((n) => n > 3);
// 4

const total = numbers.reduce((sum, n) => sum + n, 0);
// 15
```

-   `map()` transforms each element and returns a new array.
-   `filter()` returns elements that satisfy a condition.
-   `find()` returns the first matching element, or `undefined`.
-   `reduce()` combines elements into one result.

## 7. Destructuring and Spread Syntax

``` js
const user = { name: "Aisha", city: "Mumbai" };
const { name, city } = user;

const first = [1, 2];
const second = [...first, 3, 4];

const updatedUser = { ...user, city: "Thane" };
```

Spread syntax makes a shallow copy; it does not deeply clone nested
objects.

## 8. Promises and `async/await`

A Promise represents the eventual success or failure of an asynchronous
operation.

``` js
async function loadUsers() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

`fetch()` does not automatically reject for HTTP errors such as 404;
check `response.ok`.

## 9. Common JavaScript Interview Questions

### Q1. What is the difference between `==` and `===`?

`==` performs type coercion before comparison in many cases. `===`
compares without type coercion. Prefer `===`.

### Q2. What is a callback?

A callback is a function passed to another function to be called later
or during its execution.

### Q3. What is a closure?

A closure occurs when a function retains access to variables from its
surrounding lexical scope, even after the outer function has finished.

### Q4. What is the difference between synchronous and asynchronous code?

Synchronous code runs in sequence and can block later work. Asynchronous
operations allow tasks such as network requests to complete without
blocking the main JavaScript flow.

### Q5. What is the difference between `null` and `undefined`?

`undefined` commonly means a value has not been assigned. `null` is an
intentional absence of a value.

### Q6. What is immutability, and why is it useful in React?

Immutability means creating a new array or object instead of changing
existing state directly. React can then detect state updates more
reliably.

------------------------------------------------------------------------

# Part B --- React Fundamentals

## 10. What Is React?

React is a JavaScript library for building user interfaces using
reusable components. It updates the UI when application data changes.

### Interview answer

"React is a JavaScript library used to build component-based user
interfaces. It supports reusable components, declarative UI development,
and state-driven rendering."

## 11. JSX

JSX lets developers write HTML-like syntax inside JavaScript. It is
transformed into JavaScript instructions that React can use.

``` jsx
const element = <h1>Hello, React!</h1>;
```

JSX differences to remember: - Use `className` instead of `class`. - Use
`{}` to insert JavaScript expressions. - Return one parent element, or
use a Fragment (`<>...</>`).

## 12. Components

A component is a reusable piece of UI. Function components are the
standard approach in modern React.

``` jsx
function Welcome() {
  return <h1>Welcome!</h1>;
}

export default Welcome;
```

Component names should start with a capital letter.

## 13. Props vs State

  -----------------------------------------------------------------------
  Props                               State
  ----------------------------------- -----------------------------------
  Passed from parent to child         Managed by a component or a state
                                      store

  Read-only to the receiving          Updated using the relevant state
  component                           setter or store API

  Used to configure a component       Used for data that changes over
                                      time
  -----------------------------------------------------------------------

``` jsx
function Greeting({ name }) {
  return <h2>Hello, {name}</h2>;
}

function App() {
  return <Greeting name="Maaz" />;
}
```

## 14. `useState`

`useState` stores component state and provides a setter that schedules a
re-render.

``` jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((previous) => previous + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
```

Remember: - Do not change state directly. - Use the setter function. -
When the next value depends on the previous value, use the functional
form: `setCount(previous => previous + 1)`.

## 15. Event Handling

``` jsx
function SaveButton() {
  function handleSave() {
    console.log("Saved");
  }

  return <button onClick={handleSave}>Save</button>;
}
```

Use `onClick={handleSave}`, not `onClick={handleSave()}` for a normal
click handler. The second form calls the function during rendering.

## 16. Conditional Rendering

``` jsx
function Status({ isLoggedIn }) {
  return isLoggedIn
    ? <p>Welcome back</p>
    : <p>Please log in</p>;
}
```

You can use a ternary operator, `&&`, or an early return depending on
the situation.

## 17. Rendering Lists and Keys

``` jsx
const names = ["Aisha", "Maaz", "Sara"];

function NameList() {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}
```

A key helps React identify list items between renders. Prefer a stable
unique ID from the data. Avoid array indexes as keys when items can be
inserted, deleted, or reordered.

## 18. `useEffect`

`useEffect` synchronizes a component with an external system, such as a
network request, subscription, or browser API.

``` jsx
import { useEffect, useState } from "react";

function Example() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    document.title = "React Interview Practice";
    setMessage("Ready");
  }, []);

  return <p>{message}</p>;
}
```

Dependency array: - No dependency array: the Effect runs after every
committed render. - `[]`: the Effect runs after the initial mount;
development Strict Mode can run an extra setup/cleanup cycle. -
`[value]`: the Effect re-runs when `value` changes.

Do not use `useEffect` for every calculation. Values that can be
calculated from existing props/state usually do not need an Effect.

## 19. Controlled Forms

A controlled input gets its displayed value from React state.

``` jsx
import { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Submitted: ${name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## 20. Virtual DOM

### Interview answer

"The Virtual DOM is a representation of the UI that React uses to
determine what needs to change. React compares render results and
applies necessary updates to the actual DOM. It is not accurate to claim
that every React update is automatically faster than every direct DOM
update."

## 21. Context API

Context allows data to be shared with components without passing props
through every intermediate component. It can be useful for themes,
language settings, or authentication state. It is not automatically the
best choice for every state-management problem.

------------------------------------------------------------------------

# Part C --- REST API Integration

## 22. API Integration Example

This example demonstrates fetching data, loading state, error handling,
and rendering a list.

``` jsx
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
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
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

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} — {user.email}
        </li>
      ))}
    </ul>
  );
}

export default Users;
```

### Explain the flow in an interview

1.  `useState` stores users, loading status, and error information.
2.  `useEffect` starts the request after the component mounts.
3.  `fetch()` sends the HTTP request.
4.  `response.ok` checks whether the HTTP response succeeded.
5.  `response.json()` parses the response body.
6.  `setUsers()` updates state and React renders the list.
7.  Loading and error states give the user feedback.
8.  `AbortController` cancels the request during cleanup.

## 23. What Is a REST API?

A REST API lets a client and server exchange data through HTTP requests.

  Method   Common purpose
  -------- -----------------------------
  GET      Retrieve data
  POST     Create a resource
  PUT      Replace/update a resource
  PATCH    Partially update a resource
  DELETE   Delete a resource

Typical status codes: - `200 OK`: request succeeded. - `201 Created`:
resource created. - `400 Bad Request`: invalid request. -
`401 Unauthorized`: authentication is required or invalid. -
`403 Forbidden`: access is not permitted. - `404 Not Found`: resource
not found. - `500 Internal Server Error`: server-side failure.

## 24. `fetch()` vs Axios

-   `fetch()` is built into modern browsers.
-   Axios is an HTTP client library with conveniences such as automatic
    JSON handling for common responses and request/response
    interceptors.
-   With `fetch()`, check `response.ok`; HTTP error status codes do not
    automatically throw.
-   Both can be used to integrate a React UI with a backend.

------------------------------------------------------------------------

# Part D --- Tailwind CSS and Responsive UI

## 25. Tailwind CSS Basics

Tailwind CSS uses utility classes to style elements directly in markup.

``` jsx
function ProfileCard() {
  return (
    <div className="mx-auto max-w-sm rounded-xl border p-4 shadow-sm">
      <h2 className="text-xl font-semibold">User Profile</h2>
      <p className="mt-2 text-gray-600">Frontend Developer</p>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        View Profile
      </button>
    </div>
  );
}
```

Useful utilities:

  -----------------------------------------------------------------------
  Class                               Purpose
  ----------------------------------- -----------------------------------
  `flex`                              Flexbox layout

  `grid`                              Grid layout

  `items-center`                      Align items on the cross axis

  `justify-between`                   Distribute items with space between

  `gap-4`                             Add spacing between children

  `p-4`                               Padding

  `m-4`                               Margin

  `rounded-lg`                        Rounded corners

  `w-full`                            Full available width

  `md:grid-cols-2`                    Two grid columns from the medium
                                      breakpoint

  `hidden md:block`                   Hidden by default, displayed as a
                                      block at medium and larger
                                      breakpoints
  -----------------------------------------------------------------------

Tailwind breakpoints are mobile-first: unprefixed classes apply by
default; prefixed classes apply at their breakpoint and above.

## 26. Responsive Design

Responsive design makes the interface usable across different screen
sizes.

Practical checks: - Use flexible widths rather than fixed widths
everywhere. - Use Flexbox or Grid appropriately. - Test mobile, tablet,
and desktop layouts. - Avoid horizontal overflow. - Ensure buttons and
inputs remain usable on touchscreens. - Check text contrast and semantic
HTML.

------------------------------------------------------------------------

# Part E --- Redux Toolkit

Redux Toolkit is relevant because your resume lists it in the React
Full-Stack Blog Application.

## 27. Why Use Redux?

Redux provides centralized state management. It can be useful when many
components need to read or update shared state. It adds structure, but
not every small application needs Redux; local state or Context may be
sufficient.

## 28. Core Redux Toolkit Terms

-   **Store:** Holds the application state.
-   **Slice:** Groups state, reducers, and generated actions for a
    feature.
-   **Reducer:** Describes how state changes in response to an action.
-   **Action:** Describes an event or requested state change.
-   **`useSelector`:** Reads data from the Redux store.
-   **`useDispatch`:** Dispatches an action.

Example slice:

``` js
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

Redux Toolkit uses Immer internally, so mutation-like syntax in a Redux
Toolkit reducer is translated into an immutable state update. Do not
apply that syntax to ordinary React state.

------------------------------------------------------------------------

# Part F --- Your Resume and Project Discussion

## 29. What Your Resume Says

Your submitted resume lists the following projects and technologies:

### React Full-Stack Blog Application

-   React, Redux Toolkit, Appwrite, Tailwind CSS
-   Authentication and protected routes
-   CRUD operations
-   Appwrite authentication, database, and storage
-   TinyMCE rich-text editing

### MediAI --- AI-Powered Healthcare Platform

-   React, Node.js, Express.js, MongoDB, Firebase, Ollama/Llama
-   AI-assisted healthcare information features
-   Responsive interface

### Bank Management System

-   Java Swing, JDBC, MySQL
-   Account creation, login, deposit, withdrawal, balance enquiry, mini
    statement, and PIN change

The Blog Application is the most directly relevant project for this
React role. Revise it first. MediAI can demonstrate wider full-stack
experience, but keep the focus on your actual React work.

## 30. Project Questions You Must Be Able to Answer

Prepare truthful, specific answers to these questions:

1.  What problem does your Blog Application solve?
2.  What components did you create?
3.  How did you manage state?
4.  Why did you use Redux Toolkit?
5.  How did Appwrite authentication work in your application?
6.  How did you protect routes?
7.  How did you implement create, read, update, and delete operations?
8.  How did you handle form validation and errors?
9.  How did you use Tailwind CSS to make the interface responsive?
10. What was the most difficult bug you fixed?
11. What would you improve if you rebuilt the application?
12. What was your own contribution versus code or guidance from others?

**Important:** The resume states that these features were implemented,
but it does not provide the code or implementation details. Review your
actual repository before the interview. Do not invent architecture,
debugging stories, performance improvements, or security measures.

## 31. Sample Self-Introduction

Use this as a structure, not a script to recite word-for-word:

"Hello, I am Maaz Khan, a final-year Electronics and Computer Science
Engineering student. I have worked with JavaScript, React.js, Tailwind
CSS, Node.js, Express.js, and databases. One of my relevant projects is
a React Full-Stack Blog Application where I used Redux Toolkit,
Appwrite, and Tailwind CSS for authentication, content management, and a
responsive interface. I have also worked on MediAI, a full-stack project
using React and Node.js with AI integration. I am looking for an
opportunity to strengthen my frontend development skills, contribute to
real projects, and learn from an experienced development team."

Only use this introduction if it accurately reflects your contribution
and current skill level.

## 32. If Asked About a Skill You Have Forgotten

Do not claim expert-level knowledge. A concise, credible response is:

"I have worked with React in my projects, but I am currently revising
some concepts to strengthen my fundamentals. I understand the basic
component and state model, and I am practising hooks and API integration
so I can implement them more confidently."

If you do not know a particular answer, explain what you do know and how
you would investigate the issue.

------------------------------------------------------------------------

# Part G --- Common React Interview Questions and Short Answers

## 33. Rapid Revision

### Q1. What is the difference between props and state?

Props are passed into a component; state is data managed by a component
or state store and can change over time.

### Q2. Why does a React component re-render?

Common causes include its state changing, its parent rendering, or a
context value it consumes changing. A re-render does not necessarily
mean the entire DOM is rebuilt.

### Q3. Why should state not be mutated directly?

Direct mutation can prevent React from recognizing changes as expected
and can cause unpredictable UI behavior. Use the state setter and create
updated arrays/objects.

### Q4. What is the purpose of `useEffect`?

It synchronizes a component with external systems, such as fetching
data, subscriptions, or browser APIs.

### Q5. What is the purpose of a key in React?

A key helps React match list items across renders. Stable unique
identifiers are preferred.

### Q6. What is a controlled component?

A form element whose value is controlled by React state.

### Q7. What is lifting state up?

Moving shared state to the closest common parent so multiple components
can use the same source of truth.

### Q8. What is prop drilling?

Passing props through intermediate components that do not need the data
themselves. Context or a state-management solution may help when this
becomes difficult to maintain.

### Q9. What is CRUD?

Create, Read, Update, and Delete --- the four common operations for
managing data.

### Q10. How would you debug a UI issue?

Reproduce the issue, inspect browser console errors, check React
props/state and network requests, isolate the failing component, fix it,
and retest the relevant flow.

### Q11. What is Git used for?

Git tracks code changes and helps developers collaborate through
commits, branches, merges, and conflict resolution.

### Q12. What is TypeScript?

TypeScript adds static type checking to JavaScript. It can detect many
type-related errors during development before the code runs.

------------------------------------------------------------------------

# Part H --- Hands-On Coding Checklist

Try these without looking at solutions first.

-   [ ] Build a counter with increment and decrement.
-   [ ] Render an array of objects using `map()` and stable keys.
-   [ ] Filter a list based on a search input.
-   [ ] Fetch API data and display loading, error, and success states.
-   [ ] Create a controlled form and prevent default submission.
-   [ ] Build a responsive card using Tailwind CSS.
-   [ ] Explain how Redux Toolkit is used in your Blog Application.
-   [ ] Explain how authentication and protected routes work in your
    actual project.
-   [ ] Open your GitHub repository and verify that you can explain the
    code you mention.

## Suggested Practice API

`https://jsonplaceholder.typicode.com/users`

This is a demo API suitable for practising GET requests and rendering
results. It is not your application's real backend.

------------------------------------------------------------------------

# Final 15-Minute Revision Checklist

Before the interview, make sure you can explain:

-   [ ] Components, JSX, props, and state
-   [ ] `useState` and `useEffect`
-   [ ] Dependency arrays and state updates
-   [ ] `map()`, `filter()`, destructuring, and spread syntax
-   [ ] Promises and `async/await`
-   [ ] REST methods and HTTP status codes
-   [ ] Loading, error, and empty states
-   [ ] Tailwind responsive breakpoints
-   [ ] Redux Toolkit slice, store, actions, and selectors
-   [ ] Your Blog Application architecture and actual contribution
-   [ ] One challenge you genuinely faced and how you resolved it
-   [ ] Your self-introduction

**Final advice:** In 4--7 hours, depth on the fundamentals is more
useful than shallow familiarity with every React library. Focus on
JavaScript, React hooks, API integration, Tailwind, and the project
already on your resume.
