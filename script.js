// 1. Comments in JS

// asdfasd

/* 
asdfasd 
fghsfghdfdh
*/

// 2. Declare JS Variables 
var myName;

// 3. Storing values with the Assignment Operator
var a;
a = 7;

// 4. Assigning the value of one vaiable to another
var a;
a = 7;
var b;
b = a;

// 5. Initializing variables with the assignment operator
var a = 9;

// 6. Declare string variables 
var myFirstName = 'Vladimir';
var myLastName = 'Mayakovsky';

// 7. Understanding uninitialized variables 

var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";

// 8. camelCase

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9. Differences Between the var and let Keywords

let catName = "Oliver";
let catSound = "Meow!";

// So unlike var, when you use let, a variable with the same name can only be declared once.

// 10. Declare a read-only variable with the const keyword

const FCC = "freeCodeCamp";
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); 