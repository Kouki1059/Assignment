const fs = require('node:fs');

try {
    const data = fs.statSync('./example.txt');
    console.log(data);
} catch (err) {
    console.error(err)
}

/*
Stats {
    dev: 16777233,
    mode: 33188,
    nlink: 1,
    uid: 501,
    gid: 20,
    rdev: 0,
    blksize: 4096,
    ino: 114695587,
    size: 160,
    blocks: 8,
    atimeMs: 1772158527265.907,
    mtimeMs: 1772158525332.9624,
    ctimeMs: 1772158525332.9624,
    birthtimeMs: 1772158525331.409
}
*/