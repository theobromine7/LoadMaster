const mongoose = require("mongoose");

// Define the Truck schema
const TruckSchema = new mongoose.Schema({
    name: { type: String, required: true }, // truck name
    dimensions: { // size of the truck
        length: { type: Number, required: true },
        
        width: { type: Number, required: true },
        height: { type: Number, required: true }
    },
    maxWeight: { type: Number, required: true },
     company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Company",
            default: null
        }, // max weight truck can carry
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // who created this truck
}, { timestamps: true }); // auto-manage createdAt and updatedAt

// Export the model
module.exports = mongoose.model("Truck", TruckSchema);
