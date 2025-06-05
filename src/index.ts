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

//=============Functions

//=====Optional Parameter
type MultiplyNum = (
  num1: number,
  num2: number,
  num3?: number
) => number | string;

//l is optional(num3)
const multiplyNum: MultiplyNum = (n, m, l) => {
  if (typeof l === "undefined") return "L was not provided";
  return n * m * l;
};

multiplyNum(10, 20);

//=======Default Parameter when something is kept optional(num3)
type AddNum = (num1: number, num2: number, num3?: number) => number | string;

const addNum: AddNum = (n, m, l = 20) => {
  if (typeof l === "undefined") return "L was not provided";
  return n + m + l;
};

addNum(10, 20);

//=========Rest operator

type RestFunc = (...values: number[]) => number[];

const restFn: RestFunc = (...values) => values;

// console.log("Rest value array", restFn(10, 20, 30, 40));

//=========Functions with objects

type Product = {
  name: string;
  stock: number;
  price: number;
  readonly id: number;
};

type GetData = (product: Product) => void;

const getData: GetData = (product) => {
  // readonly -> cant modify
  // product.id=22
  console.log("Product", product);
};

const productOne: Product = {
  name: "Ayush",
  stock: 200,
  price: 200,
  id: 7,
};

// getData(productOne)

const errorHandler = (): never => {
  throw new Error();
};
