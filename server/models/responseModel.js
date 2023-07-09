const mongoose = require("mongoose")

const responseSchema = mongoose.Schema({
   
    reply: {
        type:String,
        required:[true,"no data found"]
    }
}
);

module.exports = mongoose.model("response",responseSchema)