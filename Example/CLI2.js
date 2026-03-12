const { parseArgs } = require('node:util' );

const { values, positionals } = parseArgs ({
    strict : false
});

console.log(values, positionals) ;