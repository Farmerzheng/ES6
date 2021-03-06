# Babel

### Babel 简介？

---

2015 年 6 月， ES2015（即 ECMAScript 6、ES6） 正式发布。

虽然 ES6 提出了许多激动人心的新特性（模块化、类、let和const、解构、Promise、箭头函数、默认参数），

但由于目前许多浏览器不支持或者支持不好，没有普遍地推广起来。

而 Babel 的出现，让我们可以现在就使用最新的 JavaScript 语法，而不用等待浏览器提供支持。

Babel 是一个转换编译器，它能将 ES6 转换成可以在浏览器中运行的代码。Babel 可以处理 ES6 的所有新语法

Babel本质上是一个node包

我们学过哪些  node 包？（webpack、less）

例如，Babel 能够将 ES2015 箭头函数语法：

    const square = n => n * n;
    
    转译为：
    
    var square = function square(n) {
      return n * n;
    };

在线将 ES6 转换为 ES5：http://babeljs.io/repl/

### Babel 的作用？

1. 将ES6转换成 ES5

2. 将React 的 JSX 语法转换成 js

   React : facebook开发的一款js框架，目前你若能够熟练使用React,薪资在20+

   React Native : 是在React基础上开发的js框架（也用JSX语法），是用来开发跨平台APP 

3. 将Flow Syntax 语法转换成 js



### Babel 的历史？

---

#### babel5

babel 5 是全家桶，包括各种 package， plugins，尽可能的想通过你的一次安装，达到全能的效果。

#### babel6

babel 6 是 2015 年 10 月 30 号发布，主要做了以下更新：

##### 模块化(将Babel拆分成很多包)

所有的内部组件都变成了单独的包。

分为：Core Packages (babel-core) 和 Other 如 (babel-cli, babel-polyfill),

babel-core 是 Babel 编译器的核心包，提供了一个方法 babel.transform

babel-cli 包提供了一些我们操作babel-core 的命令

```
只要包名是 ***-cli 字样，说明这个包是一个‘命令行工具包’

说白了就是为你使用***包提供命令的

例如： babel-cli 包就是为我们使用 babel 提供命令行工具的
```

总结：每一个内部组件都变成了独立的包，每个包又都定义了一些轻量级的公共 API , 可以供其他包使用。

​        API ： application programming interface (应用程序编程接口，简称接口)

​        API本质上是`函数或者对象的方法或属性`

​        例如：test.js

        ```
let zhangsan = {
    name:'zhangsan',
    age:18,
    speak(){
        console.log(`${this.name} can speak`)
    }
}
        ```

test.js 的接口是？ zhangsan（具体点就是：zhangsan.name\zhangsan.age\zhangsan.speak()）

##### 插件化（增强了Babel的扩展性）

Presets and Plugins (预设和插件)

插件是 Babel 的核心,是插件让 Babel 正常工作

预设(Presets)仅仅是插件的集合。

Presets  and  Plugins  的区别？

>  Presets 是  Plugins  的集合
>
>  

即使我们安装了 Babel,
它也没有转换 ES5 代码的功能,
还需要安装相应的插件

![1529458618689](images\1529458618689.png)

为了方便对插件进行管理，
Babel 提供了它自己的配置文件 .babelrc,

插件和预设需要在.babelrc文件中配置

.babelrc 文件的作用？

>  管理插件

![1529458420379](images\1529458420379.png)



.babelrc 文件位置在哪？

> 项目的根目录下

babel-preset-es2015 是插件还是预设？

>预设

babel-preset-es2015的作用？

> ES6转换成ES5的所有插件都集成在babel-preset-es2015预设上面
> 将ES6转换成ES5

#### babel5与babel6 的区别？

babel5 是 全家桶

babel6 是 汉堡、鸡翅、可乐、薯条、鸡块、鸡腿、鸡肉卷

### 预设 Preset 

---

预设 preset, 有两种，
一个是按年份(babel-preset-es2017)，
一个是按阶段(babel-preset-stage-0)。
这主要是根据 tc39 委员会 ECMASCRPIT 发布流程来制定的。

1. 按年份：TC39 委员会决定，
   从 2016 年开始，每年都会发布一个版本，
   它包括每年期限内完成的所有功能 ，
   同时 ECMAScript 的版本号也按年份编制，
   就有了 ES2016, ES2017.  
    也就有了 babel-preset-es2016, babel-preset-es2017，
   对每一年新增的语法进行转化。
   babel-preset-latest 就是把所有
   es2015, es2016, es2017 全部包含在一起了。

2. 按阶段： 对于 ECMAScript 的功能，每一个提案都会经过 5 个阶段：

   stage-0 : 稻草人阶段， 就是一个想法
   stage-1 : 建议阶段，值得去努力
   stage-2 : 草案阶段， 初始的细节描述
   stage-3 : 候选阶段，草案基本完成，浏览器厂商实验性的实现
   stage-4 : 完成阶段，添加到下一年的版本中

   Babel 对应不同的阶段,提供了不同的预设，
   babel-preset-stage-0，
   babel-preset-stage-1，
   babel-preset-stage-2，
   babel-preset-stage-3.
   这里没有 stage-4,是因为它将添加到下一年的版本中，也就是到了按年份进行预设。
   所以我们还可以得出几个结论：

   1. 按年份进行的预设，其实是 tc39 委员会已经批准的，浏览器将要实现的功能，
   2. stage-X 的预设，是没有被批准的功能
   3. stage-0 阶段的预设包含的插件大于 stage-1 阶段包含的插件,
      stage-1 > stage-2,
      stage-2 > stage-3,  
      所以我们安装 stage-X 预设时，只选装一个就可以了。

#### 预设怎么用？

> 安装预设包 ： npm install --save-dev babel-preset-es2015
>
> 在.babelrc 文件中配置预设
>
> {
>
> ​    "presets": [
>
> ​        "es2015"
>
> ​    ]
>
> }

#### 预设的作用？

> 若果你的代码时ES2015 写的，那么就要安装 babel-preset-es2015 预设
>
> 若果你的代码时ES2016 写的，那么就要安装 babel-preset-es2016 预设
>
> 很明显，预设为babel转义代码提供了依据

### babel 包

---

babel 里面有好多的包，所以必须搞清楚他们都是干嘛的，才能让我们更好的使用这个工具。 

#### babel-core

可以看做 babel 的编译器。babel 的核心 api 都在这里面，比如 transform，主要都是处理转码的。

#### babel-cli

提供命令行运行 babel。

安装

```
npm install --save-dev babel-cli

npm isntall babel-cli -g
```

使用对应就是

```
node_module/.bin/babel script.js --out-file script-compiled.js

babel script.js --out-file script-compiled.js
```

#### 小例子

##### 创建项目文件夹

   我们这里创建的文件夹名字是 ： demo

##### 初始化项目

> npm init

##### 创建文件`es6.js`

```
/*es6.js*/
let a = x => x * x
```

##### 安装插件

> npm install --save-dev babel-preset-env babel-cli
>
> 注意：如果安装多个node包，包之间用空格隔开
>
> ​          babel-preset-es2015 包 已经被 babel-preset-env 取代

##### 创建.babelrc文件

在项目根目录下创建，如果是json文件，里面不能写注释

```
{
    "presets": [
        "babel-preset-env"
    ]
}
```

##### 运行命令

> node_modules/.bin/babel es6.js  -o  es5.js
>
> 或者
>
> node_modules/.bin/babel es6.js  --out-file  es5.js



#### babel-node

​ 是 babel-cli 下面的一个 command，

主要是实现了 node 执行脚本和命令行写代码的能力。

举两个例子就清楚了。

node 环境肯定是不支持 jsx 语法的

```
// test.js
const React = require('react');
const elements = [1, 2, 3].map((item) => {
  return (
    <div>{item}</div>
  )
});

console.log(elements);
```

执行 test.js，会报错，不认识这个语法。

```
node test.js //报错，因为node 环境肯定是不支持 jsx 语法的
```

但是使用 babel-node 就可以。

```
node_modules/.bin/babel-node --presets react test.js

或者

node_modules/.bin/babel-node test.js

如果要是执行`node_modules/.bin/babel-node test.js`这条命令，

需要在.babelrc文件中进行如下配置

/*.babelrc*/
{
    presets:[
        "react"
    ]
}
```

通过例子基本已经介绍了 babel-node 的用法了，就是方便我们平常开发时候，写一些脚本的。

它不适用于生产环境。另外，babel-node 已经内置了 polyfill，并依赖 babel-register 来编译脚本。



#### babel-register

##### 作用？

>  用在 node 跑程序，做实时编译用的

```
npm install babel-register --save-dev
```

 babel-node 可以通过它编译代码，其实就是一个编译器。

我们同样可以在代码中引入它 `require('babel-register')`，并通过 node 执行我们的代码。

 babel-node 其实就是在内存中写入一个临时文件，在顶部引入 babel-register，然后再引入我们的脚本或者代码

```
node_modules/.bin/babel-node test.js

如果test.js文件中有 require('babel-register') 
那么命令完全可以这样写
node_modules/.bin/node test.js
```

 babel-node 包的原理是通过改写 node 本身的 require，然后在 require 其他模块的时候，触发 babel 编译。

举个例子，

还是 node 中执行 jsx，要通过 babel 编译。

我们可以把 jsx 的代码 a.js 编译完输出到一个 b.js，然后 `node b.js` 也是可以执行的。

但是太麻烦，不利于开发。

让我们看一下通过 register 怎么用：

```
// register.js 引入 babel-register，并配置。然后引入要执行代码的入口文件
require('babel-register')({ presets: ['react'] });
require('./test')
```

```
// test.js 这个文件是 jsx...
const React = require('react');
const elements = [1, 2, 3].map((item) => {
  return (
    <div>{item}</div>
  )
});
console.log(elements);
```

```
// 执行  node register.js
```

#### babel-runtime

```
npm install babel-runtime --save-dev

注意：babel的所有包都只能作为开发依赖安装

      项目上线的时候我们不需要babel       
```

引用了 core-js  、regenerator、helpers

##### core-js

core-js 是用于 JavaScript 的组合式标准化库，

它包含

```    
    es5 （e.g: object.freeze）,

    es6的 promise，symbols, collections, iterators, typed arrays，

    es7+提案等等的 polyfills 实现。
```

它几乎包含了所有 JavaScript 最新标准的垫片

```
//需要单个引用
require('core-js/array/reduce');
require('core-js/object/values');
```

##### regenerator

实现了 generator/yeild， async/await。

所以 babel-runtime 是单纯的实现了 core-js 和 regenerator 引入和导出，

比如这里是 filter 函数的定义，

做了一个中转并处理了 esModule 的兼容。

```
module.exports = { "default": require("core-js/library/fn/array/filter"), __esModule: true };
```

##### helpers

还记得提 babel-external-helpers 的时候，介绍 helpers 了吗。babel-runtime 里面的 helpers 就相当于我们上面通过 babel-external-helpers 生成的 helpers.js。只不过它把每个 helper 都单独放到一个文件夹里。这样，配合 transform-runtime 使用的时候，需要用 helper 转化的时候，就从 babel-runtime 中直接引用了。

```
var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
```

##### 文件结构：



![文件结构](https://segmentfault.com/img/remote/1460000011164344)

##### 使用

可以单独引入`require('babel-runtime/core-js/object/values');`

不过这些模块都做了 esModule 的兼容处理，也就是上面引入的模块是`{ "default": require("core-js/library/fn/array/filter"), __esModule: true }`这样的，要使用还得加上 `.default`。所以我们期待的是，最好能有帮我们自动处理的插件，`babel-plugin-transform-runtime`就是用来做这个的。这个我们放到 plugin 去讲。

#### babel-polyfill

```
npm install babel-polyfill --save
```

babel-polyfill 是为了模拟一个完整的ES2015 +环境，旨在用于应用程序而不是库/工具。

并且使用babel-node时，这个polyfill会自动加载（这个我们在介绍 babel-node 的最后已经说了）。

也就是说，它会让我们程序的执行环境，模拟成完美支持 es6+ 的环境，

毕竟无论是浏览器环境还是 node 环境对 es6+ 的支持都不一样。

它是以重载全局变量 （E.g: Promise）,还有原型和类上的静态方法（E.g：Array.prototype.reduce/Array.form），从而达到对 es6+ 的支持。



我们结合 babel-register 去使用一下

```
// index.js
require('babel-core/register')({});
require('babel-polyfill');
require('./async');
```

```
// async.js
function a() {
  console.log('begin');
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
  console.log('done');
}
a();

node index.js
```

完美运行。



### babel Plugins

要说 plugins 就不得不提 babel 编译的过程。babel 编译分为三步：

1. parser：通过 [babylon](https://github.com/babel/babylon) 解析成 AST。
2. transform[s]：All the plugins/presets ，进一步的做语法等自定义的转译，仍然是 AST。
3. generator： 最后通过 [babel-generator](https://github.com/babel/babel/blob/master/packages/babel-generator) 生成 output string。

所以 plugins 是在第二步加强转译的，所以假如我们自己写个 plugin，应该就是对 ast 结构做一个遍历，操作。

#### babel-plugin-transform-runtime

上面我们知道，transform-runtime 是为了方便使用 babel-runtime 的，

它会分析我们的 ast 中，是否有引用 babel-rumtime 中的垫片（通过映射关系），

如果有，就会在当前模块顶部插入我们需要的垫片。试一下：

```
npm install --save-dev babel-plugin-transform-runtime
```

```
// 编译前
console.log(Object.values({ 1: 2 }));
```

```
node_modules/.bin/babel --plugins transform-runtime values.js
```

```
// 编译后
'use strict';

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

onsole.log((0, _values2.default)({ 1: 2 }));
```

另外，它还有几个配置

```
// 默认值
{
  "plugins": [
    ["transform-runtime", {
      "helpers": true,
      "polyfill": true,
      "regenerator": true,
      "moduleName": "babel-runtime"
    }]
  ]
}
```

如果你只需要用 regenerator，

不需要 core-js 里面的 polyfill 那你就可以在 options 中把 polyfill 设为 false。

helpers 设为 false，

就相当于没有启用 `babel-plugin-external-helpers` 的效果，

比如翻译 async 的时候，

用到了 asyncToGenerator 函数，

每个文件还会重新定义一下。

moduleName 的话，

就是用到的库，

你可以把 babel-runtime 换成其他类似的。

#### transform-runtime 对比 babel-polyfill

其实通过上面的介绍我们已经了解他们是干什么的了，

这里再稍微总结区分一下吧。

我在这里把 babel-runtime 和 babel-plugin-transform-runtime 

统称为 transform-runtime，因为一起用才比较好。

> babel-polyfill 是当前环境注入这些 es6+ 标准的垫片，
>
> 好处是引用一次，不再担心兼容，
>
> 而且它就是全局下的包，代码的任何地方都可以使用。
>
> 缺点也很明显，
>
> 它可能会污染原生的一些方法而把原生的方法重写。
>
> 如果当前项目已经有一个 polyfill 的包了，
>
> 那你只能保留其一。
>
> 而且一次性引入这么一个包，
>
> 会大大增加体积。
>
> 如果你只是用几个特性，就没必要了，
>
> 如果你是开发较大的应用，
>
> 而且会频繁使用新特性并考虑兼容，那就直接引入吧。





> transform-runtime 是利用 plugin 自动识别并替换代码中的新特性，

> 你不需要再引入，
>
> 只需要装好 babel-runtime 和 配好 plugin 就可以了。
>
> 好处是按需替换，检测到你需要哪个，
>
> 就引入哪个 polyfill，
>
> 如果只用了一部分，
>
> 打包完的文件体积对比 babel-polyfill 会小很多。
>
> 而且 transform-runtime 不会污染原生的对象，方法，
>
> 也不会对其他 polyfill 产生影响。
>
> 所以 transform-runtime 的方式更适合开发工具包，库，
>
> 一方面是体积够小，
>
> 另一方面是用户（开发者）不会因为引用了我们的工具，
>
> 包而污染了全局的原生方法，产生副作用，
>
> 还是应该留给用户自己去选择。
>
> 缺点是随着应用的增大，
>
> 相同的 polyfill 每个模块都要做重复的工作（检测，替换），
>
> 虽然 polyfill 只是引用，编译效率不够高效。
>
> 值得注意的是，
>
> instance 上新添加的一些方法，
>
> babel-plugin-transform-runtime 是没有做处理的，
>
> 比如 数组的 includes, filter, fill 等，
>
> 这个算是一个关键问题吧，
>
> 直接推荐用 polyfill。

> 另外，
>
> 关于 babel-runtime 为什么是 dependencies 依赖。
>
> 它只是一个集中了 polyfill 的 library，
>
> 对应需要的 polyfill 都是要引入项目中，
>
> 并跟项目代码一起打包的。
>
> 不过它不会都引入，
>
> 你用了哪个，
>
> plugin 就给你 require 哪个。
>
> 所以即使你最终项目只是 
>
> `require('babel-runtime/core-js/object/values')`其中的一个文件，
>
> 但是对于这包来说，也是生产依赖的。

![img](https://segmentfault.com/img/remote/1460000011245833)

注意：

babel-polyfill 并不是一定会污染全局环境，

在引入这个 js，并运行的时候，

它会先判断当前有没有这个方法，

再看要不要重写。如上图



### presets

各种配置 plugin 实在是费劲，es6+ 编译要加入好多 plugins，比如为了在 node 中使用 esmodule，要把 esmodule 转化成 commomjs，使用 `transform-es2015-modules-commonjs`，还有 asyncToGenerator，React jsx转化等等，不仅要装好多，还要配好多。

presets 就是 plugins 的组合，你也可以理解为是套餐... 主要有

- [env](https://babeljs.io/docs/plugins/preset-env/)
- [es2015](https://babeljs.io/docs/plugins/preset-es2015/)
- [react](https://babeljs.io/docs/plugins/preset-react/)
- [lastet](https://babeljs.io/docs/plugins/preset-latest/)
- [stage-x](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-) 具体的语法属于哪个 stage 可参照[tc39](https://github.com/tc39/proposals)

#### babel-preset-env

这个 preset 真是神器啊，

它能根据当前的运行环境，

自动确定你需要的 plugins 和 polyfills。

通过各个 es标准 feature 在不同浏览器以及 node 版本的支持情况，

再去维护一个 feature 跟 plugins 之间的映射关系，

最终确定需要的 plugins。

### example(save&global)

------

尽管你可以把 Babel-cli 全局安装在你的机器上，但是按项目逐个安装在本地会更好。

有两个主要的原因。

> 1.在同一台机器上的不同项目或许会依赖不同版本的 Babel 并允许你有选择的更新。
>
> 2.对工作环境没有隐式依赖，项目有很好的可移植性。



#### install-global

1. `npm init`  初始化项目,生成项目的配置文件package.json

2. 在根目录下新建.babelrc文件，内容如下

   > {
   >
   > ​    "presets": [
   >
   > ​        "es2015"
   >
   > ​    ]
   >
   > }

3. 安装转义用的包（全局安装）

   > npm  install -g babel-cli
   >
   > npm install -g babel-preset-es2015

4. 在根目录下新建es6.js文件，内容：

   > var fn = x => x * x 

5. 输入命令，将es6.js 转换成es5语法

   > babel es6.js 
   >
   >   在命令行输出编译好的文件
   >
   > babel es6.js -o es5.js
   >
   >  编译好的文件输出到es5.js中
   >
   > babel  src  -d  lib
   >
   >   将src文件夹下的所有文件输出到lib文件夹下

#### install-save-dev

1. 1.测试本地安装的babel-cli包，需要先卸载全局的babel-cli包 

   > npm uninstall -g babel-cli

2. `npm init`  初始化项目,生成项目的配置文件package.json

3. 在根目录下新建.babelrc文件，内容如下

   > {
   >
   > ​    "presets": [
   >
   > ​        "es2015"
   >
   > ​    ]
   >
   > }

4. 安装转义用的包（本地安装）

   > npm  install -save-dev babel-cli
   >
   > npm install --save-dev babel-preset-es2015
   >
   > 安装完成后查看package.json中 ‘devDependencies’变化 

5. 在根目录下新建es6.js文件，内容：

   > var fn = x => x * x 

6. 输入命令，将es6.js 转换成es5语法

   >   方法一

   >  node_modules/.bin/babel  es6.js 
   >
   >   在命令行输出编译好的文件
   >
   >  node_modules/.bin/babel  es6.js -o es5.js
   >
   >  编译好的文件输出到es5.js中
   >
   >  node_modules/.bin/babel   src  -d  lib
   >
   >   将src文件夹下的所有文件输出到lib文件夹下

   > 方法二

   > 在package.json中设置scripts命令,然后运行 npm run ***
   >
   > 
   >
   >   "scripts": {
   >
   > ​        "test1": "babel es6.js",
   >
   > ​        "test2": "babel es6.js -o es5.js",
   >
   > ​        "test3": "babel  src  -d  lib"
   >
   > ​    }

   



### babel  command

---

1. 这将把编译后的结果直接输出至终端。

​        babel my-file.js

2. 使用 --out-file 或着 -o 可以将结果写入到指定的文件。

​       babel example.js --out-file compiled.js
       或
       babel example.js -o compiled.js

3. 如果我们想要把一个目录整个编译成一个新的目录

​       babel src --out-dir lib
        或
       babel src -d lib



## 总结

babel 的这些包，一般情况下不会单独使用

一般会配合一些自动化工具（gulp、webpack）

![1529463857888](C:\Users\王争\AppData\Local\Temp\1529463857888.png)