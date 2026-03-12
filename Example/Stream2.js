const https = require('node:https');

// サーバーに対してリクエストするオブジェクトを生成
const req = https.request('https://www.yahoo.co.jp', (res) => {
    // 流れてくるデータをutf8で解釈する
    res.setEncoding('utf8');
    // dataイベントを受け取る
    res.on('data', (chunk) => {
        console.log(`body: ${chunk}`);
    });
    // endイベントを受け取る
    res.on('end', () => {
        console.log('end');
    });
});

// リクエスト送信開始
req.end();