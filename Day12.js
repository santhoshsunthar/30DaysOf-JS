// var and let

var name = "Jhon";

name = "Wick";

console.log(name); // Output >>> Wick

/*
let name = "Jhon";

name = "Wick";

console.log(name); // Output >>> "Error"
*/

function myFunction() {

    let name = "Jack";

    if (true) {

        console.log(name); // Output >>> Jack
    }

    return name;
}

myFunction();


function myFunction2() {

    let name = "Jack";

    if (true) {

        name = "Sparrow"

        console.log(name); // Output >>> Sparrow
    }

    console.log(name); // Output >>> Sparrow

    return name;
}

myFunction2();


function myFunction3() {

    let name = "Jack";

    if (true) {

        let name = "Sparrow"

        console.log(name); // Output >>> Sparrow
    }

    console.log(name); // Output >>> Jack

    return name;
}

myFunction3();


function myFunction4() {

    const name = "Jack";

    if (true) {

        let name = "Sparrow"

        console.log(name); // Output >>> Sparrow
    }

    console.log(name); // Output >>> Jack

    return name;
}

myFunction4();

// Mutations

function myFunction5() {

    const myArray = [1, 2, 3];

    myArray[0] = 4;
    myArray[1] = 5;
    myArray[2] = 6;

    return myArray;
}

console.log(myFunction5()); // Output >>> [ 4, 5, 6 ]


function myFunction6() {

    const myObject = {
        myValue : 123
    };

    try {
        myObject.myValue = 321;
    } catch(logmsg) {
        console.log(logmsg);
    }

    return myObject.myValue;  
}

console.log(myFunction6()); // Output >>> 321


function myFunction7() {

    const myObject = {
        myValue : 123
    };

    Object.freeze(myObject);

    try {
        myObject.myValue = 321;
    } catch(logmsg) {
        console.log(logmsg);
    }

    return myObject.myValue;
}

console.log(myFunction7()); // Output >>> 123