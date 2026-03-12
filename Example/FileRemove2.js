const fs = require('node:fs');

try {
    fs.unlinkSync('./example.txt');
} catch (err) {
    console.error(err);
}