// export语句输出的接口，
// 与其对应的值是动态绑定关系，
// 即通过该接口，
// 可以取到模块内部实时的值。

export var foo = 'zhangsan';

setTimeout(() => foo = 'lisi', 5000);

// 上面代码输出变量foo，值为zhangsan，5秒之后变成lisi。