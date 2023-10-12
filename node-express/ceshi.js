const inputString = "sv:abcdsv:ddsdfsv:dfdfdf";
const regex = /sv:/g;
const resultArray = inputString.split(regex);
// resultArray 就是包含多个子字符串的数组
console.log(resultArray);
resultArray.shift()
let arr = resultArray.map(item=>'sv:'+item)
console.log(resultArray,arr);