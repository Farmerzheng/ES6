### 将如下代码改写成ES6形式

```
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    speak: function() {
        console.log("我的名字是" + this.name)
    }
}
Person.eat = function() {

}
```
ES6的形式
```
class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log("我的名字是" + this.name)
    }
    static eat() {

   }
}
```

### 将如下代码改写成ES6形式
```
let zhangsan = {
    name: 'zhangsan',
    age: 18,
    speak: function() {
    console.log(this.name + ' can speak')
    }
}
```
ES6形式

```
let zhangsan = {
    name:'zhangsan',
    age:18,
    speak(){
        console.log(this.name + ' can speak')
    }
}

```
### 将如下代码改写成ES6形式


```
function Plane(name, age) {
    this.name = name;
    this.age = age;
}

Plane.prototype = {
    shoot: function() {
    console.log(this.name + " can shoot")
   }
}

function EnemyPlane(name, age, speed) {
    this.name = name;
    this.age = age;
    this.speed = speed;
}

EnemyPlane.prototype = new Plane();


EnemyPlane.prototype.moveDown = function() {
console.log(this.name + "能够向下移动")
}
```
ES6形式
```
class Plane{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    shoot() {
    console.log(this.name + " can shoot")
   }
}
class EnemyPlane extends Plane{
    constructor(name,age,speed){
     super(name,age);
     this.speed = speed
    }
    moveDown() {
      console.log(this.name + "能够向下移动")
    }
}

```



### 将如下函数改写成箭头函数的形式
```
function add(a,b){
    a = a+1;
    b = a+1;
    return a*b
}

function pi() {
    return 3.14;
};
function minus(a){
    return a*10
}
```

箭头函数形式
```
var add = (a,b)=>{
    a++;
    b++;
    return a+b
}
var pi = () => 3.14
var minus = a => a*10
```


### 将如下箭头函数改写成普通函数
```
var fn = x => {
    if (x > 0) {
      return x * x;
    } else {
      return -x * x;
    }
}

var fn = (x, y) => x * x + y * y

var fn = () => 3.14
```
### 普通函数
```
function fn(x){
    if (x > 0) {
      return x * x;
    } else {
      return -x * x;
    }
}

function fn(x,y){
    return x * x + y * y
}

function fn(){
    return 3.14
}
```

### 将如下字符串拼接改写成es6形式

```
let str = a + '小于' + b;
```
ES6
```
let str =`${a}小于${b}`
```


 ### 编写export.js文件, 此文件的功能？ 导出常量 R = 5, 导出常量 ERR_OK = 0, 导出随机函数 randomFn 

```
/*export.js*/
const R = 5;
const ERR_OK = 0;
function randomFn(){

}
export {R,ERR_OK,randomFn}
```


### 编写import.js文件,导入 export.js文件的random函数
```
/*import.js*/
import {randomFn} from './export.js'
```