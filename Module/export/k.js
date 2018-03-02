// export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

export var foo = 'bar';

setTimeout(() => foo = 'baz', 500);

// 上面代码输出变量foo，值为bar，500 毫秒之后变成baz。