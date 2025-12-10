import { add, subtract, multiply, divide, power } from './modules/es6Module.js';
import { convertTemperature } from './temperatureConverter.js';
import { searchById, searchByName, filterByAge } from './searchFunction.js';


const calculatorResults = {
    addition: add(5, 3),
    subtraction: subtract(10, 4),
    multiplication: multiply(7, 6),
    division: divide(20, 5),
    power: power(2, 3)
};

console.log('Calculator Results:');
for (const [operation, result] of Object.entries(calculatorResults)) {
    console.log(`${operation}: ${result}`);
}


const celsius = 25;
const temperatureResult = convertTemperature(celsius);
console.log(`Temperature in Fahrenheit: ${temperatureResult}`);


const students = [
    { id: 1, name: 'Alice', age: 20 },
    { id: 2, name: 'Bob', age: 22 },
    { id: 3, name: 'Charlie', age: 23 }
];

console.log('Search by ID (1):', searchById(students, 1));
console.log('Search by Name (Bob):', searchByName(students, 'Bob'));
console.log('Filter by Age (22):', filterByAge(students, 22));