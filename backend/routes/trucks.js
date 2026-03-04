const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Truck = require("../models/Truck");


// CREATE TRUCK
router.post("/", auth, async (req, res) => {
    try {
        const { name, dimensions, maxWeight } = req.body;

        const truck = new Truck({
            name,
            dimensions,
            maxWeight,
            company: req.user.company,     // ObjectId already
            createdBy: req.user._id        // ✅ FIXED
        });

        await truck.save();
        res.json(truck);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// GET MY TRUCKS
router.get("/", auth, async (req, res) => {
    try {
        const trucks = await Truck.find({
            createdBy: req.user._id        // ✅ FIXED
        });

        res.json(trucks);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
