

var cal = require('./module/caculator.js');

// 1. 接收参数
var argv = process.argv.slice(2);
console.log(argv)
// 2. 参数处理
if(argv.length !== 3) {
  console.log('参数不合法');
  throw  new Error('参数不合法');
}

var a  = argv[0];
var operator = argv[1];
var b = argv[2];

var result = 0
switch(operator) {
  case '+':
    result = cal.add(a, b);
    break;
  case '-':
    result = cal.substrat(a, b);
    break; 
  case 'x':
    result = cal.multiply(a, b);
    break; 
  case '/':
    result = cal.divide(a, b);
    break;
  default:
    throw new Error('参数不合法0');
}


//打印结果
console.log(result);