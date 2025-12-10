import { add, subtract, multiply, divide, power } from "./operations.js";

const sum = add(20, 10);
const diff = subtract(30, 12);
const product = multiply(6, 5);
const quotient = divide(40, 2);
const pow = power(2, 5);

const results = { sum, diff, product, quotient, pow };

for (const key in results) {
  console.log(`${key} → ${results[key]}`);
  
}