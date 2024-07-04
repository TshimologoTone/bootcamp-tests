function findItemsOver20(items) {
    if (!Array.isArray(items)) {
        throw new Error("Input should be an array.");
    }

    // Filter items where quantity is greater than 20
    const filteredItems = items.filter(item => item.quantity > 20);

    return filteredItems;
}