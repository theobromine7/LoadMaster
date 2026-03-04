function packItemsIntoTruck(truck, items) {

    // ======================
    // Truck Data
    // ======================
    const truckVolume =
        truck.dimensions.length *
        truck.dimensions.width *
        truck.dimensions.height;

    const maxWeight = truck.maxWeight;

    // ======================
    // Calculations
    // ======================
    let totalVolume = 0;
    let totalWeight = 0;

    let rejectedItems = [];

    for (let item of items) {

        // dimension fit check
        if (
            item.length > truck.dimensions.length ||
            item.width > truck.dimensions.width ||
            item.height > truck.dimensions.height
        ) {
            rejectedItems.push({
                item,
                reason: "Item exceeds truck dimensions"
            });
            continue;
        }

        const itemVolume =
            item.length *
            item.width *
            item.height;

        totalVolume += itemVolume;
        totalWeight += item.weight;
    }

    // ======================
    // Weight Validation
    // ======================
    if (totalWeight > maxWeight) {
        return {
            success: false,
            error: "Truck overweight",
            totalWeight,
            maxWeight
        };
    }

    // ======================
    // Utilization
    // ======================
    const utilization =
        truckVolume === 0
            ? 0
            : (totalVolume / truckVolume) * 100;

    return {
        success: true,
        utilization,
        totalVolume,
        totalWeight,
        rejectedItems
    };
}

module.exports = {
    packItemsIntoTruck
};
