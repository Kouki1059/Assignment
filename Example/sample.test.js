// sample.test.js
const test = require('node:test');
const assert = require('node:assert');

test('1 + 2 = 3', () => {
    assert.strictEqual(1 + 2, 3, '1 + 2が3になる');
});