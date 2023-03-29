const { response } = require("express")
const express = require("express")
const drinks = require("./models/drinks.js")
const port = 3000
const app = express()
const word = "drinks"
const food = require("./models/foods.js")

app.set("view engine", "ejs")

app.get("/gitpub/", (req,res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req,res) => {
    res.render("drinks_index", {drinks})
})

app.get("/drinks/:id", (req,res) => {
    res.render("drinks_show", {
        drink: drinks[req.params.id]
    })
})

// FOOD INFO

app.get("/foods", (req,res) => {
    res.render("drinks_index", {food})
})

app.get("/foods/:id", (req,res) => {
    res.render("foods_show", {
        food: food[req.params.id]
    })
})


app.listen(port, () => {
    console.log(`I'm on port ${port}`)
})





