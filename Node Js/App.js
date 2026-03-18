
const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)

    if (req.url === "/") {
        res.write(`<h1>Welcome TO the Calculator</h1>
        <a href="/calculator">calculator</a>
        `)
        return res.end();
    }
    else if (req.url === "/calculator") {
        res.write(`
            <html lang="en">
            <head>
                <title>Calculator</title>
            </head>
            <body>
                <form action="/calculate-result" method="post">

                    <input type="text" id="num1" placeholder="Enter First Number" name="first"><br><br>
                    <input type="text" id="num1" placeholder="Enter First Number" name="second"><br><br>
                    <input type="submit">
                </form>
            </body>
            </html>
        `)
        return res.end();
    }
    else if (req.method === "POST" && req.url.toLowerCase() == "/calculate-result") {
        res.write("Result should shown here");
        // const first = Number(req.payload);
        // const second = Number(req.payload);
        console.log(req.payload)
        return res.end();
    }




});


server.listen(3001, () => {
    console.log("Server is listening On PORT: 3001")
})

