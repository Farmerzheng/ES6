import { firstName, lastName, year, add } from './export';

let sum = add(1, 2);

// 如果打包成功，那么会在浏览器控制台打印出内容
console.log(`${firstName}${lastName} was born in ${year}`)
console.log(sum)