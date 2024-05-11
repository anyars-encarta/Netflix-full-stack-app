const router = require("express").Router();
const verify = require("../verifyToken");
const Movie = require("../models/Movie");


// CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(201).json(savedMovie);
        } catch (e) {
            res.status(500).json(e)
        }

    } else {
        res.status(403).json('You are not allowed to create movies!');
    }
});

// UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );

            res.status(200).json(updatedMovie);
        } catch (e) {
            res.status(500).json(e)
        }

    } else {
        res.status(403).json('You are not allowed to create movies!');
    }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndUpdate(req.params.id);

            res.status(200).json("Movie deleted successfully!");
        } catch (e) {
            res.status(500).json(e)
        }

    } else {
        res.status(403).json('You are not allowed to delete movies!');
    }
});

module.exports = router;