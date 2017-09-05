var foo = require('./foo.js');
var Person = require('./Person.js');

// 暴露出来变量和方法
foo.sayHi();
console.log(foo.meesage);

// 暴露出来一个类（构造函数）

var xiaoming = new Person('xiaoming', 12);
// xiaoming.run();
console.log(xiaoming);
console.log(xiaoming.name);

xiaoming.run()
xiaoming.saysong();
