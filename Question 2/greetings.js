export function sayHello(name, time) {
    let greeting = "";
    
    if (time < 12) {
        greeting = "Good morning";
    }
    if (time >= 12 && time < 18) {
        greeting = "Good afternoon";
    }
    if (time >= 18) {
        greeting = "Good evening";
    }
    
    return `${greeting}, ${name}!`;
}