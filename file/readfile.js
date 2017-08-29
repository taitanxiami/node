
const path = require('path');
const fs = require('fs');


//异步读取文件
console.time('async');
const filepath = path.join( __dirname, '../node module练习/07.js');
// console.log(filepath);
// console.log(__dirname);
fs.readFile(filepath, function(error, data){

  if(error) throw error;

});
console.timeEnd('async');


//同步读取文件

console.time('sync');
try {
  fs.readFileSync(filepath,'utf8');    
} catch (error) {
    throw error;
}
console.timeEnd('sync');

