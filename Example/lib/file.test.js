const test = require('node:test');
const assert = require('node:assert');
const path = require('node:path');
const { readMarkdownFileSync } = require('./file');

test('readMarkdownFileSyncが正しく動作する', () => {
const str = readMarkdownFileSync(path.resolve(__dirname, '../fixtures/test.md'));
assert.strictEqual(str, '**bold**', '読み込んだ文字列がfixtureの内容と等しいか比較');
});