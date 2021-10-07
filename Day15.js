// Classess

class myClass {

    constructor(val) {

        this.val = val;
    }
}

console.log(new myClass("hi").val); // Output >>> hi


function person() {

    class info {

        constructor(name, age) {

            this.name = name;
            this.age = age
        }
    }

    return info;
}

const jhon = person();

const jhonInfo = new jhon("Jhon", 25);

console.log(jhonInfo); // Output >>> info { name: 'Jhon', age: 25 }

console.log(jhonInfo.age); // Output >>> 25


// getter and setter

class book {

    constructor(author) {

        this.author = author;
    }
    
    writer(update) {
    
        this.author = update;

    }
}

var myBook = new book();

myBook.author = "Jack";

console.log(myBook.author); // Output >>> Jack

myBook.writer = "Jhon";

console.log(myBook.author); // Output >>> Jack


class book2 {

    constructor(author) {

        this.author = author;
    }

    set writer(update) {

        this.author = update;
    }
}

var myBook = new book2();

myBook.author = "Jack";

console.log(myBook.author); // Output >>> Jack

myBook.writer = "Jhon";

console.log(myBook.author); // Output >>> Jhon


class book3 {

    constructor(author) {

        this.author = author;
    }

    writer(update) {

        this.author = update;
    }

    set writer(update) {

        this.author = update;
    }
}

var myBook = new book3();

myBook.author = "Jack";

console.log(myBook.author); // Output >>> Jack

myBook.writer = "Jhon";

console.log(myBook.author); // Output >>> Jhon


class book4 {

    constructor(author) {

        this.author = author;
    }

    set writer(update) {

        this.author = update;
    }

    writer(update) {
        
        this.author = update;
    }
}

var myBook = new book4();

myBook.author = "Jack";

console.log(myBook.author); // Output >>> Jack

myBook.writer = "Jhon";

console.log(myBook.author); // Output >>> Jack


class book5 {

    constructor(author) {
        
        this.author = author;
    }

    get writer() {

        return this.author;
    }
}

var myBook = new book5();

myBook.author = "Jack";

console.log(myBook.author); // Output >>> Jack

myBook.writer = "Jhon"; 

console.log(myBook.author); // Output >>> Jack

