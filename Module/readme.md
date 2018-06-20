# 前端的发展

近年来 Web 应用变得更加复杂与庞大，Web 前端技术的应用范围也更加广泛。 

从复杂庞大的管理后台到对性能要求苛刻的移动网页，

再到类似 React Native 的原生应用开发方案，

Web 前端工程师在面临更多机遇的同时也会面临更大的挑战。 

通过直接编写 JavaScript、CSS、HTML 开发 Web 应用的方式已经无法应对当前 Web 应用的发展。

近年来前端社区涌现出许多新思想与框架，下面将一一介绍它们。

## 模块化

模块化是指把一个复杂的系统分解到多个模块以方便编码。

很久以前，开发网页要通过命名空间的方式来组织代码，例如 jQuery 库把它的 API 都放在了 `window.$` 下，在加载完 jQuery 后其他模块再通过 `window.$` 去使用 jQuery。 这样做有很多问题，其中包括：

-   命名空间冲突，两个库可能会使用同一个名称，例如 [Zepto](http://zeptojs.com/) 也被放在 `window.$` 下；
-   无法合理地管理项目的依赖和版本；
-   无法方便地控制依赖的加载顺序。

当项目变大时这种方式将变得难以维护，需要用模块化的思想来组织代码。

### CommonJS

[CommonJS](http://www.commonjs.org/) 是一种使用广泛的 JavaScript 模块化规范，

核心思想是通过 `require` 方法来`同步`地加载依赖的其他模块，通过 `module.exports` 导出需要暴露的接口。 

CommonJS 规范的流行得益于 Node.js 采用了这种方式，

后来这种方式被引入到了网页开发中。

采用 CommonJS 导入及导出时的代码如下：

```
// 导入
const moduleA = require('./moduleA');

// 导出
module.exports = moduleA.someFunc;
```

CommonJS 的优点在于：

- 代码可复用于 Node.js 环境下并运行，

- 例如做同构应用

  （什么是前后端同构呢？就是前后端都可以使用同一套代码生成页面，页面既可以由前端动态生成，也可以由后端服务器直接渲染出来 ）；

- 通过 NPM 发布的很多第三方模块都采用了 CommonJS 规范。

CommonJS 的缺点在于这样的代码无法直接运行在浏览器环境下，必须通过工具转换成标准的 ES5。

> CommonJS 还可以细分为 CommonJS1 和 CommonJS2，区别在于 CommonJS1 只能通过 `exports.XX = XX` 的方式导出，CommonJS2 在 CommonJS1 的基础上加入了 `module.exports = XX`的导出方式。 CommonJS 通常指 CommonJS2。

### AMD(require.js)

[AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition) 也是一种 JavaScript 模块化规范，

与 CommonJS 最大的不同在于它采用`异步`的方式去加载依赖的模块。

 AMD 规范主要是为了解决针对浏览器环境的模块化问题，

最具代表性的实现是 [requirejs](http://requirejs.org/)

Require.js是一个非常小巧的JavaScript模块载入框架，是AMD规范最好的实现者之一 

#### require.js例子

#####  1. 下载require.js

##### 2.创建项目目录

![1529482539223](images\1529482539223.png)

##### 3. 创建文件 

  alert.js

```
// 弹框效果模块
define(function() {
    $('#btn').on('click', function() {
        alert('王老师上课不讲课，带着学生看视频，结果被办公室某些老湿告状了！！！')
    })
})
```

index.html

```
<!DOCTYPE html>
<html>

<head>
    <script type="text/javascript" src="src/js/require.js"></script>
    <script type="text/javascript">
    
        //指明模块的路径
        require.config({
            paths: {
                "jquery": "src/js/jQuery",
                "alert": "src/js/alert",
                "tab": "src/js/tab",
                "carousel": "src/js/carousel"
            }
        });

        //引入模块
        require(["jquery"], function() {
            //以下模块依赖jQuery
            require(["alert"]);
            require(["carousel"]);
            require(["tab"]);
        })
    </script>
</head>

<body>
    <span>body</span>
    <button id='btn'>按钮</button>
</body>

</html>
```



##### 4.运行html文件

右击index-01.html---》在浏览器打开---》报错，错误代码如下

```
require.js:2420 Failed to load file:///D:/H5/ES6/Module/AMD/demo-require.js/js/a.js: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.
```

通过代码分析，我们得到结论？

要在服务器环境下运行 index-01.html

> npm init
>
> npm install browsersync --save-dev
>
> browser-sync   start   --server

​    



AMD规范 的优点在于：

- 可在不转换代码的情况下直接在浏览器中运行；

    commonJS 规范和 ES6模块规范 浏览器不能直接运行，需要编译打包才行

- 可异步加载依赖；

- 可并行加载多个依赖；

   ```
      //以下模块依赖jQuery
      require(["alert"]);
      require(["carousel"]);
      require(["tab"]);
      
      同时下载三个模块，不是一个下载完成后再下载另一个
   ```

  

AMD 的缺点在于 JavaScript 运行环境没有原生支持 AMD，

需要先导入实现了 AMD 的库（require.js）后才能正常使用。

### ES6 模块化

ES6 模块化是欧洲计算机制造联合会 ECMA 提出的 JavaScript 模块化规范，它在语言的层面上实现了模块化。浏览器厂商和 Node.js 都宣布要原生支持该规范。它将逐渐取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

采用 ES6 模块化导入及导出时的代码如下：

```
// 导入
import { readFile } from 'fs';
import React from 'react';
// 导出
export function hello() {};
export default {
  // ...
};
```

ES6 模块虽然是终极模块化方案，但它的缺点在于目前无法直接运行在大部分 JavaScript 运行环境下，必须通过工具转换成标准的 ES5 后才能正常运行。

### 样式文件中的模块化

除了 JavaScript 开始模块化改造，前端开发里的样式文件也支持模块化。 

以 LESS 为例，把一些常用的样式片段放进一个通用的文件里，

再在另一个文件里通过 `@import` 语句去导入和使用这些样式片段。

```
@import "lib.less";
```

---

## 新框架

在 Web 应用变得庞大复杂时，采用直接操作 DOM 的方式去开发将会使代码变得复杂和难以维护， 许多新思想被引入到网页开发中以减少开发难度、提升开发效率。

### React

[React](https://facebook.github.io/react/) 框架引入 JSX 语法到 JavaScript 语言层面中，以更灵活地控制视图的渲染逻辑。

```
let has = true;
render(has ? <h1>hello,react</h1> : <div>404</div>);
```

这种语法无法直接在任何现成的 JavaScript 引擎里运行，必须经过转换。

### Vue

[Vue](https://vuejs.org/) 框架把一个组件相关的 HTML 模版、JavaScript 逻辑代码、CSS 样式代码都写在一个文件里，这非常直观。

```
<!--HTML 模版-->
<template>
  <div class="example">{{ msg }}</div>
</template>

<!--JavaScript 组件逻辑-->
<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<!--CSS 样式-->
<style>
.example {
  font-weight: bold;
}
</style>
```

### Angular2

[Angular2](https://angular.io/) 推崇采用 TypeScript 语言去开发应用，并且可以通过注解的语法描述组件的各种属性。

```
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>`
})
export class AppComponent {
  title = 'Tour of Heroes';
}
```

---

## 新语言

JavaScript 最初被设计用于完成一些简单的工作，在用它开发大型应用时一些语言缺陷会暴露出来。 CSS 只能用静态的语法描述元素的样式，无法像写 JavaScript 那样增加逻辑判断与共享变量。 为了解决这些问题，许多新语言诞生了。

### ES6

ECMAScript 6.0（简称 ES6）是 JavaScript 语言的下一代标准。它在语言层面为 JavaScript 引入了很多新语法和 API ，使得 JavaScript 语言可以用来编写复杂的大型应用程序。例如：

-   规范模块化；
-   Class 语法；
-   用 `let` 声明代码块内有效的变量 ，用 `const` 声明常量；
-   箭头函数；
-   async 函数；
-   Set 和 Map 数据结构。

通过这些新特性，可以更加高效地编写代码，专注于解决问题本身。但遗憾的是不同浏览器对这些特性的支持不一致，使用了这些特性的代码可能会在部分浏览器下无法运行。为了解决兼容性问题，需要把 ES6 代码转换成 ES5 代码，[Babel](https://babeljs.io/) 是目前解决这个问题最好的工具。 Babel 的插件机制让它可灵活配置，支持把任何新语法转换成 ES5 的写法。

### TypeScript

[TypeScript](https://www.typescriptlang.org/) 是 JavaScript 的一个超集，

由 Microsoft 开发并开源，

除了支持 ES6 的所有功能，还提供了静态类型检查。

采用 TypeScript 编写的代码可以被编译成符合 ES5、ES6 标准的 JavaScript。

 将 TypeScript 用于开发大型项目时，其优点才能体现出来，

因为大型项目由多个模块组合而成，

不同模块可能又由不同人编写，

在对接不同模块时静态类型检查会在编译阶段找出可能存在的问题。

 TypeScript 的缺点在于语法相对于 JavaScript 更加啰嗦，

并且无法直接运行在浏览器或 Node.js 环境下。

```
// 静态类型检查机制会检查传给 hello 函数的数据类型

function hello(content: string) {
  return `Hello, ${content}`;
}
let content = 'word';
hello(content);
```

### Flow

[Flow](https://flow.org/) 也是 JavaScript 的一个超集，

它的主要特点是为 JavaScript 提供静态类型检查，

和 TypeScript 相似但更灵活，

可以让你只在需要的地方加上类型检查。

### LESS

LESS可以让你用程序员的方式写 CSS。它是一种 CSS 预处理器，基本思想是用和 CSS 相似的编程语言写完后再编译成正常的 CSS 文件。

```
@blue: #1875e7;
div {
  color: $blue;
}
```

采用LESS 去写 CSS 的好处在于可以方便地管理代码，抽离公共的部分，通过逻辑写出更灵活的代码。 和 SCSS 类似的 CSS 预处理器还有SASS 等。

---

使用新语言可以提升编码效率，但是必须把源代码转换成可以直接在浏览器环境下运行的代码。
