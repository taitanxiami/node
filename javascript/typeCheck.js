
//typeof
console.log(typeof(1));  //number
console.log(typeof(true));  //boolean

//注意
console.log(typeof(null));  //object

console.log(typeof(undefined));  // undefined
console.log(typeof(NaN));   // number
console.log(typeof(new Object));  //object
console.log(typeof(Function));  //function
console.log(typeof([1,2]));  //object

//instanceof
function arraysSimilar(arr1, arr2){
  //判断临界
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)){
      //如果里面有一个不是数组，就返回false
      return false;
    } 
    if (arr1.length != arr2.length){
      return false;
    } 
    //countMap1 = {'string': 2}, 表示出现的次数
    var i = 0, n = arr1.length ,countMap1 = {}, countMap2 = {},
    t1, t2, TYPES = ['string','boolean', 'number', 'undefined', 'null', 'function','date','window'];

    for(; i < n; i++){
      t1 = typeOf(arr1[i]);
      t2 =typeOf(arr2[i]);
      if(countMap1[t1]){
        countMap1[t1]++;
      }else {
        countMap1[t1] = 1;
      }
      if(countMap2[t2]){
        countMap2[t2]++;
      }else {
        countMap2[t2] = 1;
      }
    }


    function tpyeOf(ele){
      var r;
      if(ele === null){
        r = 'null';
      }else if(ele instanceof Array){
        r = 'array';
      }else if(ele === window){
        r = 'window';
      }else if(ele instanceof Date){
        r = 'date';
      }else {
        //基本类型判断，返回字符串
        r = typeof ele;
      }
      return r;
    }

    for(i = 0, n = TYPES.length; i < n; i++) {

      if(countMap1[TYPES[i]] !== countMap2[TYPES[i]]) {
        return false;
      }
    }
    return true;
  }





