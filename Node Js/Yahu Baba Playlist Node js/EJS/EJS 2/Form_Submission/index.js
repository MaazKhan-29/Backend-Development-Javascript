import express, { urlencoded } from 'express';
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views')

// 2 way to write "urlencoded" syntax for getting data from "form" "basically its a middleware"
// 1st Method:
// app.use(urlencoded({ extended: false }))


//2nd Method
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.render("Home")
})

app.get("/form", (req, res) => {
    res.render("form")

})
app.post("/submitForm", (req, res) => {
    const Name = req.body.myname
    const Mobile_no = req.body.myMobileNo
    const Message = `My Name is ${Name} \n This is my Contact no:${Mobile_no}`
    res.send(Message)
    // console.log(Name)
})

app.listen(4000, () => {
    console.log("Server Started Successfully and Listening on Port 4000")
})