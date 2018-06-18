import customName from './export-default';

// import zhangsan from './export-default'

// var default = {name:'zhangsan',age:18}
// export default;

customName(); // 'foo'
// 对export default输出的模块，
// import命令可以为该匿名函数指定任意名字。
// 这时import命令后面，不使用大括号。
// 因为export default命令只能使用一次。
// 所以，import命令后面才不用加大括号

// 不使用export default时，对应的import语句需要使用大括号。