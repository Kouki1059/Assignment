const fs = require('node:fs/promises');

async function main() {
    const data = await fs.readFile('./example.txt', 'utf8');
    console.log(data)
}

main().catch(console.error)