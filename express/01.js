

var express = require('express');

var app = express();

app.get('/',function (req, res){
  res.send('你好');
});

app.get('/haha',function(req,res){
    res.send('这是一个哈哈页面');
});

app.get(/^\/student\/([\d]{10})$/, function(req,res){

  res.send('学生信息：'+ req.params[0]);
});

app.get('/teacher/:gonghao', function(req,res){
  
    res.send('教师信息：'+ req.params['gonghao']);
  });
app.listen(3000);


