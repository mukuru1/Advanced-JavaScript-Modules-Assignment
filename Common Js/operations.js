function add(a, b) {
    if (typeof a !== 'number') {
        return "Invalid input";
    }
    if (typeof b !== 'number') {
        return "Invalid input";
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number') {
        return "Invalid input";
    }
    if (typeof b !== 'number') {
        return "Invalid input";
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number') {
        return "Invalid input";
    }
    if (typeof b !== 'number') {
        return "Invalid input";
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number') {
        return "Invalid input";
    }
    if (typeof b !== 'number') {
        return "Invalid input";
    }
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

function power(base, exponent) {
    if (typeof base !== 'number') {
        return "Invalid input";
    }
    if (typeof exponent !== 'number') {
        return "Invalid input";
    }
    return Math.pow(base, exponent);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
};