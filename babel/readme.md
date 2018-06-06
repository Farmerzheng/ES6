# Babel

### Babel 作用？

---

2015 年 6 月， ES2015（即 ECMAScript 6、ES6） 正式发布。
虽然 ES6 提出了许多激动人心的新特性，
但由于目前许多浏览器不支持或者支持不好，
没有普遍地推广起来。
而 Babel 的出现，让我们可以现在就
使用最新的 JavaScript 语法，而不用等待浏览器提供支持。

Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。
Babel 可以处理 ES6 的所有新语法

例如，Babel 能够将新的 ES2015 箭头函数语法：

    const square = n => n * n;

    转译为：

    const square = function square(n) {
      return n * n;
    };

Babel 的用途并不止于此，它支持语法扩展，
能支持像 React 所用的 JSX 语法，
同时还支持用于静态类型检查的流式语法（Flow Syntax）。

在线将 ES6 转换为 ES5：http://babeljs.io/repl/

### Babel 的历史？

---

babel 5 是全家桶，包括各种 package， plugins，
尽可能的想通过你的一次安装，达到全能的效果。

babel 6 是 2015 年 10 月 30 号发布，主要做了以下更新：

1.  模块化：所有的内部组件都变成了单独的包。

打开 Babel 在 GitHub 上的地址,  
 我们看到了 Packages(包),
它分为了 Core Packages (babel-core)
和 Other 如 (babel-cli, babel-polyfill),
这些都是一个一 个单独的包.

核心包 babel-core
babel-core 就是 Babel 编译器它自身，
提供了一个方法 babel.transform

包 babel-cli:
Babel-cli 是命令行工具,
它运行 babel-core,
输出目录、文件等，
可以看到它依赖 babel- core.

总结：
每一个内部组件都变成了独立的包，
每个包又都定义了一些轻量级的公共 API,
可以供其他包使用。

2.  插件化:

这就是 GitHub 页面中提到的 Presets and Plugins.

插件是 Babel 的核心,
是插件让 Babel 正常工作,
主要是 Transform Plugins(转换器插件),
就是它把 ES6+ 转换成 ES5.  
 预设(Presets)仅仅是插件的集合。
即使我们安装了 Babel,
它也没有用来转换 ES5 代码的功能,
还需要安装相应的插件
为了方便对插件进行管理，
Babel 提供了它自己的配置文件 .babelrc,
我们在根目录下建立 .babelrc 文件
Babel 提供了插件预设（Presets），
预设就是一些插件的集合，
安装预设后，就是安装了一堆插件
npm install --save-dev babel-preset-es2015
通过名字可以看出，
这是 es2015 预设，
只要是 es2015 转换成 es5 用到的插件，
它都会用装上，
要在 .babelrc 文件下写
{"presets": ["es2015"] }

### 预设 Preset

---

官方预设 preset, 有两种，
一个是按年份(babel-preset-2017)，
一个是按阶段(babel-preset-stage-0)。
这主要是根据 tc39 委员会 ECMASCRPIT 发布流程来制定的。

1.  按年份：TC39 委员会决定，
    从 2016 年开始，每年都会发布一个版本，
    它包括每年期限内完成的所有功能，
    同时 ECMAScript 的版本号也按年份编制，
    就有了 ES2016, ES2017.  
     也就有了 babel-present-2016, babel-preset-2017，
    对每一年新增的语法进行转化。
    babel-preset-latest 就是把所有
    es2015, es2016, es2017 全部包含在一起了。

2.  按阶段： 对于 ECMAScript 的功能，每一个提案都会经过 5 个阶段：

    stage-0 : 稻草人阶段， 就是一个想法
    stage-1 : 建议阶段，值得去努力
    stage-2 : 草案阶段， 初始的细节描述
    stage-3 :候选阶段，草案基本完成，浏览器厂商实验性的实现
    stage-4 :完成阶段，添加到下一年的版本中

    Babel 对应不同的阶段,
    提供了不同的预设，
    babel-preset-stage-0，
    babel-preset-stage-1，
    babel-preset-stage-2，
    babel-preset-stage-3.
    这里没有 stage-4,
    是因为它将添加到下一年的版本中，
    也就是到了按年份进行预设。
    所以我们还可以得出其他的几个结论：

    1， 按年份进行的预设，其实是 tc39 委员会已经批准的，
    浏览器将要实现的功能，

    2.  stage-X 的预设，是没有被批准的功能

    3.  stage-0 阶段的预设包含的插件大于 stage-1 阶段包含的插件,
        stage-1 > stage-2,
        stage-2 > stage-3,  
        所以我们安装 stage-X 预设时，只选装一个就可以了。

    4.  如果没有提供 es2015 相关的预设，
        preset-stage-X 这种阶段性的预设也不能用。

### 简单的小例子

（全局安装包与本地安装包例子）

尽管你可以把 Babel-cli 全局安装在你的机器上，

但是按项目逐个安装在本地会更好。

有两个主要的原因。

1.在同一台机器上的不同项目或许会
依赖不同版本的 Babel 并允许你有选择的更新。

2.对工作环境没有隐式依赖，项目有很好的可移植性。

### 常用 babel 命令

---

1、
这将把编译后的结果直接输出至终端。

babel my-file.js

2、
使用 --out-file 或着 -o 可以将结果写入到指定的文件。

babel example.js --out-file compiled.js
或
babel example.js -o compiled.js

3、
如果我们想要把一个目录整个编译成一个新的目录

babel src --out-dir lib
或
babel src -d lib
