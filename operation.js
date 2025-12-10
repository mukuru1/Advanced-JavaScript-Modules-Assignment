const addition = require("./add");
console.log("The addition is: " + addition.add(3, 5));

const substraction = require("./substract");
console.log("The difference is: " + substraction.substract(7, 4));

const multiplication = require("./multiply");
console.log("The product is: " + multiplication.multiply(10, 4));

const division = require("./divide");
console.log("The division is: " + division.divide(48, 5));

const powering = require("./power");
console.log("The powered number answer is: " + powering.power(10, 5));
