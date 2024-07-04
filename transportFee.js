function transportFee(distanceKm, ratePerKm) {
    // Ensure the inputs are non-negative
    if (distanceKm < 0 || ratePerKm < 0) {
        throw new Error("Distance and rate must be non-negative.");
    }

    // Calculate the fee
    const fee = distanceKm * ratePerKm;

    return fee;
}