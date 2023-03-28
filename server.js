const express = require("express")
const drinks = require("./models/drinks.js")
const port = 3000
const app = express()
app.set("view engine", "ejs")

app.get("/gitpub/", (req,res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req,res) => {
    res.render("drinks_index", {drinks})
})

app.get("/drinks/:id", (req,res) => {
    res.send(req.params.id)
})





app.listen(port, () => {
    console.log(`I'm on port ${port}`)
})





