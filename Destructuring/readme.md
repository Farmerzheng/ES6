

### 数组解构

####  一维数组解构

```
let arr = [ 1 , 2 , 3 ];

如何 获取数组当中的第一个元素、第二个元素、第三个元素？

方法一：

let a = arr[0];

let b = arr[1];

let c = arr[2];

方法二：

let [a,b,c] = arr

console.log(a,b,c)//1,2,3

```

#### 多维数组解构

```	
let arr = [1,[2,[3]]] //多维数组

//如何获取arr里面的各个元素？

方法一：

let a = arr[0]//1
let b = arr[1][0]//2
let c = arr[1][1][0]//3

方法二：

let [a,[b,[c]]] = arr;
console.log(a,b,c)// 1,2,3

```

#### [ a ,  ...b ]

```
let arr = ['a','b','c','d'];

如何获取到数组的后三个元素？

let [a,...b] = arr;

console.log(a,b)//'a',['b','c','d']
```

#### [ , ,c ]

```
let arr = [true,false,'123'，{name:'zhangsan'}]

//如何获取 {name:'zhangsan'}

方法一：
let a = arr[3]

方法二：
let [,,,d] = arr

//如何获取 {name:'zhangsan'} 中的 'zhangsan'

let [,,,d] = arr
console.log(d['name']) //正确
console.log(d.name) //正确
console.log(d[name]) //错误
```

#### 数组解构的好处

能够快速的获取数组当中的元素



### 对象解构

#### 简单的解构

```
let zhangsan = {name:'zhangsan',age:18}

如何获取属性 name 和 age 的值？

方法一：

console.log(zhangsan.name,zhangsan.age)
console.log(zhangsan['name'],zhangsan['age'])

方法二：

let {name:nameA,age:ageA} = zhangsan
console.log(nameA,ageA) // 'zhangsan',18

方法三：
// 当属性名与变量名一致时，可以简写：
let {name,age} = zhangsan

```

#### 复杂的解构

```
let wanglaoshi = {
    name:'zhangsan',
    age:18,
    girlFriends:[
        {
            name:'dongfan',
            age:8,
            sex:'nice'
        },
        {
            name:'shuxu',
            age:80,
            sex:'low'
        },
        {
            name:'kaixuan',
            age:-1,
            sex:'big'
        }
    ]
}

需求：获取到 kaixuan 的 sex 属性值？

方法一：
  wanglaoshi.girlFriends[2].sex

方法二：

 let {
      name,
      age,
      girlFriends:[
                    dongfan,
                    shuyu,
                    {
                       name:kaixuanName,
                       age:kaixuanAge,
                       sex:kaixuanSex
                    }
                   ]
      } = wanglaoshi
      

```

#### 解构实例

```
利用对象解构修改如下代码：

function Person(obj){
    this.name = obj.name;
    this.age = obj.age;
    this.speed = obj.speed;
}
new Person({name:'zhangsan',age:18,speed:'100km'});

修改为：

function Person({name,age,speed}){
    this.name = name;
    this.age = age;
    this.speed = speed;
}
new Person({name:'zhangsan',age:18,speed:'100km'});

```





