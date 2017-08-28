//node js  模块的使用

// 数据转换
function convert(input) {
  return parseFloat(input);
}

function add(a, b) {
  return convert(a) + convert(b);
}

function substrat(a, b) {
  return convert(a) - convert(b);
}

function multiply(a, b ) {
  return convert(a) * convert(b);
}

function divide(a, b) {
  return convert(a) / convert(b);
}


// node.js 它提供了exports 和require两个对象，其中exports 是模块的公开接口，
// require 用于从外部获取一个模块的接口，即所获取的exports对象
exports.add = add;
exports.substrat  =substrat;
exports.multiply = multiply;
exports.divide  = divide;