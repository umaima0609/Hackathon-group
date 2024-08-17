const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, rollnum: {
        type: String,
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: Number,
        default: 0,
        required: true
    },
});

const user = mongoose.model("user", userschema);
module.exports = user;