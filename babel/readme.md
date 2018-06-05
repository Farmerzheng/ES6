# Babel
### Babel 作用？
---
```
   2015年6月， ES2015（即 ECMAScript 6、ES6） 正式发布。
   虽然 ES6 提出了许多激动人心的新特性，但由于目前许多浏览器不支持或者支持不好，没有普遍地推广起来。
   而 Babel 的出现，让我们可以现在就使用最新的 JavaScript 语法，而不用等待浏览器提供支持。

   Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。
   Babel 可以处理 ES6 的所有新语法

   例如，Babel 能够将新的 ES2015 箭头函数语法：

const square = n => n * n;
转译为：

const square = function square(n) {
  return n * n;
};

  在线转换：http://babeljs.io/repl/
```
   Babel 的用途并不止于此，它支持语法扩展，能支持像 React 所用的 JSX 语法，同时还支持用于静态类型检查的流式语法（Flow Syntax）。

### Babel的历史？
---

  babel 5 是全家桶，包括各种package， plugins，尽可能的想通过你的一次安装，达到全能的效果。
 
  babel 6 是 2015年10月30号发布，主要做了以下更新：

  1. 模块化：所有的内部组件都变成了单独的包。打开Babel在GitHub上的地址,  我们看到了Packages(包), 它分为了Core Packages (babel-core) 和 Other 如 (babel-cli, babel-polyfill), 这些都是一个一 个单独的包.

　　看一下 核心包 babel-core: Babel-core is the Babel compiler itself; it exposes the babel.transform method, where transformedCode = transform(src).code. 
 babel-core 就是Babel 编译器它自身， 提供了一个方法 babel.transform

　　再看一下包 babel-cli:  Babel-cli is the CLI tool that runs babel-core and helps with outputting to a directory, a file, stdout and more.  Babel-cli 是命令行工具, 它运行 babel-core, 输出目录、文件等，可以看到它依赖 babel- core.

　　总结： 每一个内部组件都变成了独立的包，每个包又都定义了一些轻量级的公共API, 可以供其他包使用。
 2. 插件化: 这就是GitHub页面中提到的 Presets and  Plugins.

  　Plugins are the heart of Babel and what make it work.  插件是Babel 的核心, 是插件让Babel 正常工作, 主要是Transform Plugins(转换器插件), 就是它把ES6+ 转换成ES5.  Presets are just simply an array of plugins. 预设仅仅是插件的集合。

### 简单的小例子
---

　　1.  新建一个babel 文件夹, 然后在该文件夹下面 npm init 创建一个package.json 文件, npm init –y 可以快速创建一个package.json 文件。

　　2. 创建两个文件夹, src(用于存放编译前的文件), lib(用于放编译后的文件)。在src 目录下新建一个index.js 文件用于编写代码， 这里写一个箭头函数如下：

let sum = (num1, num2) => num1 + num2;
console.log(sum(3, 5))

　　3. 这里只想用命令行工具对代码进行编译. 根据上面提到的模块化思想，如果我们只想使用某些内部组件执行某种构建任务，只需要单独的去安装相应的包就可以了. 这里，我们只想用一下babel-cli 命令行工具, 那么我们只需要安装这个包，npm install --save-dev babel-cli, 安装之后，这里用到一个命令，”babel src –d lib”

　　4，为了使用这个命令, 我们需要把这个命令放到 npm scripts 中. 打开package.json 文件找到 scripts , 添加 “build”: “babel src –d lib” 以后在 命令行中输入npm run build, 就可以执行编译。


安装 Babel

### babel-cli

Babel 的 CLI 是一种在命令行下使用 Babel 编译文件的简单方法。

安装

 npm install --global babel-cli

我们可以这样来编译我们的第一个文件：

 babel my-file.js

这将把编译后的结果直接输出至终端。
使用 --out-file 或着 -o 可以将结果写入到指定的文件。.

 babel example.js --out-file compiled.js
 或
 babel example.js -o compiled.js

如果我们想要把一个目录整个编译成一个新的目录，可以使用 --out-dir 或者 -d。.

 babel src --out-dir lib
 或
 babel src -d lib


在项目内运行 Babel CLI
尽管你可以把 Babel CLI 全局安装在你的机器上，但是按项目逐个安装在本地会更好。

有两个主要的原因。

1.在同一台机器上的不同项目或许会依赖不同版本的 Babel 并允许你有选择的更新。

2.对工作环境没有隐式依赖，项目有很好的可移植性。

要在（项目）本地安装 Babel CLI 可以运行：

 npm install --save-dev babel-cli

注意:卸载全局安装的 Babel ，可以运行：

 npm uninstall --global babel-cli

安装完成后，`package.json` 应该如下所示：


{
  "name": "my-project",
  "version": "1.0.0",
  "devDependencies": {
    "babel-cli": "^6.0.0"
  }
}

把运行命令写在 npm scripts 里，可以使用包的本地版本。

只需将 "scripts" 字段添加到你的 package.json 文件内并且把 babel 命令写成 build 字段。.

  {
    "name": "my-project",
    "version": "1.0.0",
+   "scripts": {
+     "build": "babel src -d lib"
+   },
    "devDependencies": {
      "babel-cli": "^6.0.0"
    }
  }
现在可以在终端里运行：
npm run build

这将以与之前同样的方式运行 Babel，但这一次我们使用的是本地babel。



