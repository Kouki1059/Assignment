const fs = require('node:fs/promises');

async function main() {
    await fs.writeFile(
        './example.txt', 'Hello World!',{ encoding: 'utf-8' });
}
main().catch(console.error)