const router = require("express").Router();
const verify = require("../verifyToken");
const User = require("../models/User");
const CryptoJS = require("crypto-js");

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(
                req.body.password, process.env.SECRET_KEY
            ).toString();
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            }, { new: true });

            res.status(200).json(updatedUser)
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json('You can update only your account!');
    }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...")
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json('You can delete only your account!');
    }
});

// GET SINGLE USER
router.get("/find/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...info } = user._doc;
        res.status(200).json(info);
    } catch (e) {
        res.status(500).json(e);
    }
});

// GET ALL USERS
router.get("/", verify, async (req, res) => {
    const query = req.query.new;
    if (req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({ _id: -1 }).limit(10) : await User.find();
            res.status(200).json(users);
        } catch (e) {
            res.status(500).json(e);
        }
    } else {
        res.status(403).json('You are not allowed to view all users');
    }
});

// GET USER STATS
router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear - 1);

    const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);

        res.status(200).json(data);
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router;