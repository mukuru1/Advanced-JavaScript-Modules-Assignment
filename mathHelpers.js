export function square(n) {
  return n ** 2;
}

export function cube(n) {
  return n ** 3;
}

export function sqrt(n) {
  let sqrt = Math.sqrt(n);
  if (n < 0) {
    throw new Error("Invalid value");
  }
  return sqrt;
}
