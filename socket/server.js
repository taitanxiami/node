

var net = require('net');


var server = net.createServer(function(socket){

  console.log(socket);
  console.log('欢迎' + socket.remoteAddress);
  socket.on('data',function(chunk){
    console.log(chunk.toString());
    // 发消息哦
    socket.write(' word!');
  });
});

var port = 2080;
server.listen(port, function(error){
if(error) {
  console.log('服务端启动失败');
}else {
  console.log(`服务端已经运行${port}。。。`);
}




});