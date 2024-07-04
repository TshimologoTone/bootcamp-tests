const distance = 10.5; // distance in kilometers
const rate = 2.0;      // rate per kilometer

try {
    const fee = transportFee(distance, rate);
    console.log(`The transport fee for ${distance} km at a rate of ${rate} per km is ${fee}.`);
} catch (error) {
    console.error(error.message);
}