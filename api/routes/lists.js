const router = require("express").Router();
const verify = require("../verifyToken");
const List = require("../models/List");

// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const savedList = await newList.save();
            res.status(201).json(savedList);
        } catch (e) {
            res.status(500).json(e)
        }

    } else {
        res.status(403).json('You are not allowed to create movies!');
    }
});

// DELETE

// GET

module.exports = router;