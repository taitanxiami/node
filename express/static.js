
var express= require('express');
var app  = express();
//使用静态资源
app.use(express.static('./public'));
app.get('/haha',function(req,res){
  res.send('this is a haha page');
});
app.listen(2999);
