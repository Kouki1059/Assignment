const path = require('node:path');
const fs = require('node:fs');
const { parseArgs } = require('node:util');
const { values } = parseArgs({ strict: false});

if (values.name) {
    const packageStr = fs.readFileSync(
    path.resolve(__dirname, 'package.json'), { encoding: 'utf-8' });

    const packageJson = JSON.parse(packageStr);
    console.log(packageJson.name)
    return
}

if (values.file) {
    // 指定されたMarkdownファイルを読みこむ
    const markdownStr = fs.readFileSync(
    path.resolve(__dirname, values.file),{ encoding: 'utf-8' });
    console.log(markdownStr);
    return
}
console.log('オプションがありません')