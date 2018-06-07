# 项目描述

将 Plane.js 、EnemyPlane.js 、MyPlane.js 和 index.js 文件打包成一个能在浏览器当中运行的js文件





# 此项目的开发步骤

## 第一步:创建模块文件

在js文件夹下 创建Plane.js 、EnemyPlane.js 、MyPlane.js 和 index.js

```
/*Plane.js*/

class Plane {

    constructor(bg, size, position) {
        this.bg = bg;
        this.size = size;
        this.position = position
    }

    update() {
        console.log('the plane update')
    }
}

export {Plane}
```

```/*EnemyPlane.js*/
/*EnemyPlane.js*/

import {Plane} from './Plane'

class EnemyPlane extends Plane{
    constructor(bg, size, position,speed){
        super(bg,size,position);
        this.speed = speed;
    }
    moveDown(){
        console.log('enemyPlane can moveDown')
    }
}

export { EnemyPlane}
```

```
/*MyPlane.js*/
import {Plane} from './Plane'

class MyPlane extends Plane{
    constructor(bg, size, position,direct){
        super(bg,size,position);
        this.direct = direct;
    }
    shoot(){
        console.log('myPlane shoot!')
    }
}
export {MyPlane}
```

```
/*index.js*/
import {EnemyPlane} from './EnemyPlane'
import {MyPlane} from './MyPlane'

let enemyPlane = new EnemyPlane('color', 18, 'left',1000)

let myPlane = new MyPlane('color', 18, 'left','right')

enemyPlane.moveDown()

myPlane.shoot()


```

## 第二步：初始化项目（npm init）

在项目的根目录下执行npm init

因为我们这个项目要想运行起来，需要webpack对

Plane.js 、EnemyPlane.js 、MyPlane.js 和 index.js

进行打包，也就是说项目开发的时候需要 node包（webpack）

**开发的时候只要需要node包 ,我们就要 执行npm init  来生成一个package.json文件**

npm init 的作用？

生成一个package.json文件

package.json 的作用？

描述项目（项目名称、项目作者、项目的git仓库地址、项目的软件授权信息、执行项目的某些命令、项目的开发依赖所用的包的信息、项目上线时依赖的包的信息）



## 第三步：安装依赖的包



安装：全局安装和本地安装

优先采用本地安装包（尽量不要把包全局安装）

package.json 当中依赖的包

包的功能解释：

  webpack包 ： 打包js文件的

  babel***包 ： 将ES6转换成ES5用的

  特别强调：只要用到 babel相关的包 ,就需要在项目的根目录下创建   .babelrc 文件

```
    "devDependencies": {

        "babel": "^6.23.0",

        "babel-cli": "^6.24.1",

        "babel-core": "^6.24.1",

        "babel-loader": "^7.0.0",

        "babel-preset-es2015": "^6.24.1",

        "webpack": "^2.6.1"

    }

```

```
/*.babelrc*/

{
    "presets": [
        "es2015"
    ]
}

```







将webpack作为项目的开发依赖安装：

> npm install --save-dev webpack 







昨天的错误？

在webpack.config.js 中 loaders 字段报错了



报错原因？

在webpack 1 中 webpack.config.js 中是  loaders 字段

在webpack2 中 webpack.config.js 中变成了 rules  字段



总结：

​           1、项目如果依赖全局包，那么这个项目的可移植性便差了

​           2、同一台电脑当中，不同项目，若依赖相同的包，但是包版本不同，可能有些项目无法运行

举例：

​             第一个例子：

​             曹杰的电脑的操作系统当中安装的是 webpack 1（  loaders ）

​             董帆的电脑的操作系统当中安装的是 webpack 2  ( rules )

​             曹杰的webpack项目在他自己的电脑上运行良好

​             曹杰的webpack项目拷贝给董帆，董帆执行同样的命令，能运行么？

​             不能运行，因为曹杰项目中的webpack.config.js中是loaders字段，loaders字段只有

​             webpack1  能够识别，webpack 2 识别不了 loaders 字段



​            第二个例子：

​            葛松伟的电脑当中现在有两个项目 demo-01 和 demo-02

​             demo-01  项目依赖 webpack1

​             demo-02  项目依赖  webpack2

​             现在葛松伟的电脑当中全局安装了webpack1

​             执行 webpack命令能运行对demo-02  项目的js文件打包么？

​             不能，原因是demo-02 中的webpack.config.js中的rules字段不能被

​              webpack1识别

## 第四步：webpack.config.js

项目如果用到了webpack包，那么必须在项目的根目录下创建 webpack.confiig.js

```
var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry:"./js/index.js",
	output:{       
		path:path.resolve(__dirname,"dist"),   
		filename:"bundle.js"
	},
	module:{
		rules:[
           {
           	test:/\.js/,loader:"babel-loader"
           }
		]
	}
}
```



  ## 第五步：执行webpack 当中的打包命令

如果webpack  是全局安装的，那么我们可以直接执行 'webpack' 命令就行了



局部安装的包如何执行包内的命令呢？

方法一：命令前面要写上包安装的路径

​      node_modules/.bin/webpack

方法二 ：利用 npm run

​      修改  package.json 里面的 scripts字段

```
    "scripts": {

        "test01": "webpack"        

    }
    /* 
       test01 是自定义的命令
       webpack 是具体的打包命令（注意这个命令和全局安装是运行的命令一样）
    */
```

​    在命令行执行  `npm run test01`





执行命令完成后会在项目的根目录下生成一个dist文件夹，

dist  文件夹下面有一个bundle.js

如何执行bundle.js ?

            1. 让浏览器去执行（新建一个index.html，引入bundle.js）
            2. 在 node 平台上执行 bundle.js ( node dist/bundle.js)

  





































