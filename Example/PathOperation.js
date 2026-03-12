const path = require('node:path');

const joinPath = path.join('./src', 'example.txt');
// src/example.txt
console.log(joinPath);

const resolvePath = path.resolve('./src', 'example.txt');
// /path/to/src/example.txt
console.log(resolvePath);

/*
src/example.txt
/Users/katoukouki/Assignment/Example/src/example.txt
*/