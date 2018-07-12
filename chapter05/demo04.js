// RegExp 正则
/**
 * 正则表达式使用的所有元字符必须转义
 * ( [ { \ ^ $ | . + * ? } ] )
 */

let reg1 = /[bc]at/i;
console.log(reg1.test('bat'));
console.log(reg1.test('cat'));
console.log(reg1.test('[bc]at'));

console.log('\n');

let reg2 = /\[bc\]at/i;
console.log(reg2.test('bat'));
console.log(reg2.test('cat'));
console.log(reg2.test('[bc]at'));

console.log('\n');

let reg3 = /.at/gi;
console.log(reg3.test('.at'));
console.log(reg3.lastIndex);
console.log(reg3.test('bat'));
console.log(reg3.lastIndex);
console.log(reg3.test('c.at'));
console.log(reg3.lastIndex);

console.log('\n');

let re = null;
for (let i = 0; i < 5; i++) {
    re = /cat/g;
    console.log(re.test('catkdfkjdjksj'));
}

/* for (let j = 0; j < 5; j++) {
    re = new RegExp('cat','g');
    console.log(re.test('catkdfkjdjksj'));
} */

console.log('\n');

reg1 = new RegExp('\\[bc\\]at', 'gim');
console.log(reg1.global);
console.log(reg1.ignoreCase);
console.log(reg1.multiline);
console.log(reg1.lastIndex);
console.log(reg1.source);

console.log('\n');

let reg4 = /.at/i;
let str = 'bat,cat,dat,eat';
let matches = reg4.exec(str);
console.log(matches);