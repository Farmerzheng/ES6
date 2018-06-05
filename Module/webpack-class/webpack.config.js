// node 中的模块是遵循 commonJS 模块规范
// require export

// ES6 中的模块规范 import export 


// 引入webpack 模块
// 如果引入的是 node_modules 文件夹下面的模块,路径不用谢
var webpack = require("webpack");

//引入path模块
var path = require("path");

// 输出模块（类似ES6中的 export {object}）
module.exports = {
    // 程序的主入口
    entry: "./import.js",
    // 输入文件配置
    output: {
        // 输出路径
        // __dirname 根目录
        // dist 根目录下的dist 文件夹
        path: path.resolve(__dirname, "dist"),
        // 输出文件的名字
        filename: "bundle.js"
    },
    // 依赖的其他模块
    module: {
        loaders: [{
            test: /\.js/,
            loader: "babel-loader"
        }]
    }
}