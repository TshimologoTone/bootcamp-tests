function testCountAllFromTown() {
    const testCases = [
        { input: 'CL 124,CY 567,CL 345,CJ 456,CL 341', townPrefix: 'CL', expected: 3 },
        { input: 'CL 124,CY 567,CL 345,CJ 456,CL 341', townPrefix: 'CY', expected: 1 },
        { input: 'CL 124,CY 567,CL 345,CJ 456,CL 341', townPrefix: 'CJ', expected: 1 },
        { input: 'CL 124,CY 567,CL 345,CJ 456,CL 341', townPrefix: 'CA', expected: 0 },
        { input: 'CY 124,CY 567,CY 345,CY 456,CY 341', townPrefix: 'CY', expected: 5 },
        { input: '', townPrefix: 'CY', expected: 0 }
    ];

    testCases.forEach(({ input, townPrefix, expected }, index) => {
        const result = countAllFromTown(input, townPrefix);
        console.log(`Test case ${index + 1}: Input: "${input}", Town Prefix: "${townPrefix}"`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.assert(result === expected, `Test case ${index + 1} failed`);
    });
}

// Run the tests
testCountAllFromTown();