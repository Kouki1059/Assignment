const express = require('express');
const app = express();

// GET '/' （トップ）アクセス時の挙動
app.get('/', (req, res) => {
    res.status(200).send('hello world\n');
});

// ポート: 3000でサーバーを起動
app.listen(3000, () => {
    // サーバー起動後に呼び出されるCallback
    console.log('start listening');
});