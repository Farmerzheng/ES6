### 基本数据类型和引用数据类型的区别？

> 基本数据类型变量里面存放的是值

```
var a = 1

var b = 1

console.log(a===b)//true

```

> 引用数据类型里面存放的是内存地址

```
var person1 = {
    name:'zhangsan'
}

var person2 = {
    name:'zhangsan'
}

console.log(person1==person2)//true

function func1(){
    let a = 1;
    let b = 2;
    console.log(a+b)
}

function func2(){
    let a = 1;
    let b = 2;
    console.log(a+b)
}

console.log(func1 === func2)//false

```

###   普通函数的特点？

  1、是引用数据类型

  2、内部有默认的变量  this 、arguments 变量

​        (如果一个变量没有声明的话，我们引用这个变量会抛出错误)

```
function func1(){
    console.log(this)
}

let zhangsan = {
    speak:function(){
        console.log(this)
    }
}

func1()//window
zhangsan.speak()//zhangsan
```

```
function add(){
    console.log(arguments)
}
add(1,2,3)//[1,2,3]
```

### 构造函数

1. 构造函数本质上就是一个普通函数
2. 构造函数是用来穿件对象的
3. 构造函数的首字母大写



### 类与对象

1. 什么是类？

   ```
   猫类、狗类
   
   ECMAScript 中类就是  Function
   
   ```

   > 类的创建？
   >
   > ES5方法

   ```
   function Person(name,age){
       this.name = name;
       this.age = age;
   }
   Person.prototype = {
       speak:function(){
           console.log(this.name + ' age is' + this.age) //ES5
           console.log(`${this.name}age is${this.age}`) //ES6
       }
   }
   ```

   > ES6 方法

   ```
   class Person{
       constructor(name,age){
           this.name=name;
           this.age=age;        
           }
       speak(){
               console.log(`${this.name}age is${this.age}`)
       }
   }
   ```

   > 如何利用类创建对象？

   ```
   ES5 、ES6中创建对象的方法都是一样的
   
   let zhangsan = new Person('zhangsan',18) 
   ```

   

   

### 类的继承



> ES5

```
function Plane(size,position){
    this.size = size;
    this.position = position;
}
Plane.prototype = {
    update:function(){
        console.log('update')
    }
}

function EnemeyPlane(size,position,color){
   this.size = size;
   this.position = position;
   this.color = color
}
EnemyPlane.prototype = {
    moveDown:function(){
        console.log('moveDown')
    }
}

 让 EnemyPlane 类继承 Plane 类？
EnemyPlane.prototype = new Plane()//无参数

let enemy = new EnemeyPlane({width:20,height:30},{left:30},'red');
enemy.moveDown();
enemy.update();

enemy 为什么有update方法？
    因为 enemy 是由 EnemyPlane 类创建出来的
    EnemyPlane 类继承自 Plane 类
    Plane 类的原型对象上有 update  方法

```

> ES6

```
class Plane{
    constructor(size,position){
        this.size = size;
        this.position = position;
    }
    update(){
        console.log('update')
    }
}

class EnemeyPlane extends Plane{
    constructor(size,position,color){
        //调用父类的构造函数
        super(size,position);
        this.color=color
    }
    moveDown(){
        console.log('moveDown')
    }
}

let enemy = new EnemeyPlane({width:20,height:30},{left:30},'red');
enemy.moveDown();
enemy.update();

```

### 静态方法

> 为 Plane类添加静态方法 fly
>
> 静态方法是通过类本身调用的
>
> 动态方法是通过类创建的对象去调用的

```	
//ES5
function Plane(){    
}
Plane.fly = function(){    
}
//调用 fly方法
Plane.fly()
```

```	
//ES6
class Plane{
    constructor(){        
    }
    static fly(){        
    }
}
Plane.fly()
```



### 字面量形式创建对象

> ES5

```	
let zhangsan = {
  name:'zhangsan',
  age:18,
  speak:function(){
      console.log(`${this.name} can speak`)
  }
}
```

> ES6

```
let zhangsan = {
  name:'zhangsan',
  age:18,
  speak (){
      console.log(`${this.name} can speak`)
  }
}
```

