const mongoose = require("mongoose")


const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, "{PATH} is required"],
        minLength:[10,"{PATH} must be at least 10 characters long"]
    },
    puchline: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength:[3,"{PATH} must be at least 3 characters long"]
    }
},{timestamps: true})

const joke = mongoose.model("joke",JokeSchema)
module.exports=joke