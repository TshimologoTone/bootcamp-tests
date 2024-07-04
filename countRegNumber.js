function countRegNumber(registrationString) {
    // Split the string into an array of registration numbers
    var regNumbersArray = registrationString.split(',');
  
    // Return the number of registration numbers in the array
    return regNumbersArray.length;
  }