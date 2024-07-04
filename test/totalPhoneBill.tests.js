function testTotalPhoneBill() {
    const testCases = [
        { data: 'call, sms, call, sms, sms', expected: 'R7.80' },
        { data: 'call, call, sms, call', expected: 'R8.25' },
        { data: 'sms, sms, sms, sms', expected: 'R2.60' },
        { data: '', expected: 'R0.00' }, // Edge case: empty string
        { data: 'call', expected: 'R2.75' }, // Edge case: single call
        { data: 'sms', expected: 'R0.65' }, // Edge case: single SMS
    ];

    testCases.forEach(({ data, expected }, index) => {
        const result = totalPhoneBill(data);
        console.log(`Test case ${index + 1}: Data: "${data}"`);
        console.log(`Expected: ${expected}, Got: ${result}`);
        console.assert(result === expected, `Test case ${index + 1} failed`);
    });
}

// Run the tests
testTotalPhoneBill();