// Iterations

//while loop

var myArray = [];

var i = 0;

while(i < 4) {

    myArray.push(i);
    i++;
}

console.log(myArray); // Output >>> [ 0, 1, 2, 3 ]

// for loop

var myArray = [];

for(var i = 0; i < 5; i++) {

    myArray.push(i);
}

console.log(myArray); // Output >>> [ 0, 1, 2, 3, 4 ]


var myArray = [];

for(var i = 0; i < 10; i += 2) {

    myArray.push(i);
}

console.log(myArray); // Output >>> [ 0, 2, 4, 6, 8 ]

 
var myArray = [2, 1, 6, 4];
var total = 0;

for(var i = 0; i < myArray.length; i++) {

    total += myArray[i];
}

console.log(total); // Output >>> 13


var myArray = [2, 1, 6, 4];
var myArray2 = [5, 7, 3, 9]

for(var i = 0; i < myArray.length; i++) {

    for(var j = 0; j < myArray2.length; j++) {

        total += myArray2[j];
    }

    total += myArray[i];
    
}

console.log(total); // Output >>> 122

// do while loop

var myArray = [];
var i = 0;

do {

    myArray.push(i);
    i++;

} while(i < 5);

console.log(myArray); // Output >>> [ 0, 1, 2, 3, 4 ]

// Random numbers

function randomGenerator(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomGenerator(1, 5)); // Output >>> "Any Random number within a range"

// String to Integer

var str = "10";

console.log(parseInt(str)); // Output >>> 10

var str = "100001";

console.log(parseInt(str, 2)); // Output >>> 33

var str = "0xff";

console.log(parseInt(str, 16)); // Output >>> 255

// Ternary operator

var str1 = "Hi";
var str2 = "Hi";

console.log(str1 == str2 ? true : false); // Output >>> true

var a = 23;
var b = 67;

console.log(a > b ? "Greater" : a == b ? "Equel" : "Not Greater than or equel"); // Output >>> Not Greater than or equel

