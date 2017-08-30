
var net = require('net');


var socket =  net.connect(2080, function(){

  console.log('连接到服务端');   
  socket.write('Hello');
});

//收到消息
socket.on('data',function(chunk){
  console.log(chunk.toString());
  //关闭连接
  socket.end();
});

socket.on('end',function(){
  console.log('客服端断开链接')
});