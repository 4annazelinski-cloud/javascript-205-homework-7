let score = 0;
const cart = ["Milk"];

const square = (n) => n * n;
const addPoints = (points) => {
    score = score + points;
    return score;
};
const fullName = (first, last) => `${first} ${last}`;
const rollDice = () => Math.floor(Math.random() * 6) + 1;
const addToCart = (item) => {
    cart.push(item);
    return cart.length;
};
const printSum = (a, b) => {
    console.log(a + b);
};


//Part A — sort the functions
console.log('-'.repeat(10), 'Part A');
console.log("square - Pure, no side effects \naddPoints - Impure, changes score \nfullName - Pure, returns same operators \nrollDice - Impure, is unpredictable/random \naddToCart - Impure, mutates cart \nprintSum - Impure, log(8) returns undefined");


//Part B — make them pure
console.log('-'.repeat(10), 'Part B');

const addPointsPure = (currentScore, points) => currentScore + points;

const withItem = (list, item) => [...list, item];

console.log('addPointsPure(0, 5): ',addPointsPure(0, 5));
console.log('addPointsPure(0, 5): ',addPointsPure(0, 5));
console.log(score);

const bigger = withItem(cart, "Bread");

console.log('cart: ', cart);
console.log('bigger: ', bigger);