"use strict";
var _a;
//======1st Way
let a = "Ayush";
let b = 25;
let check;
check = false;
// console.log("A", a);
// console.log("B", b);
//=======2nd way
let fName = "Ayush";
let age = 24;
// console.log("fName", fName);
// console.log("age", age);
//========Union type
let surname;
let myName = "Ayush";
surname = 22;
// console.log("surname", surname);
// console.log("myName", myName);
//=========Function arguments
const func = (n, m) => {
    console.log("Total", n + m);
    return n + m;
};
// let newName = <UserName>"ronaldo";
let newName = "ronaldo";
const newFn = (n, m) => {
    return m * n;
};
//============Arrays
//1st way
let numberArray = [1, 2, 3, 4];
let strArray = ["ayush", "dhingra"];
//2nd way
const numArray = [2, 3, 5, "ronaldo", 9];
//Object
//This is too congested, make a Type aliase outside
const obj = {
    fName: "Ayush",
    height: 200,
    weight: 85,
};
const typeObj = {
    fName: "Ayush",
    height: 200,
    weight: 85,
};
const luminosAyush = {
    fName: "Ayush",
    height: 200,
    weight: 85,
    salary: 20000,
};
const luminosNehal = {
    fName: "Nehal",
    height: 100,
    weight: 55,
    salary: 20000,
    func: (n, m) => {
        console.log("n*m", n * m);
    },
};
//If we dont use ?. we will get error "cannot invoke an object which is possibly undefined"
(_a = luminosNehal === null || luminosNehal === void 0 ? void 0 : luminosNehal.func) === null || _a === void 0 ? void 0 : _a.call(luminosNehal, 20, 30);
//l is optional(num3)
const multiplyNum = (n, m, l) => {
    if (typeof l === "undefined")
        return "L was not provided";
    return n * m * l;
};
multiplyNum(10, 20);
const addNum = (n, m, l = 20) => {
    if (typeof l === "undefined")
        return "L was not provided";
    return n + m + l;
};
addNum(10, 20);
const restFn = (...values) => values;
console.log("Rest value array", restFn(10, 20, 30, 40));
