// initial configuration
require("dotenv").config();
const cors = require('cors')
const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(cors())
app.use(
    express.urlencoded({ extended: true })
);

app.use(express.json());

//api routes
const nftUserRoutes = require("./routes/userRoutes");
const nftMarketApiRoutes = require("./routes/apiMarketRoutes");

app.use("/user", nftUserRoutes);

app.use("/nftmarket", nftMarketApiRoutes);

//initial route
app.get("/", (req, res) => {
    res.json({ message: "API criada para projeto final" })
})

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
    .connect(
        `mongodb+srv://SchmidtMatheus:bMJhWDD0QpMx83P9@cluster0.oyln787.mongodb.net/test`
    )
    .then(() => {
        app.listen(8000);
        console.log("Conectado ao mongoDB")
    })
    .catch((e) => console.log(e));