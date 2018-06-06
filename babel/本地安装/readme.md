1.测试本地安装的babel-cli包，需要先卸载全局的babel-cli包

>npm uninstall -g babel-cli

2.将babel-cli包作为本地开发依赖安装

>npm install --save-dev babel-cli
 
安装完成后查看package.json中 ‘devDependencies’变化

3.本地安装的babel-cli包如何运行？
>输入  babel es6.js  (报错)

>输入 node_modules/.bin/babel es6.js （正常）

         