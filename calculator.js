import { add } from "./add.js";
const sum = add(3, 5);

import { substract } from "./substract.js";
const diff = substract(7, 4);

import { multiply } from "./multiply.js";
const product = multiply(10, 4);

import { divide } from "./divide.js";
const quotient = divide(48, 5);

import { power } from "./power.js";
const pow = power(10, 5);

const results = { sum, diff, product, quotient, pow };
for (let result in results) {
  console.log(`${results[result]}`);
}
