const { add, subtract, multiply, divide, power } = require('./modules/commonjsModule');

const results = {
    addition: add(5, 3),
    subtraction: subtract(5, 3),
    multiplication: multiply(5, 3),
    division: divide(5, 3),
    power: power(5, 3)
};

for (const [operation, result] of Object.entries(results)) {
    console.log(`${operation}: ${result}`);
}