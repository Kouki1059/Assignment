const undici = require('undici');
undici.request('https://www.yahoo.co.jp')
.then(({ body }) => {
return body.text();
})
.then((data) => {
console.log(data);
});