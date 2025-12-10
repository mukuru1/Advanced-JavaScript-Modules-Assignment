export function power(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new Error("Invalid input");
  }
  return base ** exponent;
}
