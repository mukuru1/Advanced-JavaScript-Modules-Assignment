export function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input");
  }

  let quotient = a / b;
  if (quotient === Infinity) {
    throw new Error("Error: Division by zero");
  }

  return quotient;
}
