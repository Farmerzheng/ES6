## 什么是npm?
***
```
npm （`node package manager` node包的管理者）

npm 本质上是一个node包，是 Node 官方提供的包管理工具，他已经成了Node 包的标准发布平台，用于 Node 包的发布、传播、依赖控制。

npm包的作用是什么？
管理（发布、下载、更新）node生态系统的所有包

npm包为我们提供了许多命令，这些命令都以 `npm` 开头

npm包是集成在node程序当中的，不用刻意下载安装
```



### 本地安装了npm包的作用？
---
```
通过本地的npm包可以与远程的`npm服务器`建立连接（npm服务器存放着很多的node包，这些包都是全球的开发者上传上去的）

npm 是随同 Node 一起安装的包管理工具，能解决 Node 代码部署上的很多问题，常见的场景有以下几种：

* 允许用户从 `npm 服务器`下载别人编写的第三方包到本地使用。

* 允许用户将自己编写的包上传到 `npm 服务器`供别人使用。

它的一个很重要的作用就是：将开发者从繁琐的包管理工作（版本、依赖等）中解放出来，更加专注于功能的开发。
```
### node 生态系统？
---
```
>node包的总和
```




### 如何使用 NPM?
***
 npm 不需要单独安装。在安装 Node 的时候，会连带一起安装 npm

 1. `npm init`
    >npm init 用来初始化项目，生成一个 package.json 文件。它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

       ```
       package.json 的作用？
        整个项目的配置文件，是对整个项目的描述（项目名称、项目的版本、项目的git仓库地址、项目的命令行、项目的软件许可协议、项目依赖的包名称）
      ```

 2. `npm list`
    >npm list 命令以树形结构列出当前项目安装的所有模块，以及它们依赖的模块。
    ```
    npm list 与 ls 的区别？

    npm list : 列出所有安装的node包
    ls : 列出当前文件夹下面的所有文件

    ```

 3. `npm install`
```
    install：安装

    使用 npm 安装包的命令格式为：    
    npm [install/i] [package_name]  

    例如：
    1、 全局安装 webpack包？
    命令：npm install -g webpack
         或
         npm i -g webpack

    2、将webpack包作为开发依赖安装到本地？
    命令：npm install --save-dev webpack

    3、将webpack包作为项目依赖安装到本地？
    命令：npm install --save webpack

    4、项目的package.json 配置如下

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
    "dependencies": { },
    "devDependencies": {
        "babel": "^6.23.0",
        "babel-cli": "^6.24.1",
        "babel-core": "^6.24.1",
        "babel-loader": "^7.0.0",
        "babel-preset-es2015": "^6.24.1",
        "webpack": "^2.6.1"
    }
   }

   通过package.json 我们可以发现，

   项目的`依赖包`是什么？
    没有

   项目的`开发依赖包`是什么？
    
        "babel": "^6.23.0",
        "babel-cli": "^6.24.1",
        "babel-core": "^6.24.1",
        "babel-loader": "^7.0.0",
        "babel-preset-es2015": "^6.24.1",
        "webpack": "^2.6.1"

   "^6.23.0" 中的 ^ 是什么意思？
   
    6.23.0 及以上版本 

    如何才能一次性安装package.json当中所有的依赖包？

    命令？ npm install 

    (‘npm install’ 命令会自动查询package.json当中所有的依赖包并下载安装)
```
```
    安装node包的两种方式：
    1、输入一个命令（npm install …………），安装一个包，再输入一条命令，再安装另一个包………………

    2、将所有的依赖包写入package.json文件，然后执行 npm install 
```


>我把自己的项目分享给陈赓？
我一般会将项目根目录下的node_modules文件夹删除，因为这个文件夹里面的文件过多过于庞大），不方便传输
陈赓拿到我的项目后，只需要在项目的`根目录`下执行
‘npm install’就能运行我分享的项目了
    
```
    全局安装与局部安装（项目依赖、开发依赖）
```
 4. `npm run`
    >npm 不仅可以用于模块管理，还可以用于执行脚本。package.json 文件有一个 scripts 字段，可以用于执行脚本命令
```
    例如:
     
     将 import.js和export.js打包到了 dist文件夹下面的 bundle.js ？
     
     第一种方式(webpack是全局安装的)：
     
      执行 webpack  命令

     第二种方式：
       1、修改package.json下面的scripts字段

       "scripts": {
            "packaging": "webpack"
        }
       2、 执行 npm run packaging  命令 

       解释：
        package.json中的scripts字段是用来自定义命令的
        执行自定义命令？
        npm run 自定义命令的名称




```