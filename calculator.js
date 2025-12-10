import { add } from "./operations.js";
const sum = add(3, 5);

import { substract } from "./operations.js";
const diff = substract(7, 4);

import { multiply } from "./operations.js";
const product = multiply(10, 4);

import { divide } from "./operations.js";
const quotient = divide(48, 5);

import { power } from "./operations.js";
const pow = power(10, 5);

const results = { sum, diff, product, quotient, pow };
for (let result in results) {
  console.log(`${results[result]}`);
}
