"use strict";
let mylet = { name: "name", todo: [1, 2, 3] };
const myconst = 'there';
var myvar = "I am a string";
console.log(typeof myconst, typeof myvar);
function exampleFunction() {
    var myVariable3 = true;
    if (myVariable3) {
        var myVariable3 = false; // This redeclares the same variable within the function scope.
    }
    console.log(myVariable3); // Output: false (the inner variable)
}
exampleFunction();
