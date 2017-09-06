function Person(name, age) {
    this.name = name;
    this.age = age;
    this.run = function() {
        console.log('person can run');
    };
}


Person.prototype.sayHello = function() {
    console.log('Person say hello');
}
Person.prototype.saysong = function() {
    console.log('Person say song');
}


//这种写法污染原型链
// Person.prototype = {
//         saysong: function() {
//             console.log('唱歌');
//         },
//         sayhi: function() {
//             console.log('say hi');
//         }
//     }

    //暴露出来一个类,此时Person 就被视为一个构造函数
module.exports = Person;