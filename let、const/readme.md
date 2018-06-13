###  局部作用域与全局作用域

> 全局作用域？

```
如果一个变量 a , 
在程序的任何地方都能够被访问到，
那么这个变量a的作用域是全局作用域
```

> 局部作用域

```
‘局部作用域’ 分为 ‘函数作用域’ 和 ‘块作用域’

> 函数作用域？
  在函数内部声明的变量在函数外面访问不到 
 function add(){
     var a = 1;
     console.log(a)
 }
 add()//1
 console.log(a)//undefined
 
>块作用域？

 在 if(){}else{}、for(){}等语句的大括号当中
 声明的变量的作用域是块作用域
 
 ES5中不存在块作用域,ES6中存在块作用域 为什么？
 
 因为ES6新增了两个声明变量的关键字 let const
 
 let 和 const 声明的变量是存在块作用域的
 
 let 和 const 声明的变量也存在函数作用域
 
 var 声明的变量不存在块作用域，但是存在函数作用域 

```

> 例子1

```
//let 、const、var 三个关键字声明的变量都存在函数作用域
function add(){
    let a = 1;
    const b = 1;
    var c = 2
}
console.log(a,b)//undefined，undefined, undefined
```

> 例子2

```
//let const 声明的变量存在块作用域
//var  声明的变量不存在块作用域
if(true){
    let a = 1;
    const b = 2;
    var c = 3;
}
console.log(a,b,c)//undefined,undefined,3
```

> 例子3

```
//for 循环的 () 中用let 声明的变量存在块作用域
for(let i = 1 ; i < 100 ; i++){
    
}
for(var j = 1 ; j < 100 ; j++){
    
}
console.log(i,j)// undefined , 100
```

> 例子4

```
const a = 1;
a = 4; //不能为常量赋值
console.log(a)//报错

//const 声明的是常量a，a声明以后不能改变
//也就是说 const 声明的变量不能再次赋值
```

