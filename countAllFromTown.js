function countAllFromTown(regNumString, townPrefix) {
    // Split the regNumString into an array of individual registration numbers
    var regNumbers = regNumString.split(",");

    // Initialize a variable to count the registration numbers for the specified town
    var count = 0;

    // Iterate through the array to count the registration numbers for the specified town
    for (var i = 0; i < regNumbers.length; i++) {
        if (regNumbers[i].startsWith('CL')) {
            count++; // Increment the count for each registration number belonging to the specified town
        }
    }

    // Return the total count of registration numbers for the specified town
    return count;
}

// Example usage:
var fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
console.log(fromStellies)