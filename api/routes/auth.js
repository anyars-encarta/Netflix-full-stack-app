const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
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


// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json('Wrong password or userame!');
        }

        // Decrypt Password
        const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json('Wrong password or userame!');
        }

        const accessToken = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.SECRET_KEY, { expiresIn: "5d" }
        );

        const { password, ...info } = user._doc;

        res.status(200).json({ ...info, accessToken })
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router;