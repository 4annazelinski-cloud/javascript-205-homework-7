//functions in an object
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

console.log(calculator.add(8, 2));
console.log(calculator.subtract(8, 2));
console.log(calculator.multiply(8, 2));
console.log(calculator.divide(8, 2));


// functions in an array
console.log('-'.repeat(10), 'functions in an array');
const operations = [
    calculator.add,
    calculator.subtract,
    calculator.multiply,
    calculator.divide,
];
for (let i = 0; i < operations.length; i++) {
    console.log(operations[i](20, 5));
};


// functions in a variable
console.log('-'.repeat(10), 'functions in a variable');
const plus = calculator.add;

console.log(plus(1, 2));
console.log(calculator.add);
