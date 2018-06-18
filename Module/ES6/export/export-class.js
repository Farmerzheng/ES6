/**
 * 此文件的功能？
 * 常量命名都大写
 * 导出常量 PI = 3.1415926
 * 导出常量 ERR_OK = 0
 * 导出随机函数 randomFn 
 */

const PI = 3.1415926;
const ERR_OK = 0;
let randomFn = function(max, min) {
    return Math.round(Math.random() * (max - min)) + min
}

export { PI, ERR_OK, randomFn }