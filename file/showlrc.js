const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');
const readline = require('readline');


const fileName = path.join(__dirname, './李炜 - 你不爱我.lrc');

// method 1
// fs.readFile(fileName, function(error, data) {

//     if (error) throw error;
//     const lines = iconv.decode(data, 'gbk').split('\n');
//     // [00:16.10]习惯被拒绝的人会先拒绝
//     var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
//     const beginTime = new Date();
//     lines.forEach(function(line) {
//         const matched = regex.exec(line);
//         if (matched) {

//             const offsetTime = new Date() - beginTime.getTime();
//             const h = parseFloat(matched[1]);
//             const m = parseFloat(matched[2]);
//             const s = parseFloat(matched[3]);
//             //到达指定时间执行一次
//             setTimeout(function() {
//                 console.log(line);
//             }, s + m * 1000 + h * 60 * 1000 - offsetTime);
//         } else {
//             console.log(line);
//         }
//     });
// });

// method 2
var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;

var streamReader = fs.createReadStream(fileName).pipe(iconv.decodeStream('gbk'));
// var docData = '';
// streamReader.on('data', function(chunk) {
//     // chunk 只是一块数据
//     docData += chunk;
// });

// //文件读取完成
// streamReader.on('end', function() {
// // 
// });
const beginTime = new Date();
var rl = readline.createInterface({ input: streamReader });
rl.on('line', function(line) {
    task(line, beginTime);
});

function task(line, beginTime) {
    const matched = regex.exec(line);
    if (matched) {

        const offsetTime = new Date() - beginTime.getTime();
        const h = parseFloat(matched[1]);
        const m = parseFloat(matched[2]);
        const s = parseFloat(matched[3]);
        //到达指定时间执行一次
        setTimeout(function() {
            console.log(line);
        }, s + m * 1000 + h * 60 * 1000 - offsetTime);
    } else {
        console.log(line);
    }

}