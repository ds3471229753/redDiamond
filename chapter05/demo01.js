function displayInfo(args){
    var output = "";
    if (typeof args.name === 'string'){
        output += 'Name:' + args.name + '\n';
    }

    if (typeof args.age === 'number'){
        output += 'Age:' + args.age + '\n';
    }

    console.log(output);
}

displayInfo({name: 'duan', age: 24});

let obj = new Object();
let obj1 = {
    name: 'duan',
    age: 24
};

let arr = new Array(10);
console.log(arr instanceof Array);
console.log(Array.isArray(arr));