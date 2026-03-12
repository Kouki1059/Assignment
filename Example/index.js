// index.js
const calc = require('./calc');

console.log(calc.num); // 1

let res = calc.add(3, 1);
console.log(res); // 4

res = calc.sub(3, 1);
console.log(res); // 2