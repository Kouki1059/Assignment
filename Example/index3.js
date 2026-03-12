// index.js
const fs = require('node:fs');
fs.readFile(__filename, (err, data) => {
console.log(data);
});

// <Buffer 2f 2f 20 69 6e 64 65 78 2e 6a 73 0a 63 6f 6e 73 74 20 66 73 20 3d 20 72 65 71 75 69 72 65 28 27 6e 6f 64 65 3a 66 73 27 29 3b 0a 66 73 2e 72 65 61 64 ... 56 more bytes>
