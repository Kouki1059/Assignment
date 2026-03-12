const fs = require('node:fs');

try {
    fs.writeFileSync('./example.txt','Hello World!',{ encoding: 'utf-8' });
} catch (err) {
    console.error(err)
}