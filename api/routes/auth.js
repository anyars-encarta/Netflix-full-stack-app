const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User.js");

//REGSITER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        // password: req.body.password,
        // Encrypt
        password: CryptoJS.AES.encrypt(
            req.body.password, process.env.SECRET_KEY
        ).toString(),
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;