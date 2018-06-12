### 箭头函数

#### 不带参数的箭头函数

> 普通函数

```
function add(){
    let a = 1;
    let b = 2;
    console.log(a+b)
}
```

> 箭头函数

```	
let add = ()=>{ //没有参数的时候小括号不能省略
    let a = 1;
    let b = 2;
    console.log(a+b)
  }
```

#### 带一个参数的箭头函数

> 普通函数

```	
function add(a){
    console.log(a);
}
```

> 箭头函数

```	
let add = a =>{ console.log(a) }//当有一个参数的时候可以省略()
let add = a => console.log(a) //错误，只有一行语句的时候才可以省略{}
```

#### 带有两个参数的箭头函数

> 普通函数

```
function add(a,b){
    console.log(a+b)
}
```

> 箭头函数

```
let add = (a,b)=>{ console.log(a+b) }
```

####  几种特殊情况

##### 省略()的情况

> 当有一个参数的额时候，可以省略（）
>
> 没有参数或者有多个参数的时候小括号不能省略

```
let add = a =>console.log(a) 
```

##### 省略{}的情况

> 当函数体只有一行代码

```
普通函数
function add(a,b){console.log(a+b)}
箭头函数
let add = (a,b)=>console.log(a+b)

```

##### 省略return 的情况

> 只有一行return语句的时候可以省略return关键字

```
普通函数
function minus(a,b){return a+b}
箭头函数
let minus = (a,b)=>a+b
```

#### 箭头函数中的this

> 箭头函数当中this的作用域是静态作用域

```
let zhangsan = {
    name:'zhangsan',
    age:18,
    growUp:function(){
        //每隔1s钟年龄长一岁
        let self = this
        setInterval(function(){
           //this 指 window
           //self 指 zhangsan
            self.age++
        },1000)
    }
}

用箭头函数改写 zhangsan的 growUp 方法

let zhangsan = {
    name:'zhangsan',
    age:18,
    growUp:function(){
        //每隔1s钟年龄长一岁
        setInterval(()=>{
        //this 指 zhangsan
          this.age++;
        },1000)
    }
}
```

