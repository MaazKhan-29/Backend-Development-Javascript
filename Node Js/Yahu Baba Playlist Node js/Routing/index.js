// Import the Express framework
import express from "express";

// Create an instance of Express
const app = express();

// Define the Port number where the server will run
const PORT = 3000;

/**
 * BASIC ROUTING
 * These are simple routes that respond to specific URLs
 */

// Home Route: URL -> http://localhost:3000/
app.get('/', (req, res) => {
    res.send("<h1>Welcome the Express JS First Server</h1>")
})

// About Page: URL -> http://localhost:3000/About
app.get('/About', (req, res) => {
    res.send("<h1>Welcome to About Page</h1>")
})

// Nested Route: URL -> http://localhost:3000/About/user
app.get('/About/user', (req, res) => {
    res.send("<h1>Welcome to User details Page</h1>")
})

// Nested Route: URL -> http://localhost:3000/About/Admin
app.get('/About/Admin', (req, res) => {
    res.send("<h1>Welcome to Admin details Page</h1>")
})


/**
 * DYNAMIC ROUTE PARAMETERS
 * These are variables in the URL path. 
 * Example: http://localhost:3000/About/maaz/20
 * Here 'userid' will be 'maaz' and 'age' will be '20'
 */
app.get('/About/:userid/:age', (req, res) => {
    // req.params contains the values passed in the URL placeholders (:userid, :age)
    res.send(req.params)
})


/**
 * QUERY PARAMETERS
 * These are key-value pairs at the end of the URL starting with "?"
 * Example: http://localhost:3000/search?name=Maaz Khan&age=20
 */
app.get('/search', (req, res) => {
    // Get values from the query string
    const name = req.query.name;
    const age = req.query.age;

    // Send the response using the query data
    res.send(`Search result for Name: ${name}, Age: ${age}`)
})


// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})
