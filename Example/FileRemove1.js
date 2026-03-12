const fs = require('node:fs/promises');

async function main() {
    await fs.unlink('./example.txt');
}

main().catch(console.error)