import { searchById, searchByName, filterByAge } from "./search.js";

console.log(`Found student:`, searchById(1));
console.log(searchById(99));

console.log(searchByName("joLiVeT"));
console.log(searchByName("Unknown"));

console.log(
  `Students aged 21 and above:`,
  filterByAge(21)
);
