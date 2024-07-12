"use strict";
// Using type assertion to convert a string to a number
let str_num = "100";
// let numberFromAssertion: number = str_num as unknown as number;//typeof numberFromAssertion gives string
let numberFromAssertion = parseInt(str_num); // Using parseInt to convert
console.log("Number from assertion:", numberFromAssertion, typeof numberFromAssertion);
// Using type assertion to convert a number to a string
let numberValue = 200;
let stringFromAssertion = numberValue.toString(); // Using toString() method to convert
console.log("String from assertion:", stringFromAssertion);
