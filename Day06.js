// Functions

function myFunction() {
    console.log("Hello World!");
}

myFunction()

/*
Output
>>>
Hello World!
*/


function myFunction2(a, b) {
    console.log(a + b);
}

myFunction2(1,2)

/*
Output
>>>
3
*/

// Scopes

var myVar = "Global";

function myFunction3() {
    console.log(myVar);
}

myFunction3()

/*
Output
>>>
Global
*/


function myFunction4() {
    var myVar = "Local";
    console.log(myVar);
}

myFunction4()
console.log(myVar);

/*
Output
>>>
Local
Global
*/

function myFunction5(str) {
    var myVar = "It's";
    return myVar+" "+str;
}

console.log(myFunction5("me"));

/*
Output 
>>> 
It's me
*/

function myFunction6(str) {
    var myVar = "Value";
}

var data = myFunction6();

console.log(data);

/*
Output 
>>> 
undefined
*/

function myFunction7(str) {
    var myVar = "string";
    return str+myVar;
}

var data = myFunction7("This is a ");

console.log(data);

/*
Output 
>>> 
This is a string
*/

