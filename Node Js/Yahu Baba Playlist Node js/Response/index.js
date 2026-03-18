// Import the Express framework
// import express from "express";
const express = require("express");
/*
 * Express Response Methods Demo
 * ---------------------------------
 * This file demonstrates various Express.js response methods.
 * Each route showcases a specific method with detailed comments
 * explaining its purpose, typical usage, and behavior.
 */
// Create an instance of Express
const app = express();

// Define the Port number where the server will run
const PORT = 3000;

// --- Express Response Methods Practice ---

// 1. res.send() - Sends the HTTP response. 
// The parameter can be a String, Object, Array, or Buffer.
// It automatically sets the Content-Type header based on the input type.
app.get('/send', (req, res) => {
    res.send('Hello World! This is res.send()');
});

// 2. res.json() - Sends a JSON response. 
// This method is identical to res.send() when an object or array is passed,
// but it explicitly converts the parameter to a JSON string using JSON.stringify().
app.get('/json', (req, res) => {
    res.json({
        message: "Hello!",
        status: "success",
        data: [1, 2, 3]
    });
});

// 3. res.jsonp() - Sends a JSON response with JSONP support. 
// This is useful for cross-domain requests. It wraps the JSON data in a callback function 
// if a callback query parameter is provided (e.g., /jsonp?callback=myFunc).
app.get('/jsonp', (req, res) => {
    res.jsonp({ message: "This is a JSONP response" });
});

// 4. res.redirect() - Issues an HTTP redirect to the client.
//   • Default status code is 302 (Found).
//   • Can provide a custom status (e.g., 301 for permanent redirects).
//   • Accepts relative paths (internal routes) or absolute URLs (external sites).
app.get('/redirect', (req, res) => {
    // Redirect the client to an external URL.
    // By default, Express sends a 302 Found status.
    // You can also specify a custom status code, e.g., res.redirect(301, '/new-path');
    // When providing an absolute URL, the browser navigates to that site.
    // res.redirect(302, 'https://www.google.com');
    res.redirect('..')
});


app.get('/download', (req, res) => {
    // res.sendFile(__dirname + '/files/document.pdf'); open this document at chrome browser doesn't download forcefully
    res.download('./files/document.pdf'); // this will download the file forcefully
})


app.get('/error', (req, res) => {
    res.sendStatus(404)
})

app.get('/check', (req, res) => {
    res.set({
        "custom-header": "Hello"
    })
    console.log(res.get('custom-header'));
    res.send("Check")
})





// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)
})
