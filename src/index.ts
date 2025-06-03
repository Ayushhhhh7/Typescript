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
// console.log("newName", newName);

//---------------------

type User = (n: number, m: number) => number;

const newFn: User = (n, m) => {
  return m * n;
};

//============Arrays

//1st way
let numberArray: number[] = [1, 2, 3, 4];
let strArray: string[] = ["ayush", "dhingra"];

//2nd way
const numArray: Array<number | string> = [2, 3, 5, "ronaldo", 9];

//Object

//This is too congested, make a Type aliase outside
const obj: {
  fName: string;
  height: number;
  weight: number;
} = {
  fName: "Ayush",
  height: 200,
  weight: 85,
};

type Person = {
  fName: string;
  height: number;
  weight: number;
  gender?: boolean;
};

const typeObj: Person = {
  fName: "Ayush",
  height: 200,
  weight: 85,
};

//=========Interface

interface PersonInfo {
  fName: string;
  height: number;
  weight: number;
  gender?: boolean;
}

//Interface is used when we want to work with classes, we can use "extends"

type FuncType = (n: number, m: number) => void;

interface Employee extends PersonInfo {
  salary: number;
  func?: FuncType;
}

const luminosAyush: Employee = {
  fName: "Ayush",
  height: 200,
  weight: 85,
  salary: 20000,
};

const luminosNehal: Employee = {
  fName: "Nehal",
  height: 100,
  weight: 55,
  salary: 20000,
  func: (n, m) => {
    console.log("n*m", n * m);
  },
};

//If we dont use ?. we will get error "cannot invoke an object which is possibly undefined"
luminosNehal?.func?.(20, 30);
