
var net = require('net');
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question('What is you name? ',function(name){
  if(!name) {
    throw new Error('no found name');
  }


  //建立服务端链接
    var server = net.connect({port:2080,host:'192.168.1.10'}, ()=>{      
    // 监听服务端的数据返回
    server.on('data',function(chunk){

      try {
        chunk  = JSON.parse(chunk.toString().trim());
        console.log(chunk);
        // console.log('\n boardcast');
        console.log('message from '+ chunk.username);
        console.log(chunk.message);
        rl.prompt();
      } catch (error) {
        
      }
    });  
  });

  rl.setPrompt(name +' >');
  rl.prompt();
  
  rl.on('line', (line) => {
    var send = {
      procotol:'broadcast',
      from:name,
      message:line.toString().trim()
    };
    server.write(JSON.stringify(send));
    
    rl.prompt();
  }).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
  });

});