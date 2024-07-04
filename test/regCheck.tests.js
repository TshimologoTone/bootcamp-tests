console.log(regCheck('RG 45 HN GP', 'GP')); // Output: true
console.log(regCheck('LKG 679 EC', 'EC')); // Output: true
console.log(regCheck('GHT 456 MP', 'MP')); // Output: true
console.log(regCheck('FGT 491 L', 'L')); // Output: true

console.log(regCheck('ND 123-456', 'GP')); // Output: false
console.log(regCheck('CY 678-453', 'EC')); // Output: false
console.log(regCheck('CA 1234-123', 'MP')); // Output: false
