// Split the regNumString into an array of individual registration numbers
function countAllPaarl(regNumStrings) {
    var regNumbers = regNumString.split(", ");

    // Initialize a counter for Paarl registration numbers
    var countPaarl = 0;

    // Iterate through the array to count the number of registration numbers that start with "CJ"
    for (var i = 0; i < regNumbers.length; i++) {
        if (regNumbers[i].startsWith("CJ")) {
            countPaarl++; // Increment the counter for Paarl registration numbers
        }
    }

    return countPaarl;
}
