function mostProfitableDepartment(salesData) {
    // Check if salesData is an array and not empty
    if (!Array.isArray(salesData) || salesData.length === 0) {
        throw new Error("Sales data should be a non-empty array.");
    }

    // Initialize an object to keep track of sales totals for each department
    const departmentSales = {};

    // Iterate through sales data to accumulate sales for each department
    salesData.forEach(sale => {
        const { department, sales } = sale;
        if (departmentSales[department]) {
            departmentSales[department] += sales;
        } else {
            departmentSales[department] = sales;
        }
    });

    // Determine the most profitable department
    let maxSales = 0;
    let profitableDepartment = '';

    for (const department in departmentSales) {
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            profitableDepartment = department;
        }
    }

    return profitableDepartment;
}