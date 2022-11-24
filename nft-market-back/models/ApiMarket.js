const mongoose = require("mongoose");

const ApiMarket = mongoose.model("ApiMarket", {
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    sale: Boolean,
    userId: String
});

module.exports = ApiMarket;