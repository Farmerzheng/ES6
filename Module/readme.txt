像import和export这两个关键字现在任何浏览器中都是不支持的, 

同时babel也无法将其转换为浏览器支持的ES5, 原因在于:

babel只是个翻译
假设a.js 里 import 了 b.js, 对a.js进行转码，只是翻译了a.js，并不会把b.js的内容给读取合并进来,

 如果想在最终的某一个js里，包含 a.js，b.js 的代码，那就需要用到打包工具

webpack工具可以将带有import和export语法的JS文件, 通过打包工具生成所有浏览器都支持的单个JS文件.

webpack是一个打包工具, 它是依赖于node.js运行的

1、安装webpack: npm install -g webpack

2、在根目录下创建webpack.config.js, 这个文件是用来描述一些要使用webpack工具进行打包的配置信息

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





