

const m1 = $require('./module/module1.js');

console.log('m1 = ', m1);

function say(message) {
  console.log(message);
}



module.exports = {
    say:say,
    b:m1
};