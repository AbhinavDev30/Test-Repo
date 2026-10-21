const express = require("express");
require('dotenv').config()

const app = express()
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Hello World from chai aur express")
})

app.get("/login", (req, res) => {
    res.send("Login page")
})

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})