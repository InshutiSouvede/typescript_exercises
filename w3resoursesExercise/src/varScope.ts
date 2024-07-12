let mylet :{
    name: string;
    todo: number[];
}= {name:"name",todo:[1,2,3]}
const myconst = 'there'
var myvar = "I am a string"
console.log(typeof myconst, typeof myvar)
function exampleFunction() {
    var myVariable3: boolean = true;
    if (myVariable3) {
        var myVariable3: boolean = false; // This redeclares the same variable within the function scope.
    }
    console.log(myVariable3); // Output: false (the inner variable)
}
exampleFunction()