const mongoose = require("mongoose");

let schema = new mongoose.Schema( {
    name: String,
    lastname: String,
    email: String,
    user: String,
    refreshToken: String,
    password: String
})

const User = mongoose.model("User",schema);

module.exports = User;