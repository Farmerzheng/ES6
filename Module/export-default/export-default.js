// export default命令其实只是输出一个叫做default的变量，
// 所以它后面不能跟变量声明语句。


// 错误
// export default var a = 1;

// export default命令的本质是将后面的值，赋给default变量

// 正确
// export default 42;


export default function() {
    console.log('foo');
}

// export default {
//     name:'zhangsan',
//     age:18
// }

// 为模块指定默认输出