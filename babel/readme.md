# Babel
## Babel 作用？

2015年6月， ES2015（即 ECMAScript 6、ES6） 正式发布。虽然 ES6 提出了许多激动人心的新特性，但由于目前许多浏览器不支持或者支持不好，没有普遍地推广起来。
而 Babel 的出现，让我们可以现在就使用最新的 JavaScript 语法，而不用等待浏览器提供支持。

Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。Babel 可以处理 ES6 的所有新语法

在线转换：http://babeljs.io/repl/


## Babel的历史？
 babel 5 是全家桶，包括各种package， plugins，尽可能的想通过你的一次安装，达到全能的效果。不过你现在安装npm install babel，会得到一个 warning。
 
 babel 6 是 2015年10月30号发布，主要做了以下更新：

拆分成几个核心包，babel-core,babel-node,babel-cli...
没有了默认的转换，现在你需要手动的添加 plugin。也就是插件化
添加了 preset，也就是预置条件。
增加了 .babelrc 文件，方便自定义的配置。

## 包？
babel 里面有好多的包，所以必须搞清楚他们都是干嘛的，才能让我们更好的使用这个工具。

babel-core
可以看做 babel 的编译器。babel 的核心 api 都在这里面，比如 transform，主要都是处理转码的
babel-cli
提供命令行运行 babel。也就是你可以 babel filename 去对文件转码。

如何使用Babel?

1、1，安装 nodejs
由于Babel 需要借助 npm 工具来安装，那么首先需要安装 nodejs


2、初始化项目 npm init（创建package.json文件）


3、babel-cli
Babel 的 CLI 是一种在命令行下使用 Babel 编译文件的简单方法。
　npm install -g babel-cli

4、安装babel-preset-es2015插件

　　npm install --save babel-preset-es2015

当然还有其他插件
  react插件
  npm install --save-dev babel-preset-react

5、在命令行输入：

　　babel es6.js --presets es2015

  输出：
    "use strict";

    var fn = function fn(x) {
    return x * x;
    };

   后面的参数--presets es2015表示使用该插件进行编译，
   如果不写上转换是没有效果的。

6、插件配置

  每一次都写上 ‘--presets es2015 ’ 参数是很麻烦的，
  可以在当前目录下新建配置文件 .babelrc

  接着在文件中写入：

{
    "presets": [
        "es2015"
    ]
}

那么就可以直接在命令行中使用babel es6.js进行转换
而无需添加表明所用插件的参数

7、Babel常用命令：

    a、转换es6.js文件并在当前命名行程序窗口中输出

　　babel es6.js

    b、将es6.js转换后输出到es5.js文件中（使用 -o 或 --out-file ）

　　babel es6.js -o es5.js 

　　babel es6.js --out-file es5.js

    c、实时监控es6.js一有变化就重新编译（使用 -w 或 --watch ）

　　babel es6.js -w --out-file es5.js

　　babel es6.js --watch --out-file es5.js

    d、编译整个src文件夹并输出到lib文件夹中（使用 -d 或 --out-dir ）

　　  babel src -d lib

　　  babel src --out-dir lib

    c、编译整个src文件夹并输出到一个文件中

　　 babel src --out-file es5.js

8、官方推荐的件批量转码方法

   在 package.json 文件中的 scripts 属性中添加一项
    "build": "babel src -d build"

   执行如下代码即可自动将 src 目录下的 js 文件自动进行转码并放入 build 目录下。
   npm run build


9、babel-polyfill 的作用

Babel 默认只转码 ES6 的新语法（syntax）
而不转换新的 API，
比如 Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise 等全局对象，
以及一些定义在全局对象上的方法（比如 Object.assign、Array.from）都不会转码。
如果想让这些方法运行，必须使用 babel-polyfill

安装：
npm install --save-dev babel-polyfill


