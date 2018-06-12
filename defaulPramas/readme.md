```
ES5 中的默认参数

function Person(name,age){
    //'zhangsan'和 18 是默认参数
   this.name = name||'zhangsan';
   this.age = age || 18
}

ES6 中的默认参数

function Person(name='zhangsan',age=18){
    //'zhangsan'和 18 是默认参数
       this.name = name;
       this.age = age
}
```
