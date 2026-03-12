const EventEmitter = require('events');
// EventEmitterの基底クラスを継承して独自イベントを扱うEventEmitterを定義
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// myeventという名前のeventを受け取るリスナーを設定
myEmitter.on('myevent', (data) => {
    console.log('on myevent:', data);
});

// myeventを発行
myEmitter.emit('myevent', 'one');

setTimeout(() => {
    // myeventを発行
    myEmitter.emit('myevent', 'two');
    }, 1000);