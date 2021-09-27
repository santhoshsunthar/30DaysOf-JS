// Arrays

var myArray = ["bob", 22];

console.log(myArray); // Output >>> [ 'bob', 22 ]

var nestedArray = ["Nmae", ["bob", "alice", [21, 22]]];

console.log(nestedArray); // Output >>> [ 'Nmae', [ 'bob', 'alice', [ 21, 22 ] ] ]

// Indexes

var myArray = [10, "middle value", 30];

console.log(myArray[1]); // Output >>> middle value

// Mutable or not?

var myArray = [10, 20, 30];

myArray[1] = 15;

console.log(myArray); // Output >>> [ 10, 15, 30 ]

// Multi-Dimensional Array indexes

var myArray = [["Alice", 21], ["bob", 22], ["jhon", 23]];

console.log(myArray[0][1]); // Output >>> 21

// Manipulating arrays with push()

var myArray = ["Jhon", "Michal"];

myArray.push("Wick"); 

console.log(myArray); //  Output >>> [ 'Jhon', 'Michal', 'Wick' ]

myArray.push(["10", "20"]); 

console.log(myArray); //  Output >>> [ 'Jhon', 'Michal', 'Wick', [ '10', '20' ] ]

myArray.push("100", "200"); 

console.log(myArray); //  Output >>> [ 'Jhon', 'Michal', 'Wick', [ '10', '20' ], '100', '200' ]

// Manipulating arrays with pop()

var myArray = [1, 2, 3];

console.log(myArray.pop()); // Output >>> 3

console.log(myArray); // Output >>> [ 1, 2 ]

var myArray2 = [["jhon", 21], ["wick", 22]];

console.log(myArray2.pop()); // Output >>> [ 'wick', 22 ]

console.log(myArray2); // Output >>> [ [ 'jhon', 21 ] ]

var myArray3 = [["jhon", 21], ["wick", 22]];

console.log(myArray3.shift()); // Output >>> [ 'jhon', 21 ]

console.log(myArray3); // Output >>> [ [ 'wick', 22 ] ]

myArray3.unshift(["jhon", 21]);

console.log(myArray3); // Output >>> [ [ 'jhon', 21 ], [ 'wick', 22 ] ]







