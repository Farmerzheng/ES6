### IDE ？
> 代码编辑器（sublime、VSCode、webstorm、Hbuidler、Atom）
 

### `cmd`窗口？
>windows 操作系统为我们提供的命令行窗口
>我们操作电脑一般用鼠标和键盘
>我们完全可以在 `cmd`窗口操作电脑，在`cmd`窗口操作电脑可以实现和鼠标键盘同样的功能

#### 如何打开计算机的cmd窗口？
 
 >`windows + R`  在弹出的窗口当中输入 `cmd`命令，
 然后回车确定
 
 >`powershell`窗口 本质上就是 `cmd` 窗口

>vscode 里面集成了 `cmd` 窗口

>vscode可以打开多个 `cmd`  窗口

![](./1.png)

### cmd窗口常用命令？

* `cd 空格 文件夹名称`  （进入某个文件夹）
* `ls`  （列出所有文件夹下面的文件）
* `cd  空格 .. ` （跳出某个文件夹）
* `调出上一次命令`  : 上箭头
* `调出下一次命令 `：下箭头


>传统的网页开发，没有模块化的概念，自从ES6诞生以来，网页编程进入了模块化开发的时代

>c++/java/node/php  等后台语言已经实现了模块化开发例如：node 当中的 http\file 等模块
      >http 模块 处理网络请求的
	  >file 模块 处理文件操作的

>ES6中的import和export这两个关键字现在任何浏览器中都是不支持的

### 如何才能让浏览器支持 import 、export?

>将export.js和 import.js通过webpack打包 


### 如何通过webpack将export.js和import.js打包？

1. 安装webpack?

   >npm install -g webpack

   * `npm` : node package manager (node包管理器)
   * `install` 安装
   * `-g` 等同于 `--global`
     >也就是可以写成 `npm install --global webpack` 

     >`-g `表示全局安装的意思



  



同时babel也无法将其转换为浏览器支持的ES5, 原因在于:

babel只是个翻译
假设a.js 里 import 了 b.js, 对a.js进行转码，只是翻译了a.js，并不会把b.js的内容给读取合并进来,

 如果想在最终的某一个js里，包含 a.js，b.js 的代码，那就需要用到打包工具


### node
---
```
是一个ES5/ES6 的一个运行平台（软件）

node 作用？
解析ES5、ES6编写的服务器程序
```
### 浏览器 
---
```
  是一个ES5/ES6 的一个运行平台（软件）
  浏览器作用？
  远程拉取服务器上面的网页，并解析，呈现给用户 
```

 #### node 和 浏览器的相同点
```
  1、都是运行在操作系统（windows\linux）上面的软件
  2、能够解析用ES5、ES6写的程序
```
 #### node 和 浏览器的不同点
 ```
 1、浏览器是解析的网页程序
    node解析的是服务器程序
 ```


### node 安装？
>官网下载安装


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

>为什么要全局安装webpack?
```
1、webpack仅仅是一个打包工具，将写好的项目打包完成后上线（打包完成后就没有webpack什么事了）
2、开发依赖安装，在我们使用webpack的命令的时候不太方便
```

   2.在根目录下创建webpack.config.js, 这个文件是用来描述一些要使用webpack工具进行打包的配置信息

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





