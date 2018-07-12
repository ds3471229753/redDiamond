// Function类型
function add10(num) {
    return num + 10;
}

function call(someFunction, someArgument) {
    return someFunction(someArgument);
}

let result1 = call(add10, 20);

console.log(result1);

let data = [{
        name: 'sen',
        age: 24
    },
    {
        name: 'li',
        age: 25
    }
]

function a(propertyName) {
    return function (obj1, obj2) {
        console.log(obj1, obj2);
        let val1 = obj1[propertyName];
        let val2 = obj2[propertyName];

        if (val1 > val2) {
            return 1;
        } else if (val1 < val2) {
            return -1;
        } else {
            return 0;
        }
    }
}
data.sort(a('name'));
console.log(data[0].name);
data.sort(a('age'));
console.log(data[0].age);

// arguments 属性之 callee，指向含arguments的函数
function c(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
console.log(c(5));
let d = c;
console.log(d(6));

function outer() {
    inner();
}

function inner() {
    console.log(arguments.callee.caller);
}
outer();

function sum(num1, num2) {
    return num1 + num2;
}

function callSum1(num1, num2) {
    return sum.apply(this, arguments);
}

console.log(callSum1(10, 20));
