const items = [
    { name: 'apple', quantity: 10 },
    { name: 'banana', quantity: 25 },
    { name: 'pear', quantity: 15 },
    { name: 'grape', quantity: 30 }
];

try {
    const result = findItemsOver20(items);
    console.log("Items with quantity over 20:", result);
} catch (error) {
    console.error(error.message);
}
