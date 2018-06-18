// 导出三个变量
// 导出的变量不要忘了 var
// 输出一个函数（function关键字）


// 直接导出变量或者函数的时候不能省略关键字（let var const function）



export const firstName = 'Michael';

// export 'Michael' 错误
export var lastName = 'Jackson';
export let year = 1958;

export function add(x, y) {
    return x + y;
}