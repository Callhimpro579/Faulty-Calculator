function faultyCalculator(num1, operator, num2) {
    // Define faulty cases
    if (num1 === 5 && operator === '*' && num2 === 3) {
        return 20; // Incorrect answer on purpose
    }
    if (num1 === 10 && operator === '+' && num2 === 20) {
        return 25; // Incorrect answer on purpose
    }
    if (num1 === 50 && operator === '-' && num2 === 10) {
        return 100; // Incorrect answer on purpose
    }

    // Perform actual calculation for all other cases
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

// Testing the faulty calculator
console.log(faultyCalculator(5, '*', 3)); // Outputs 20 (faulty case)
console.log(faultyCalculator(10, '+', 20)); // Outputs 25 (faulty case)
console.log(faultyCalculator(50, '-', 10)); // Outputs 100 (faulty case)
console.log(faultyCalculator(8, '+', 2)); // Outputs 10 (correct case)
console.log(faultyCalculator(9, '/', 3)); // Outputs 3 (correct case)
