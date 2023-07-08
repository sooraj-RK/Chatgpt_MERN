const mongoose = require("mongoose")

const responseSchema = mongoose.Schema({
    prompt: {
        type:String,
        required: [true, "no input found"],
    },
    reply: {
        type:String,
        required:[true,"no data found"]
    }
}
);

module.exports = mongoose.model("response",responseSchema)