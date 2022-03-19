const express=require("express")

const app=express()

app.use(express.json())


const eventController = require("./controllers/events.controller");




app.use("/event",eventController);


module.exports = app