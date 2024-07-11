"use strict";
const myArry = [];
const voider = (callback) => {
    console.log("there you go", callback());
};
voider(() => myArry.push(5));
