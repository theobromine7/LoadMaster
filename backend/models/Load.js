const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    name: String,
    length: Number,
    width: Number,
    height: Number,
    weight: Number,
    fragile: Boolean,
    stackable: Boolean
});

const LoadSchema = new mongoose.Schema({

    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
        required: true
    },

    truck: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Truck",
        required: true
    },

    items: [ItemSchema],

   
    utilization: {
        type: Number,
        default: 0
    },

    totalWeight: {
        type: Number,
        default: 0
    },

    totalVolume: {
        type: Number,
        default: 0
    },

    status: {
        type: String,
        enum: ["pending", "processed"],
        default: "pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Load", LoadSchema);
