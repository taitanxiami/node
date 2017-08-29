const path = require('path');
const fs = require('fs');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname, './李炜 - 你不爱我.lrc'), function(error, data) {

    if (error) throw error;
    const lines = iconv.decode(data, 'gbk').split('\n');
    // [00:16.10]习惯被拒绝的人会先拒绝
    var regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
    lines.forEach(function(line) {
        const matched = regex.exec(line);

        if (matched) {

            const h = parseFloat(matched[1]);
            const m = parseFloat(matched[2]);
            const s = parseFloat(matched[3]);
            //到达指定时间执行一次
            setTimeout(function() {
                console.log(line);
            }, s + m * 1000 + h * 60 * 1000);
        } else {
            console.log(line);
        }


    });
});