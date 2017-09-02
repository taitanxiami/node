

//同步获取目录下的所有文件夹



var http = require('http');
var fs  = require('fs');


http.createServer(function(req, res){


//读取文件夹
  fs.readdir('../custom require/',function(error,files){

    console.log(files.length);
    var folders = [];

    //迭代器
    (function interator(i){

      if(i == files.length - 1) {
        console.log(folders);
        return;
      }
      //检测文件状态
      fs.stat('../custom require/' + files[i], function(error, stats){
          if(stats.isDirectory()){
            folders.push(files[i]);
          }
          interator(++i);          
      });
    })(0)

  });


}).listen(2081, '127.0.0.1');
