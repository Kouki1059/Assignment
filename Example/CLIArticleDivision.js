const path = require('node:path');
const { parseArgs } = require('node:util');
const { getPackageName } = require('./lib/name');
const { readMarkdownFileSync, writeHtml } = require('./lib/file');
const { values } = parseArgs({ strict: false });

if (values.name) {
    const name = getPackageName();
    console.log(name);
    return
}

if (values.file) {
    const filePath = path.resolve(__dirname, values.file);
    const markdownStr = readMarkdownFileSync(filePath);
    console.log(markdownStr);
    const outputPath = path.resolve(__dirname, values.out)
    const html = writeHtml(markdownStr, outputPath);
    console.log(`HTMLファイルを${outputPath}に出力しました。`);
    return
}

console.log('オプションがありません')   