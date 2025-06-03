//======1st Way
let a: string = "Ayush";
let b: number = 25;
let check: boolean;
check = false;

// console.log("A", a);
// console.log("B", b);

//=======2nd way
let fName = <string>"Ayush";
let age = <number>24;
// console.log("fName", fName);
// console.log("age", age);

//========Union type

let surname: string | number;
let myName = <string | number>"Ayush";
surname = 22;
// console.log("surname", surname);
// console.log("myName", myName);

//=========Function arguments

const func = (n: number, m: number): number => {
  console.log("Total", n + m);
  return n + m;
};

// func(33, 22);

//==========Type aliases

type UserName = string | number;
// let newName = <UserName>"ronaldo";
let newName: UserName = "ronaldo";
console.log("newName", newName);

//---------------------

type User = (n: number, m: number) => number;

const newFn: User = (n, m) => {
  return m * n;
};

//============Arrays

