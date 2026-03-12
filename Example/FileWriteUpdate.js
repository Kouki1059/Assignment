const fs = require('node:fs/promises');

async function main() {
    for (let i = 0; i < 10; i++) {
        await fs.writeFile('./example.txt', `Hello World!: ${i}\n`,
            {encoding: 'utf-8',flag: 'a' // 追記モードでファイルを開く
        });
    }
}

main().catch(console.error)