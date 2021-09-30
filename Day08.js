// Equality checking

function myFunction(myVal1, myVal2) {
    if (myVal1 >= myVal2) {
        return "Max is "+myVal1;
    }
    return "Max is "+myVal2;
}

console.log(myFunction(1, 2));

/*
Output
>>>
Max is 2
*/

function myFunction2(myVal1, myVal2) {
    if (myVal1 >= myVal2) {
        return "Max is "+myVal1;
    }
    return "Max is "+myVal2;
}

console.log(myFunction2(1, "1"));

/*
Output
>>>
Max is 1
*/

function myFunction3(myVal1, myVal2) {
    if (myVal1 > 1 && myVal2 < 10) {
        return true;
    }
    return false;
}

console.log(myFunction3(2, 2));

/*
Output
>>>
true
*/

function myFunction4(myVal1, myVal2) {
    if (myVal1 > 1 || myVal2 < 10) {
        return true;
    }
    return false;
}

console.log(myFunction4(2, 11));

/*
Output
>>>
true
*/

// Conditions

function myFunction5(myVal1, myVal2) {
    if (myVal1 > 1) {
        return myVal1;
    } else if (myVal2 < 10) {
        return myVal2;
    } else {
        return false;
    }
}

console.log(myFunction5(1, 9));

/*
Output
>>>
9
*/


function myFunction6(myVal) {
    switch(myVal) {
        case 1:
            return "Proceed";
        case 2:
            return "Wait";
        case 3:
            return "Quit";
    }
    return myVal;
}

console.log(myFunction6(2));

/*
Output
>>>
Wait
*/

function myFunction7(myVal) {
    switch(myVal) {
        case 1:
            return "Proceed";
        case 2:
            return "Wait";
        case 3:
            return "Quit";
    }
    return "Go";
}

console.log(myFunction7(1));

/*
Output
>>>
Go
*/


function myFunction8(myVal) {
    switch(myVal) {
        case 1:
            return "Proceed";
            break;
        case 2:
            return "Wait";
            break;
        case 3:
            return "Quit";
            break;
        default:
            return "Go"
    }
}

console.log(myFunction8(5));

/*
Output
>>>
Go
*/


function myFunction9(myVal) {
    switch(myVal) {
        case 1:
        case 2:
        case 3:
            return "Proceed";
            break;
        default:
            return "Quit"
    }
}

console.log(myFunction9(1));

/*
Output
>>>
Proceed
*/

