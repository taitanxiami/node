
var express = require('express');
var app = express();
var router = require('./controllers/router');

//设置模板引擎
app.set('view engine','ejs');

//访问静态资源
app.use(express.static('./public'));


// 访问所有相册
app.get('/', router.showAllAblums);

app.listen(3001, function(error){
  if(error) {return;}  
  console.log('server is listen port 3001');
});