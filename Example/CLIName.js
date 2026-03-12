const path = require('node:path');
const fs = require('node:fs');
const { parseArgs } = require('node:util');
const { values } = parseArgs({
    strict: false
});

if (values.name) {
    const packageStr = fs.readFileSync(
    path.resolve(__dirname, 'package.json'),{ encoding: 'utf-8' });

    const packageJson = JSON.parse(packageStr);
    console.log(packageJson.name)
    return
}