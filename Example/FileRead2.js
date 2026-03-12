const fs = require('node:fs');

try {
    const data = fs.readFileSync('./example.txt', 'utf8');
    console.log('ファイルの内容:', data);
} catch (err) {
    console.error(err);
}