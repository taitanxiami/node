
//简单的路由设计
var http = require('http');


http.createServer(function(req, res){

// /teacher/123456  
  var reqUrl = req.url;
  console.log(reqUrl);
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
  if(reqUrl.substr(0,9) == '/student/') {

    // text() 匹配就返回true
    var studentId  =  reqUrl.substr(9)
    console.log(studentId);
    if(/\d{9}/.test(studentId)) {
      res.end('您查询的学生id=' + studentId);
    }else {
      res.end('学生ID不正确');
    }
  }else if(reqUrl.substr(0,9) == '/teacher/') {

  }else {
    res.end('学生ID不正确');
  }
}).listen(2080, '127.0.0.1');
