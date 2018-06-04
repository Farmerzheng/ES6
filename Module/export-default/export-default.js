// export default命令其实只是输出一个叫做default的变量，
// 所以它后面不能跟变量声明语句。
export default function() {
    console.log('foo');
}
// 为模块指定默认输出