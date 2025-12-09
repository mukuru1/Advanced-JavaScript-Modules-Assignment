import { multiply } from "./operations.js";

const a = 6;
const b = 7;

const result = multiply(a, b);

let numberType = "";
if (result % 2 === 0) {
    numberType = "Even Number";
}
if (result % 2 !== 0) {
    numberType = "Odd Number";
}

console.log(`${a} × ${b} = ${result} (${numberType})`);