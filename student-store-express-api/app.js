const express = require("express")
var cors = require('cors')
const router = require("./routes/store")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/store", router)

app.get("/", (req, res) => {
    res.json({ "ping": "pong" })
})

module.exports = app