"use strict";
const myArry = [];
const voider = (callback) => {
    console.log("there you go", callback);
    //    throw new Error("error")
};
// function voider(callback:()=>void){
//     console.log("there you go",callback);   
//     throw new Error("error")
// }
voider(() => myArry.push(5));
function printName(obj) {
    // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
//   printName({...{ last: "Alisson",then:0 }});//error since first is mandatory and missing
printName(Object.assign({ first: "Alice", last: "Alisson", then: 0 }));
//assertion =>dictation
const myTupple = ["hi", false, 1, 2, 3, 4, 5, 6, 6, 345];
const myArray = ["hi", false, 1, 2, 3, 4, 5, 6, 6, true];
// myT.push('hey')
console.log('my tuple', myTupple);
let n = 'fd';
let s = n;
let myOneOrMany = [];
myOneOrMany = 5;
function useOneOrmany(arg) {
    console.log(arg);
    if (Array.isArray(arg))
        return arg[0];
    return arg;
}
useOneOrmany([1, 2, 3, 4]);
const mypet = {
    legs: 3,
    color: "black",
    owner: "me",
    offsprings: 4,
    sound: "meow",
    gender: "male",
    name: ''
};
// const mypet1:Pet = {
//     legs:3,
//     color:"black",
//     gender:"male",
//     owner:"me",
//     sound:"meow",
//     name:''
// }
const mybi = {
    legs: 3,
    owner: "me",
    color: "black",
    offsprings: 4,
    sound: "meow",
    gender: "male"
};
// type
// type Dog = {
//     legs:number,
//     color:string,
//     owner:string,
//     offsprings:number
// }
// type Cat={
//     legs:number,
//     owner:string,
//     sound:string,
//     gender:string
// }
// type Pet = Dog|Cat// fails only when there is neither
// type Bi = Dog&Cat//works only if all properties of both types are present
// const mypet:Pet ={
//     legs:3,
//     color:"black",
//     owner:"me",
//     offsprings:4,
//     sound:"meow",
//     gender:"male"
// } 
// // const mypet1:Pet = {
// //     legs:3,
// //     color:"black",
// //     owner:"me",
// //     sound:"meow"
// // }
// const mybi:Bi ={
//     legs:3,
//     owner:"me",
//     color:"black",
//     offsprings:4,
//     sound:"meow",
//     gender:"male"
// } 
