

var net = require('net');

var clients = [];

var server = net.createServer((socket)=>{

  clients.push(socket);

  console.log(`Welcome  ${socket.remoteAddress} to the chatroom`);

  //发送广播
  function broadcast(chunk) {
      // {broadcast:protocal, from: username, message:message}

      clients.forEach(function(clinet){
        var sendMessage = {
          procotol:chunk.procotol,
          from:chunk.username,
          message:chunk.message
        }
        clinet.write(JSON.stringify(sendMessage));
  
      }) ;
  }
  socket.on('data',(chunk)=>{
    chunk = JSON.parse(chunk.toString().trim());
      broadcast(chunk);  
  });


})

server.listen(2080);