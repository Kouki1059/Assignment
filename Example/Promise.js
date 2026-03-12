const { readFile } = require('node:fs');

const readFileAsync = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
            console.log("[DEBUG] resolve");
        });
    });
};