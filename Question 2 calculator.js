
const ops = require('./Question 1 operations'); 

const [,, op, aStr, bStr] = process.argv;

function printUsage() {
    console.log('Usage: node "Question 2 calculator.js" <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide, power');
}

if (!op || aStr === undefined || bStr === undefined) {
    printUsage();
    process.exit(1);
}

const a = Number(aStr);
const b = Number(bStr);
if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Invalid input: both operands must be numbers.');
    process.exit(1);
}

const fn = ops[op];
if (typeof fn !== 'function') {
    console.error(`Unknown operation "${op}".`);
    printUsage();
    process.exit(1);
}

const result = fn(a, b);
if (typeof result === 'string' && (result.toLowerCase().includes('invalid') || result.toLowerCase().includes('error'))) {
    console.error(result);
    process.exit(1);
}

console.log(result);