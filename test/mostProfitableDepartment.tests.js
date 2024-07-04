const salesData = [
    { department: 'electronics', sales: 4500 },
    { department: 'clothing', sales: 1500 },
    { department: 'grocery', sales: 5500 },
    { department: 'electronics', sales: 2500 },
    { department: 'clothing', sales: 1000 },
    { department: 'grocery', sales: 2000 }
];

try {
    const profitableDept = mostProfitableDepartment(salesData);
    console.log(`The most profitable department is: ${profitableDept}`);
} catch (error) {
    console.error(error.message);
}
