// Boolian values

function myFunction(isItTrue) {
    if (isItTrue) {
        return "It's true";
    }
    return "It's false";
}

console.log(myFunction(true));

/*
Output
>>>
It's true
*/

function myFunction2(myVal) {
    if (myVal == 1) {
        return "Proceed";
    }
    return "Quit";
}

console.log(myFunction2(2));

/*
Output
>>>
Quit
*/

function myFunction3(myVal) {
    if (myVal == 1) {
        return "Proceed";
    }
    return "Quit";
}

console.log(myFunction3('1'));

/*
Output
>>>
Proceed
*/

function myFunction4(myVal) {
    if (myVal === 1) {
        return "Proceed";
    }
    return "Quit";
}

console.log(myFunction4('1'));

/*
Output
>>>
Quit
*/

function myFunction5(myVal1, myVal2) {
    if (myVal1 === myVal2) {
        return "Proceed";
    }
    return "Quit";
}

console.log(myFunction5('1', 1));

/*
Output
>>>
Quit
*/

