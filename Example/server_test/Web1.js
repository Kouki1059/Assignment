const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        res.statusCode = 200;
        res.write('hello world\n');
        res.end();
    } else {
        res.statusCode = 404;
        res.write('Not Found\n');
        res.end();
    }
}).listen(3000);