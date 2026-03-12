const express = require('express');
const app = express();
const path = require('node:path');

const logMiddleware = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

// 共通の処理をミドルウェアとして切り出し可能な状態にする
// '/'と'/user/:id'それぞれのルートにlogMiddlewareを適用する
// ルーティングとミドルウェア
/*app.get('/', 
    logMiddleware,
    (req, res) => {
        try {
            res.status (200).send('hello world \n');
        } catch (err) {
            res.status (500).send('Internal Server Error' );
        }
    }
);
*/
// GET '/user/:id' に一致するGETの挙動
app.get('/user/:id', logMiddleware, (req, res) => {
    // :idをreq.params.idとして受け取る
    res.status(200).send(req.params.id);
});

// 包括的エラーハンドリング
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.listen(3000, () => {
    console.log('start listening');
});

// ejsをビューエンジンに指定
app.set('view engine', 'ejs');


app.get('/', logMiddleware, (req, res) => {
    const users = ['alpha', 'bravo', 'charlie', 'delta'];
    res.render(path.join(__dirname, 'views','indexDynamic.ejs'), { users: users });
});