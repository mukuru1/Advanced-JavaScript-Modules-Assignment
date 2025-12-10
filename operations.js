export function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input");
  }

  return a + b;
}


export function substract(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input");
  }
  return a - b;
}


export function multiply(a, b) {
  return a * b;
}

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


export function power(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new Error("Invalid input");
  }
  return base ** exponent;
}




