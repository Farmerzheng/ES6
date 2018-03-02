"use strict";

// return 可以省略，省略的前提是只有一行return代码
var fn = function fn(x) {
  return x * x;
};
// 如果有两个参数需要加小括号
var fn2 = function fn2(x, y) {
  return x * y;
};

// 不是一行return代码，我们就需要加上{}
var fn3 = function fn3(x) {
  var a = 2;
  return a * x;
};