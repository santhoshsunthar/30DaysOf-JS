var firstName = "Java";

var lastName = "Script";

console.log(firstName+lastName); // Output >>> JavaScript

var name = "bob", age = 22;

console.log("Name: "+name);// Output >>> Name: bob

console.log("Age: "+age); // Output >>> Age: 22

console.log(name+" is "+age+" years old."); // Output >>> bob is 22 years old.

var myString = 'Hello friends! "It is double quoted string"';

console.log(myString); // Output >>> Hello friends! "It is double quoted string"

// Escape sequences

var myString2 = "Hello friends! \'It is single quoted string\'";

console.log(myString2); // Output >>> Hello friends! "It is single quoted string"

var myString3 = "Hello friends! \"It is double quoted string\"";

console.log(myString3); // Output >>> Hello friends! "It is double quoted string"

var myString4 = "Hello friends!\nThis is new line.";

console.log(myString4); 

/* Output 
>>>
Hello friends!
This is new line
*/

var myString5 = "Hello friends!\tSentence with a tab space.";

console.log(myString5); 

/* Output 
>>>
Hello friends!  Sentence with a tab space.
*/

var myString6 = "Hello friends! \\Sentence with a back slash.";

console.log(myString6); 

/* Output 
>>>
Hello friends! \Sentence with a back slash.
*/

// Compound assignment with Augmented concatanation

var firstName = "First";

firstName += " Name"; // Output >>> First Name

console.log(firstName);

var lastName = "Last";

lastName *= " Name";

console.log(lastName); // Output >>> NaN

// Lenght of String

var str = "Hello World!";

console.log(str.length); // Output >>> 12

// Indexes

console.log(str[0]); // Output >>> H

// Immutable or not?

str[1] = "a";

console.log(str); // Output >>> Hello World!

console.log("Hello"+str[str.length - 5]+"!"); // Output >>> Helloo!
