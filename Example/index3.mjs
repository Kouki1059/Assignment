// index.mjs
import { readFile } from 'node:fs'
readFile(import.meta.filename, (err, data) => {
console.log(data);
});

// <Buffer 2f 2f 20 69 6e 64 65 78 2e 6d 6a 73 0a 69 6d 70 6f 72 74 20 7b 20 72 65 61 64 46 69 6c 65 20 7d 20 66 72 6f 6d 20 27 6e 6f 64 65 3a 66 73 27 0a 72 65 ... 68 more bytes>npm install undici --save