// index.js

const a = require('./a'); // a.jsを読み込み（実行）
const b = require('./b'); // b.jsを読み込み（実行）
const calc = require('./calc');
console.log(calc.num); // 10

const b = require('./b'); // b.jsを読み込み（実行）
const a = require('./a'); // a.jsを読み込み（実行）
const calc = require('./calc');
console.log(calc.num); // 5

