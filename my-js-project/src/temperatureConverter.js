function celsiusToFahrenheit(celsius) {
    if (typeof celsius !== 'number') {
        throw new Error('Input must be a number');
    }
    const fahrenheit = (celsius * 9/5) + 32;
    let condition;

    if (fahrenheit >= 85) {
        condition = 'Hot';
    } else if (fahrenheit >= 60) {
        condition = 'Warm';
    } else {
        condition = 'Cold';
    }

    return `${fahrenheit.toFixed(2)}°F - ${condition}`;
}

export { celsiusToFahrenheit };