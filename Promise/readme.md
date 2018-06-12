## 回调函数

### 什么是回调函数？

当func1是func2的参数的时候，我们把func1 叫做回调函数

### 回调函数什么时候执行？

满足一定`条件`的时候就会执行

**条件** 怎么理解？

举例：

```
例子1：

function job1(job2,num){
     //满足条件，执行回调函数
     if(num>5){
          job2();
     }
}

例子2：

 简易 ajax请求
function ajax(url,method,callback){
    // 1.创建xmlhttprequest对象
    let xhr = new XMLHTTPRequest();    
    //2.open
    xhr.open(url,method);    
    //3.监听数据时候传输完成
    xhr.onreadystatechange = function(){
        if(xhr.status == 200 && xhr.readystate =4){
            //数据传输完成
            callback(xhr.responseText);
        }
    }    
    //4.send
    xhr.send()
}

```

### 回调函数的多层嵌套

 把大象装进冰箱，分为哪几步？

        1. 打开冰箱门
    2. 把大象拖进冰箱
    3. 关上冰箱门

```
代码实现：

job1: 打开冰箱
job2: 把大象装进冰箱
job3: 关上冰箱门

job1(function(){  //job1会调用此函数
        
        job2(function(){ //job2会调用此函数
            
                    job3(function(){ //job3会调用此函数

                        console.log('大象成功装进了冰箱')
                    })
            
        })
})

```

通过`把大象装进冰箱`的例子，我们发现，多层回调函数的嵌套代码可读性差，不容易理解

代码如果要是能像下面的例子写就好了（代码可读性强）：

```
job1.then(job2).then(job3)
```



## Promise

promise : 应允，答应，许诺

ES6 中 为我们提供了一个内置的构造函数 Promise

创建一个promise对象

```
let promise1 = new Promise(function(resolve,reject){

});
```

每一个promise对象都有三种状态  pending （进行中） 、 resolved（完成） 、rejected （失败）

promise对象状态改变有两种情况：

​          pending -----> resolved

​          pending------> rejected



如何改变promise对象的状态？

```
let promise1 = new Promise(function(resolve,reject){

       if(/*满足条件*/){
           resolve() //将promise1状态由  pending ----> resolved
       }else{
           reject()  //将promise1状态由  pending ----> rejected
       }

});
```

我们如何才能知道promise对象状态改变？

```
let promise1 = new Promise(function(resolve,reject){

       if(/*满足条件*/){
           resolve() //将promise1状态由  pending ----> resolved
       }else{
           reject()  //将promise1状态由  pending ----> rejected
       }

});

//promise 对象的then方法当中能够监听到promise的状态改变
promise1.then(function(){
    //promise对象状态由  pending ---->resolved 会调用此函数
},function(){
    //promise对象状态由  pending ---->rejected 会调用此函数
})
```

回顾：

如何创建promise对象？

promise对象由有几种状态？

如何改变promise对象的状态？

如何监听promise对象的状态改变？





练习1 、将 如下代码写成promise的形式



   业务需求： 添加购物车

   前台业务逻辑？

```
 //需要告诉服务器哪个用户、哪个商品？

        $.ajax({

            url:'………………'，

            data:{

                 userID: 1245676,//用户ID

                 productID: 8737292 //商品ID          

                },

            method:'POST',

            success:  function(data){

                if(data.status === 0){

                    alert('商品添加购物车成功')

                 }

          }

      })  

```



​         

   后台业务逻辑？ 



```
// 得到前台传过来的信息 userID 、productID

// 根据 userID 在数据库取出这个 用户模型 uerDoc（用户ID,地址列表，购物车列表，订单列表）


// 根据 productID 得到 商品模型 productDoc（商品价格，商品名称，商品描述）


// 将 productDoc 添加到 userDoc 的 购物车列表


        // 在数据库users集合中查找userId 对应的用户
        let findUserPromise = new Promise((resolve, reject) => {
            if (userId) {
                User.findOne({ "userId": userId })
                    .exec(function(err, userDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else {
                            resolve(userDoc)
                        }
                    })
            }
        });

        findUserPromise
            .then(function(userDoc) {
                // 在Goods模型中通过productId找到对应的商品模型
                return new Promise((resolve, reject) => {
                    Good.findOne({ 'productId': productId }, function(err, goodDoc) {
                        if (err) {
                            res.json({
                                status: "1",
                                error: err.message
                            })
                        } else if (goodDoc) {
                            let data = {
                                goodDoc: goodDoc,
                                userDoc: userDoc
                            }
                            resolve(data)
                        }
                    })
                });

            })
            .then((data) => {
                // 将商品模型插入用户模型的cartList列表

                let haveGoodDocBoolean = false;

                //  判断用户模型的cartList列表有没有商品模型
                for (let i = 0; i < data.userDoc.cartList.length; i++) {
                    // console.log(data.userDoc.cartList[i])
                    // console.log(data.userDoc.cartList[i].productId)
                    if (data.userDoc.cartList[i].productId == productId) {
                        haveGoodDocBoolean = true;
                        // 有
                        // cartList列表的商品数量自增
                        // console.log(data.userDoc.cartList[i].productNum)
                        // console.log(parseInt(data.userDoc.cartList[i].productNum) + 1)

                        data.userDoc.cartList[i].productNum = parseInt(data.userDoc.cartList[i].productNum) + 1;

                    }
                }

                // 如果cartList列表有此商品模型，直接返回
                if (!haveGoodDocBoolean) {
                    addGoodDocToUserDocCartList();
                }

                function addGoodDocToUserDocCartList() {
                    // 假设商品数量是1
                    data.goodDoc._doc.productNum = 1;

                    // 假设商品被选中
                    data.goodDoc._doc.checked = 1;

                    // 往用户模型的cartList数组中插入选中的商品模型
                    data.userDoc.cartList.push(data.goodDoc);

                }

                // 保存插入的商品模型模型
                data.userDoc.save(function(err, doc) {
                    if (err) {

                        res.json({
                            status: "1",
                            error: err.message
                        })
                    } else {
                        // 将插入成功的信息返回给前端
                        res.json({
                            status: "0",
                            message: '插入成功',
                            result: ''
                        })
                    }
                })


            })
    })
}


```

























