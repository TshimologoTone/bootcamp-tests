function testCountAllPaarl() {
    const testCases = [
        { input: 'CJ 123, CA 456, CJ 789, CY 234', expected: 2 },
        { input: 'CA 123, CA 456, CY 789, CY 234', expected: 0 },
        { input: 'CJ 123, CJ 456, CJ 789, CJ 234', expected: 4 },
        { input: 'CY 123, CY 456, CY 789, CY 234', expected: 0 },
        { input: '', expected: 0 },
        { input: 'CJ 123, CA 456, CA 789, CJ 234, CJ 567', expected: 3 }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = countAllPaarl(input);
        console.log(`Test case ${index + 1}: ${input}`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.assert(result === expected, `Test case ${index + 1} failed`);
    });
}

// Run the tests
testCountAllPaarl();