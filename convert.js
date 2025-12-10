function convertCelcius(celcius) {
  let fahrenheit = celcius * 1.8 + 32;
  let message;

  if (fahrenheit > 30) {
    message = `${celcius} C = ${fahrenheit} F (Hot)`;
  } else if (fahrenheit >= 15 && fahrenheit <= 30) {
    message = `${celcius} C = ${fahrenheit} F (Warm)`;
  } else if (fahrenheit < 15) {
    message = `${celcius} C = ${fahrenheit} F (Cold)`;
  }
  return message;
}

console.log(convertCelcius(0));
