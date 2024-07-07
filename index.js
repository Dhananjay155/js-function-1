function subtract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a - b;
    } else {
        return "Both parameters must be numbers.";
    }
}

console.log(subtract(10, 5)); 

function greet(firstName, lastName, age) {
    if (age !== undefined) {
        return `${firstName} ${lastName}'s age is ${age}.`;
    } else {
        return `${firstName} ${lastName}'s age is not available.`;
    }
}

console.log(greet("John", "Doe", 30)); 
console.log(greet("John", "Doe")); 

function interpolate(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return `${a} + ${b} = ${a + b}`;
    } else {
        return "Both parameters must be numbers.";
    }
}

console.log(interpolate(5, 3)); 
console.log(interpolate(5, "3")); 
