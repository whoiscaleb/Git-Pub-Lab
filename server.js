const express = require("express")
const drinks = require("./models/drink.js")
const port = 3000
const app = express()


app.get("/gitpub/", (req,res) => {
    res.send("Welcome to the Gitpub App!")
})

app.get("/drinks", (req,res) => {
    res.send(drinks)
})

app.listen(port, () => {
    console.log(`I'm on port ${port}`)
})




