const router = require("express").Router();

const nftUserRoutes = require("../models/User");
const path = require("path");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const e = require("express");
require('dotenv').config();

router.post("/register", async (req, res) => {
    
    const { name,
        lastname,
        email,
        user,
        password } = req.body;

    if(!name){
        res.status(422).json({ error: "Name Required!"});
        return;
    };
    if(!lastname){
        res.status(422).json({ error: "Lastname Required!"});
        return;
    };
    if(!email){
        res.status(422).json({ error: "Email Required!"});
        return;
    };

    if(!password){
        res.status(422).json({ error: "Password Required!"});
        return;
    };

    const objUser = {
        name,
        lastname,
        email,
        user,
        password,
    };

    
    try {
        
        await nftUserRoutes.create(objUser);
        

        res.status(201).json({ message: "Registered user!"});
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error });
    };
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ 'message': 'Username and password are required.' });
    const find =  await nftUserRoutes.find().where('email').equals(email).limit(1);
    console.log(find)
    const foundUser = find[0];
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    const match = password === foundUser.password;
    if (match) {
        const token = jwt.sign(
            { "username": foundUser.user },
            'process.env.ACCESS_TOKEN_SECRET',
            { expiresIn: '1d' }
        );
        const refreshToken = jwt.sign(
            { "username": foundUser.user },
            'process.env.REFRESH_TOKEN_SECRET',
            { expiresIn: '1d' }
        );
        foundUser.refreshToken = refreshToken;
        foundUser.save();

        res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.json({ foundUser, token });
    } else {
        res.sendStatus(401);
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await nftUserRoutes.find();

        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await nftUserRoutes.findOne({ _id: id });

        if(!user){
            res.status(422).json({ message: "User Not Found!"});
            return;
        };

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

router.patch("/:id", async (req, res) => {
    const id = req.params.id;

    const { name, 
            lastname, 
            email, 
            user, 
            password } = req.body;

    const objUser = {
        name, 
        lastname, 
        email, 
        user, 
        password,
    };

    try {
        const updateUser = await nftUserRoutes.updateOne({ _id: id}, objUser);

        //matchedCount returns 1 if changes were made
        if(updateUser.matchedCount === 0){
            res.status(422).json({ message: "User Not Found!"});
            return;
        };

        res.status(200).json({ user: objUser });
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

router.delete("/:id", async(req, res) => {
    const id = req.params.id;

    const objUser = await nftUserRoutes.findOne({ _id: id });

    if(!objUser){
        res.status(422).json({ message: "User Not Found!"});
        return;
    };

    res.status(200).json({ message: "User deleted!"});
    try {
        await nftUserRoutes.deleteOne({ _id: id });

        res.status(200).json({ message: "User Not Found!"});
    } catch (error) {
        res.status(500).json({ error: error });
    };
});

module.exports = router;