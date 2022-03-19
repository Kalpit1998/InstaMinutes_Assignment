const express = require("express");

const Event = require("../models/events.model");

const router = express.Router();



// ===============
// POST Request
// ===============


router.post("/",async(req,res) =>{
    try{
        const event = await Event.create(req.body);
        return res.status(201).send(event);

    }
    catch(e){
        return res.status(500).send(e.message);
    }
})

// ===============
// GET Request
// ===============

router.get("/",async(req,res) =>{
    try{
        const event = await Event.find().lean().exec();
        return res.status(200).send(event);

    }
    catch(e){
        return res.status(500).send(e.message);
    }
})

router.get("/:id",async(req,res) =>{
    try{
        const event = await Event.findById(req.params.id);
        return res.status(200).send(event);

    }
    catch(e){
        return res.status(500).send(e.message);
    }
})

//-------------------------------------------------

// =================================
// Api ---> for post , get & get/:id
// =================================

//http://localhost:2345/event










//---------------------------------------

module.exports = router