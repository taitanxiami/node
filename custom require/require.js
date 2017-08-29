
// 实现一个require 函数
'use strict';
function $require(id) {
  // 找到文件
  const fs = require('fs');
  const path = require('path');
  const fileName = path.join(__dirname, id);
  const dirName = path.dirname(fileName);
  //获取代码
  let code =  fs.readFileSync(fileName, 'utf8');
  // 执行代码 => 需要营造一个私有空间
  const module = {id: fileName, exports: {} };
  const exports = module.exports;
  code = `(function($require, module, exports, __dirname, __filename){
    ${code}
  })($require, module, exports, dirName,fileName);`;

// 执行代码
   eval(code);
  
  // 返回值
  return module.exports;
}

const m4 = $require('./module/index.js');
m4.say('m4 say hello to you');

