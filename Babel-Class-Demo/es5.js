"use strict";

// 无参数,小括号不能省略
var fn1 = function fn1() {
  return 1;
};

// 有一个参数，小括号可以省略
var fn2 = function fn2(x) {
  return x * x;
};

// 如果有两个及以上参数需要加小括号
var fn3 = function fn3(x, y) {
  return x * y;
};

//箭头函数大括号什么情况下可以省略？
// 只有一行return代码

// 不是一行return代码，我们就需要加上{}
var fn4 = function fn4(x) {
  var a = 2;
  return a * x;
};

var fn5 = function fn5() {
  return { age: 1 };
};
