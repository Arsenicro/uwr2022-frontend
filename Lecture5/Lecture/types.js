// Booleans

const bool1 = true;
const bool2 = false;

console.log(typeof bool1)
console.log(typeof bool2)

// Numbers

const number1 = 1.5;
const number2 = 2;

const numberNaN = NaN;

const numberInf = Infinity;

console.log(typeof number1)
console.log(typeof number2)
console.log(typeof numberNaN)
console.log(typeof numberInf)

// BigInt

const bigNumber = 1231232137123123n;

console.log(typeof bigNumber)

// String

const string = "Life is Strange";

console.log(typeof string)

// Null

const nullValue = null;

console.log(typeof nullValue)

// Undefined

const undefinedValue = undefined;

console.log(typeof undefinedValue)

// Symbol

const symbol = Symbol("Description")
const symbol2 = Symbol("Description")

console.log(typeof symbol)

// Object

const obj = {name: "Alicja"}
const arr = ["Alice", "In", "Wonderland"]
function f1() {} 

console.log(typeof obj)
console.log(typeof arr)
console.log(typeof f1)


const variable = "Alicja";

if (variable) {

}

const variable2 = variable || "Variable";