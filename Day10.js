// Objects

var person = {

    "name" : "Jhon",
    "age" : "21",

};

console.log(person.name, person.age); // Output >>> Jhon 22

console.log(person["name"]+" is "+person["age"]+" years old."); // Output >>> Jhon is 22 years old.

person.age = 22;

console.log(person); // Output >>> { name: 'Jhon', age: 22 }

var age = "age";

console.log(person[age]); // Output >>> 22

person["nick name"] = "Wick";

console.log(person); // Output >>> { name: 'Jhon', age: 22, 'nick name': 'Wick' }

console.log(person["nick name"]); // Output >>> Wick

person["nickname"] = "Wick";

console.log(person); // Output >>> { name: 'Jhon', age: 22, 'nick name': 'Wick', nickname: 'Wick' }

console.log(person.nickname); // Output >>> Wick

delete person["nick name"];

console.log(person); // Output >>> { name: 'Jhon', age: 22, nickname: 'Wick' }

function myFunction(val) {

    var person = {

        "name" : "Jhon",
        "age" : "21",
    
    };

    return whatWeWant = person[val]; 

}

console.log(myFunction("name"));

/*
Output
>>>
Jhon
*/

var person = {

    "name" : "Jhon",
    "age" : "21",
    "mobile" : ["1", "2", "3"]

};

console.log(person.mobile); // Output >>> [ '1', '2', '3' ]

console.log(person.mobile[1]); // Output >>> 2

// Nested objects

var person = {

    "names" : {
        "first name" : "Jhon",
        "last name" : "Wick"},
    "age" : "21",
    "mobile" : {
        "no1" : "first number",
        "no2" : "second number",
        "no3" : "third number",
    }

};

console.log(person.mobile); // Output >>> { '1': 'first number', '2': 'second number', '3': 'third number' }

console.log(person.mobile.no3); // Output >>> third number

// Nested arrays

var person = [

    {
        type : "names",
        value : [
            "first name", 
            "middle name", 
            "last name"
    ]
    },
    {
        type : "mobile numbers",
        value : [
            "number one",
            "number two",
            "number three"
        ]
    }
];

console.log(person[0].value); // Output >>> [ 'first name', 'middle name', 'last name' ]

console.log(person[1].value[1]); // Output >>> number two

var person = {

    "name" : "Jhon",
    "age" : "21",
    "mobile" : {
        "no1" : "first number",
        "no2" : "second number",
        "no3" : "third number",
    }

};

console.log(person.mobile); // Output >>> { '1': 'first number', '2': 'second number', '3': 'third number' }

var value = JSON.parse(JSON.stringify(person));

console.log(value);

/*
Output
>>>
{
  name: 'Jhon',
  age: '21',
  mobile: { no1: 'first number', no2: 'second number', no3: 'third number' }  
}
*/