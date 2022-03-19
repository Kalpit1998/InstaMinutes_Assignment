const mongoose = require("mongoose");


const eventSchema = new mongoose.Schema( 
    {
        text: { type: String, required: true },
        dateTime: { type: String, required: true },
    },
        {
        versionKey: false,
        timestamps: true,
        }
    );

module.exports = mongoose.model("event",eventSchema);