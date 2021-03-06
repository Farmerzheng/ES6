// export命令后面，
// 使用大括号指定所要输出的一组变量。
// 优点是一眼看清楚输出了哪些变量。

var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

function add(x, y) {
    return x + y;
}

// 无论导出单个还是多个，都必须加{}
export { firstName, lastName, year, add }

// 报错
// function f() {}
// export f;

// 正确
// function f() {}
// export {f};

/**
 * 编写export.js文件
 * 此文件的功能？
 * 导出常量 R = 5
 * 导出常量 ERR_OK = 0
 * 导出随机函数 randomFn 
 */