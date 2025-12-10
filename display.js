import { multiply } from "./multiply.js";

const a = 6;
const b = 7;

const product = multiply(a, b);

if (product % 2 === 0) {
  console.log(`${product} (Even Number)`);
} else {
  console.log(`${product} (Odd Number)`);
}
