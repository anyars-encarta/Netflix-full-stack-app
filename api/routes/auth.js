const router = require("express").Router();
const User = require("../models/User.js");

//REGSITER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;