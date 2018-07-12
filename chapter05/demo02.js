// 数组learn
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(3));
console.log(numbers.indexOf(9));

/***********************************************************迭代方法*************************************************************/
// 1.every()
let everyResult = numbers.every(function (item, index, array) {
    return item > 2;
});
console.log(everyResult);

// 2.some()
let someResult = numbers.some(function (item, index, array) {
    return item > 4;
});
console.log(someResult);

// 3.filter()
let filterResult = numbers.filter(function (item, index, array) {
    return item > 3;
});
console.log(filterResult);

// 4.forEach()
let forEachResult = numbers.forEach(function (item, index, array) {
    console.log(item);
});
console.log(forEachResult);

// 5.map()
let mapResult = numbers.map(function (item, index, array) {
    return item * 2;
});
console.log(mapResult);

/***********************************************************归并方法*************************************************************/
// 1.reduce()  <----> reduceRight()  顺序相反
let sum = numbers.reduce(function (prev, cur, index, array) {
    return prev + cur;
});
console.log(sum);