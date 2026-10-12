//part A
console.log('-'.repeat(10), 'Part A');
let color = "red";

if (true) {
    let color = "blue";
    let size = 10;
    console.log("A:", color); //blue
    console.log("B:", size); //10
}

console.log("C:", color); //red

function paint() {
    let color = "green";
    console.log("D:", color); //green
}

paint();
console.log("E:", color); //red


//Part B
console.log('-'.repeat(10), 'Part B');
const prices = [4, 10, 6];

let total = 0;
for (const price of prices) {
    total = total + price;
}

console.log("Total:", total);
