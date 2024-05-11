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
// GET SINGLE USER
// GET ALL USERS
// GET USER STATS

module.exports = router;