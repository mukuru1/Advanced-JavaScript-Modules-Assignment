import { add, square, capitalize, kebabCase } from './utils/index.js';

const a = 5;
const b = 3;
console.log(`add(${a}, ${b}) = ${add(a, b)}`);
console.log(`square(${b}) = ${square(b)}`);
console.log(`capitalize("hello") = ${capitalize('hello')}`);
console.log(`kebabCase("Hello World Example") = ${kebabCase('Hello World Example')}`);