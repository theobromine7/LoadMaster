const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { packItemsIntoTruck } = require("../services/packingService");

const Load = require("../models/Load");
const Truck = require("../models/Truck");


// Create Load
// Create Load
router.post("/create", auth, async (req, res) => {
    try {

        const { truckId, items } = req.body;

        const truck = await Truck.findOne({
            _id: truckId,
            company: req.user.company
        });

        if (!truck) {
            return res.status(404).json({
                msg: "Truck not found"
            });
        }

        // 🔥 RUN PACKING ENGINE
        const result = packItemsIntoTruck(truck, items);

        if (!result.success) {
            return res.status(400).json(result);
        }

        const load = new Load({
            company: req.user.company,
            truck: truckId,
            items,
            utilization: result.utilization,
            totalWeight: result.totalWeight,
            totalVolume: result.totalVolume,
            status: "processed"
        });

        await load.save();

        res.json({
            load,
            packingResult: result
        });

    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
});




// Get My Loads
router.get("/my-loads", auth, async (req, res) => {
    try {
        const loads = await Load.find({
            company: req.user.company
        }).populate("truck");

        res.json(loads);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get Load by ID
router.get("/:id", auth, async (req, res) => {
    try {
        const load = await Load.findOne({
            _id: req.params.id,
            company: req.user.company
        }).populate("truck");

        if (!load) {
            return res.status(404).json({ msg: "Load not found" });
        }

        res.json(load);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
