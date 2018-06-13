## npm?

#### npm 是什么？

 node package manager 的缩写，本质上是一个node包

#### npm包的作用？

 通过安装在node上面的 `npm包` 可以与远程的 `npm服务器` 建立连接

 npm包 用于Node包的发布、传播、依赖控制（一个node包可能依赖多个其他的node包）。

 npm包是Node官方提供的包管理工具  

#### npm 服务器的作用？

 npm服务器存放着很多的node包，这些包都是全球的开发者上传上去的

 npm服务器是 Node 包的标准发布平台，

#### npm 命令？

npm包提供了一系列命令，这些命令都是以 npm 开头的

例如： npm init \ npm install \ npm list \ npm run ***

npm包是集成在node程序当中的，不用刻意下载安装

#### npm包的作用？

 解决项目部署上的很多问题，例如：

 1、允许用户从 `npm 服务器`下载别人编写的第三方包到本地使用。

 2、允许用户将自己编写的包上传到 `npm 服务器`供别人使用。

 3、将开发者从繁琐的包管理工作（版本、依赖等）中解放出来，更加专注于功能的开发。

#### node 生态系统？

   node包的总和

#### 如何使用 NPM?

***
 npm 不需要单独安装。在安装 Node 的时候，会连带一起安装 npm

##### `npm init生成 package.json`

>npm init 用来初始化项目，生成一个 package.json 文件。
>
>它会向用户提问一系列问题，如果你觉得不用修改默认配置，一路回车就可以了。

> package.json 的作用？
>     整个项目的配置文件，
>
>  package.json是对整个项目的描述：
>
> 项目名称、
>
> 项目的版本、
>
> 项目的git仓库地址、
>
> 项目的命令（scripts字段）、
>
> 项目的软件许可协议、
>
> 项目依赖的包名称

##### `npm list 列举出安装包`

>npm list  列出当前项目安装的所有模块(包)，以及它们依赖的模块（包）。

> npm list 与 ls 的区别？
>
> npm list : 列出当前项目所有安装的node模块（包）
> ls : 列出当前文件夹下面的所有文件
>

##### `npm install  安装node模块（包）` 

   

​     例如 安装 webpack包（三种方式）：
    
​     1.  全局安装 webpack包？
         命令：**npm install -g webpack**
                    或
                    **npm i -g webpack**

​     2.  本地安装 webpack 包？

​        2.1  将webpack包作为开发依赖安装到本地？

​        命令：**npm install --save-dev webpack**

​        2.2  将webpack包作为项目依赖安装到本地？
        命令：**npm install --save webpack**


​        2.3 安装本地包的时候会自动修改 package.json 配置文件，
    具体修改的字段是："dependencies" 和 "devDependencies"

> ​    {
>     "name": "webpack-class",
>     "version": "1.0.0",
>     "description": "module demo",
>     "main": "import.js",
>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1"
>     },
>     "author": "",
>     "license": "ISC",
>     "dependencies": { },
>     "devDependencies": {
>         "babel": "^6.23.0",
>         "babel-cli": "^6.24.1",
>         "babel-core": "^6.24.1",
>         "babel-loader": "^7.0.0",
>         "babel-preset-es2015": "^6.24.1",
>         "webpack": "^2.6.1"
>     }
>    }
>

>    通过package.json 我们可以发现：
>
> 1. 项目的`依赖包`是什么？
>
> ​     没有项目的依赖包，因为    "dependencies" 字段的值
>
> ​     是一个空对象
>
> 2. 项目的`开发依赖包`是什么？
>
>    通过   "devDependencies" 字段可以看出，开发
>
>    依赖的包是：
>
> ​      "babel": "^6.23.0",
>      "babel-cli": "^6.24.1",
>      "babel-core": "^6.24.1",
>      "babel-loader": "^7.0.0",
>      "babel-preset-es2015": "^6.24.1",
>      "webpack": "^2.6.1"

   "^6.23.0" 中的 ^ 是什么意思？

> ​    6.23.0 及以上版本 
>

​    如何才能一次性安装package.json当中所有的依赖包？

> ​    命令？ npm install 
>
> ​    (‘npm install’ 命令会自动查询package.json当中所有的依赖包并下载安装)
>
> 

  安装node包的两种方式：

> ​     1、输入一个命令（npm install …………），安装一个包，再输入一条命令，再安装另一个包………………
>
> ​     2、将所有的依赖包写入package.json文件，然后执行 npm install 

  

   我把自己的项目分享给陈赓？

> 我一般会将项目根目录下的node_modules文件夹删除，
>
> 因为这个文件夹里面的文件过多过于庞大，不方便传输
>
> 陈赓拿到我的项目后，只需要在项目的`根目录`下执行
>
> ‘npm install’ 就会自动在npm服务器下载package.json中
>
> 的所有依赖包（开发依赖和项目依赖），下载完成后就
>
> 能运行我分享的项目了



##### `npm run 执行命令`

>npm 不仅可以用于模块管理（下载安装模块、卸载模块 `npm uninstall  -g/--save/--save-dev 模块名称`），还可以用于执行脚本。
>
>package.json 文件有一个 scripts 字段，
>
>可以用于执行脚本命令

```
    例如: 将 import.js和export.js打包到了 dist文件夹下面的 bundle.js ？
     
     第一种方式：
     
         webpack (webpack是全局安装的)
         
         node_modules/.bin/webpack (webpack是本地安装的)         

     第二种方式：
     
       1、修改package.json下面的scripts字段

       "scripts": {
            "packaging": "webpack"
        }
       2、 执行 npm run packaging  命令 （本质上是执行 webpack命令）

      解释：
        package.json中的scripts字段是用来自定义命令的
        
        如何执行自定义命令？
        
        npm run 自定义命令的名称

```