import express from 'express';
import User from '../models/User.js';

const router = express.Router();

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

export default router;