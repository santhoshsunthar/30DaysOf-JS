// Arrow functions

var func = () => new Date();

console.log(func); // Output >>> [Function: func]


var myArrowFunc = (par1, par2) => par1.concat(par2);

console.log(myArrowFunc("Java", "Script")); // Output >>> JavaScript


// Higher order arrow functions

const myArrowFunc2 = (par1) => {

    const myValue = par1.filter(num => Number.isInteger(num) && num > 0);

    return myValue;
};

console.log(myArrowFunc2([1, 2, -1, 3, -5])); // Output >>> [ 1, 2, 3 ]


var myVar = (function() {

    return function myVar(number, myValue) {

        return number + myValue;
    };
})();

console.log(myVar(1, 3)); // Output >>> 4

console.log(myVar(1)); // Output >>> NaN


const myVar2 = (function() {

    return function myVar2(number, myValue = 1) {

        return number + myValue;
    };
})();

console.log(myVar2(2, 5)); // Output >>> 7

console.log(myVar2(1)); // Output >>> 2


var myVar3 = (function() {

    return function fixedValueFunction(number, myValue = 1) {

        return number + myValue;
    };
});

console.log(myVar3(2, 5)); // Output >>> [Function: fixedValueFunction]


// Rest operator

const sum = (function() {

    return function sumFunc(...args) {

        return args.reduce((a, b) => a + b, 0);
    };
})();

console.log(sum(1, 2, 3, 4, 5)); // Output >>> 15


// Spread operator

var arr1 = ["Jack", "Sparrow", "Jhon", "Wick"];
var arr2;

(function() {

    arr2 = arr1;
    arr1[0] = "1"
})();

console.log(arr2); // Output >>> [ '1', 'Sparrow', 'Jhon', 'Wick' ]


var arr1 = ["Jack", "Sparrow", "Jhon", "Wick"];
var arr2;

(function() {
    
    arr2 = [...arr1];
    arr1[0] = "1"
})();

console.log(arr2); // Output >>> [ 'Jack', 'Sparrow', 'Jhon', 'Wick' ]


// Destructuring assignment with nested objects

const myObject = {

    val: 1024,
    val: 2048,
};

function myFunction(par) {

    const { val : myValue} = par;
    
    return myValue;
};

console.log(myFunction(myObject)); // Output >>> 2048