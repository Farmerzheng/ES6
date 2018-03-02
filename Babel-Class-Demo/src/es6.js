 
 // return 可以省略，省略的前提是只有一行return代码
 let fn = x=>x*x;
// 如果有两个参数需要加小括号
 let fn2 = (x,y)=>x*y;

// 不是一行return代码，我们就需要加上{}
 let fn3 = (x)=>{
    let a = 2;
    return a*x;
 }