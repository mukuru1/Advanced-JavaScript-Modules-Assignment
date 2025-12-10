export function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a + b;
}

export function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a - b;
}

export function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return a * b;
}

export function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    if (b === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

export function power(base, exponent) {
    if (typeof base !== 'number' || typeof exponent !== 'number') {
        throw new Error('Invalid input: Both arguments must be numbers.');
    }
    return Math.pow(base, exponent);
}