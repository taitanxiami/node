
// 实现一个require 函数
'use strict';
function $require(id) {
  // 找到文件
  const fs = require('fs');
  const path = require('path');
  const fileName = path.join(__dirname, id);

  //给模块添加缓存
  $require.cache = $require.cache || {};
  if($require.cache[fileName]) {
    // 如果有缓存就直接返回
    return $require.cache[fileName].exports;
  }
  const dirName = path.dirname(fileName);
  //获取代码
  let code =  fs.readFileSync(fileName, 'utf8');
  // 执行代码 => 需要营造一个私有空间
  const module = {id: fileName, exports: {} };
  const exports = module.exports;
  code = `(function($require, module, exports, __dirname, __filename){
    ${code}
  })($require, module, exports, dirName, fileName);`;

  //如果没有缓存就赋值添加到缓存
  $require.cache[fileName] = module;
// 执行代码
   eval(code);  
  // 返回值
  return module.exports;
}


// 测试custom require
const index = $require('./module/index.js');
index.say('m4 say hello to you');
index.b.say();

// 测试模块的缓存效果
const date = $require('./module/date.js');
setInterval(function(){
  console.log(date.getTime());
},1000);
