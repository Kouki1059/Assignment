const { readFile } = require('fs');

console.log('A');

readFile(__filename, (err, data) => {
    console.log('B', data);
});

console.log('C');