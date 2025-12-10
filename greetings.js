export function sayHello(name, time) {
  let morningMessage;
  let afternoonMessage;
  let eveningMessage;

  if (time < 12) {
    morningMessage = `Good morning, ${name}`;
    return morningMessage;
  } else if (time > 12 && time < 18) {
    afternoonMessage = `Good afternoon, ${name}`;
    return afternoonMessage;
  } else {
    eveningMessage = `Good evening, ${name}`;
    return eveningMessage;
  }
}

console.log(sayHello("Antoine", 17));
