// Conditions

var list = [["Alice", 10], ["Bob", 20], ["Michal", 30], ["Jhon", 40], ["Wick", 50]];

function myFunction(n1, n2, n3) {

    if (n1 > 30) {
        return list[3], list[4];
    } else if (n2 == 20) {
        return list[1][1] = 21;
    } else if (n3 > 10) {
        return list[0];
    }
}

myFunction(20, 20, 30);
console.log(list);

/*
Output
>>>
[
  [ 'Alice', 10 ],
  [ 'Bob', 21 ],
  [ 'Michal', 30 ],
  [ 'Jhon', 40 ],
  [ 'Wick', 50 ]
]
*/

function myFunction2() {

    var value = 3;

    switch(value) {
        case 1:
            return "It's 1";
        case 2:
            return "It's 2";
        case 3:
            return "It's 3";

    }

}

console.log(myFunction2());

/*
Output
>>>
It's 3
*/


function myFunction3(value) {

    switch(value) {
        case 1:
            return "It's 1";
        case 2:
            return "It's 2";
        case 3:
            return "It's 3";
        default:
            return "It's default";
    }

}

console.log(myFunction3(4));

/*
Output
>>>
It's default
*/

function myFunction4(value) {

    switch(value) {
        case 1:
            return "It's 1";
            break;
        case 2:
            return "It's 2";
            break;
        case 3:
            return "It's 3";
            break;
        default:
            return "It's default";
            break;
    }

}

console.log(myFunction4("Hi"));

/*
Output
>>>
It's default
*/

function myFunction5(value) {

    switch(value) {
        case 1:
        case 2:
        case 3:
            return "It's 1,2,3";
            break;
        default:
            return "It's default";
            break;
    }

}

console.log(myFunction5(1));

/*
Output
>>>
It's 1,2,3
*/

// Booleans

function myFunction6() {

    return 1 < 2;

}

console.log(myFunction6());

/*
Output
>>>
true
*/


function myFunction7(str1, str2) {

    return str1 > str2;

}

console.log(myFunction7("A", "B"));

/*
Output
>>>
false
*/

// round, pow, sqrt, abs and random

console.log(Math.round(2.3456));
console.log(Math.pow(4, 5));
console.log(Math.sqrt(25));
console.log(Math.abs(-9));
console.log(Math.random()); // Returns a random value between 0 and 1

/*
Output
>>>
2
1024
5
9
0.8245280998666729
*/


