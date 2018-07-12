// Date类型
let now = new Date();
console.log(new Date().getMilliseconds());

console.log(Date.now() == new Date().getTime());

console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleDateString());
console.log(new Date().toLocaleTimeString());
console.log(new Date().toUTCString());
console.log(new Date().toGMTString());