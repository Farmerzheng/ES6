import customName from './export-default';
customName(); // 'foo'
// 对export default输出模块加载该模块时，import命令可以为该匿名函数指定任意名字。这时import命令后面，不使用大括号。因为export default命令只能使用一次。所以，import命令后面才不用加大括号

// 不使用export default时，对应的import语句需要使用大括号。

// export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。

// 错误
// export default var a = 1;

// export default命令的本质是将后面的值，赋给default变量

// 正确
// export default 42;