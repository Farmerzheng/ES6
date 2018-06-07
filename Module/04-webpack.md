###      模块

​        砖块合理的堆砌能够建造楼房
  	软件工程当中的模块就像砖块一样，合理的组织这些模块就能够开发一个具有一定功能的软件

  	ES6 新增了模块的接口

​       ES6中模块主要由两个关键字构成：export和import。
       export:出口、输出------>用于输出模块
       import:进口、引入-------> 用于引入模块

​      输出、引入----->一个模块一般放在一个文件里面
      什么可以作为模块？------>函数、对象、类、变量、常量

​      export命令用于规定模块的对外接口，
      import命令用于输入其他模块。

​      一个模块就是一个独立的文件。
      该文件内部的所有变量，外部无法获取。
      如果你希望外部能够读取模块内部的某个变量，
      就必须使用export关键字输出该变量

​    传统的网页开发，没有模块化的概念，自从ES6诞生以来，网页编程进入了模块化开发的时代

```
c++/java/node/php  等后台语言已经实现了模块化开发,
例如：
node 当中的 http\file 等模块
http 模块 处理网络请求的
file 模块 处理文件操作的
```

```
ES6中的import和export这两个关键字现在任何浏览器中都是不支持的 

如何才能让浏览器支持 import 、export?

将export.js和 import.js通过webpack打包
```

### webpack 是什么?

> 是运行在 node 上面的一个软件包（模块）

### webpack 的作用？

> 打包前端写好的文件（js\css\图片\less\sass）
> 本质上是一个 node 包

### 如何通过 webpack 将 export.js 和 import.js 打包？

---

1.安装 webpack: npm install -g webpack

2.安装 package.json 中依赖的包（通过 npm install）

```
/*package.json*/
{
 "name": "webpack-class",
 "version": "1.0.0",
 "description": "module demo",
 "main": "import.js",
 "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
 },
 "author": "",
 "license": "ISC",
 "dependencies": {},
 "devDependencies": {
     "babel": "^6.23.0",
     "babel-cli": "^6.24.1",
     "babel-core": "^6.24.1",
     "babel-loader": "^7.0.0",
     "babel-preset-es2015": "^6.24.1",
     "webpack": "^2.6.1"
 }
}
```

3.在根目录下创建 webpack.config.js(webpack 包的配置文件)

```
/*webpack.config.js*/

ES6中模块用到的关键字：export、import、from
node中模块用到的关键字：require、module.exports

node中用的是commonJS 模块规范

//引入webpack模块，require 命令默认会从 node_modules文件夹下面加载模块，node_modules文件夹下面的模块在引入的时候无需书写路径，直接写模块名称就可以了，如果是自己写的模块必须要标明路径
var webpack = require("webpack");

//引入path模块
var path = require("path");

//module.exports 输出摸个模块
module.exports = {
	entry:"./import.js",//打包的入口
	output:{
        //输出文件的路径
        // __dirname 项目的根目录
        //dist 输出的文件夹名称
		path:path.resolve(__dirname,"dist"),
        //输出的文件名
		filename:"bundle.js"
	},
	module:{
		rules:[
           {
           	test:/\.js/,loader:"babel-loader"
           }
		]
	}
}

执行webpack命令时会依据webpack.config.js中的配置信息进行处理,
webpack会从import.js进入, 对该文件中的内容进行编译并打包,
最终会在dist目录下生成打包好的文件bundle.js,
编译打包过程中用到的工具在module对象的loaders中声明,
这里使用了babel-loader来对JS文件进行编译
```

### 配置文件

```
   配置文件一般有两种类型：json和js
   (例如package.json和webpack.config.js)

   一般在执行命令的时候会‘搜索检查甚至执行’配置文件里面的信息

   .json类型的配置文件是不能够在里面写注释的
   .js类型的配置文件能够在里面写注释
```
