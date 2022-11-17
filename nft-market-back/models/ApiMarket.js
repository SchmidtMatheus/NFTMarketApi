const mongoose = require("mongoose");

const ApiMarket = mongoose.model("ApiMarket", {
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    sale: Boolean,
});

module.exports = ApiMarket;