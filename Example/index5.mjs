// index.mjs
// 課題
import { request } from 'undici';

request('https://www.yahoo.co.jp').then((res) => 
    res.body.text()).then((body) => {
        console.log(body);
    });