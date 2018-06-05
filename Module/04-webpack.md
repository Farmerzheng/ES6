


>传统的网页开发，没有模块化的概念，自从ES6诞生以来，网页编程进入了模块化开发的时代

>c++/java/node/php  等后台语言已经实现了模块化开发例如：node 当中的 http\file 等模块
      >http 模块 处理网络请求的
	  >file 模块 处理文件操作的

>ES6中的import和export这两个关键字现在任何浏览器中都是不支持的

### 如何才能让浏览器支持 import 、export?

>将export.js和 import.js通过webpack打包 


### 如何通过webpack将export.js和import.js打包？

1. 全局安装webpack?
  
  * npm install -g webpack   

    * `npm` : node package manager (node包 
    * `install` 安装
    * `-g` 等同于 `--global`
     >也就是可以写成 `npm install --global webpack` 

     >`-g `表示全局安装的意思

2. 作为开发依赖安装webpack?
  * npm install --save-dev webpack

3. 作为项目依赖安装webpack?
  * npm install --save webpack  
  
   npm install -g webpack   



### webpack 是什么?
>是运行在node上面的一个软件包（模块）

### webpack的作用？
>打包前端写好的文件（js\css\图片\less\sass）
>本质上是一个打包工具

### webpack 如何使用？
---
```
例子：将写好的 export.js和import.js 打包成一个文件
     打包好的js文件能够被浏览器识别（目前所有浏览器都不支持import \export等关键字）
```

   1.安装webpack: npm install -g webpack

   2.安装依赖的包

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



   3.在根目录下创建webpack.config.js, 
   这个文件是用来描述一些要使用webpack工具进行打包的配置信息

webpack.config.js:

var webpack = require("webpack");
var path = require("path");
module.exports = {
	entry:"./import.js",
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"bundle.js"
	},
	module:{
		loaders:[
           {
           	test:/\.js/,loader:"babel-loader"
           }
		]
	}
}

通过该文件可以使用webpack打包工具, 
webpack会从import.js进入, 对该文件中的内容进行编译并打包, 
最终会在dist目录下生成打包好的文件bundle.js, 
编译打包过程中用到的工具在module对象的loaders中声明, 
这里使用了babel-loader来对JS文件进行编译(包括从ES6转换为ES5以及打包)


>为什么要全局安装webpack?
```
1、webpack仅仅是一个打包工具，将写好的项目打包完成后上线（打包完成后就没有webpack什么事了）
2、开发依赖安装，在我们使用webpack的命令的时候不太方便
```


