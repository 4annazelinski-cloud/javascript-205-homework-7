/*
function square(n) {
    return n * n;
}


function isAdult(age) {
    return age >= 18;
}

function greet(name) {
    return `Hello, ${name}!`;
}

function area(width, height) {
    return width * height;
}

function sayHi() {
    return "Hi!";
}

function sign(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    }
    return "zero";
}
*/

const square = n => n * n;
const isAdult = age => age >= 18;
const greet = (name) => `hello, ${name}!`;
const area = (width, heigth) => width * heigth;
const sayHi = () => 'hi!';
const sign = (n) => {
    if (n > 0) {
        return 'positive';
    } else if (n < 0) {
    return 'negative';
    }
    return 'Zero';
}
const half = n => n / 2;

console.log(isAdult(16));
console.log(square(7));
console.log(greet("Nino"));
console.log(area(3, 5));
console.log(sayHi());
console.log(sign(-4));
console.log(sign(0));
console.log(half(10));