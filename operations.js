function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Invalid input";
    }
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function power(base, exponent) {
    
}
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power
}