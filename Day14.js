// Destructuring assignments

var myValues = [1, 2, 3, 4, 5];

function myFunction(list) {

    const [ , , ...arr] = list;

    return arr;
}

console.log(myFunction(myValues)); // Output >>> [ 3, 4, 5 ]


/*
const myValues2 = ["1", "Jhon", "2", "Wick"];

function myFunction2(list) {

    const [ , ...arr, ] = list;

    return arr;
}

console.log(myFunction2(myValues2)); // Output >>> "SyntaxError: Rest element must be last element"
*/


const stats = {

    min : 10,
    max : 100,

};

const half = (function() {

    return function half({ min, max}) {
        return (max + min) / 2;
    } 
})();

console.log(half(stats)); // Output >>> 55


// Template literals

const person = {

    name : "Jack Sparrow",
    age : 25
};

const greeting = `${person.name} is ${person.age}`;

console.log(greeting); // Output >>> Jack Sparrow is 25


const myList = {

    list1 : [1, 2, 3 , 4],
    list2 : ["Jhon", "Wick", "Jack", "Sparrow"]
};

const outArray = [];

for (var i = 0; i < myList.list1.length; i++) {

    outArray.push(`${myList.list1[i]} is ${myList.list2[i]}`);
}

console.log(outArray); // Output >>> [ '1 is Jhon', '2 is Wick', '3 is Jack', '4 is Sparrow' ]


const info = (name, age, gender) => ({name, age, gender});

console.log(info("Jack", 25, "male")); // Output >>> { name: 'Jack', age: 25, gender: 'male' }


const myObject = {

    changeValue(val) {
        this.newVal = val;
    }
};

myObject.changeValue(101);

console.log(myObject.newVal); // Output >>> 101

