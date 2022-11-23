// Array
const array = ["Alice", "Kathleen", "Young", 18, "New York"];

const [name, ,surname, ...rest] = array;

console.log(name, surname, ...rest)

// Object
const object = {
  name: "Alice",
  secondName: "Kathleen",
  surname: "Young",
  age: 18,
  contact: {
    phone: '111-111-111',
    email: 'kathleen@young.com'
  }
}

const { name: objectName, contact: { phone } } = object;

console.log(objectName, phone)

// 
function f1({name, surname, age, contact: { phone }, isAdmin = false}) {
  return {
    name,
    surname,
    age,
    phone,
    isAdmin
  }
}

console.log(f1(object))

const arr11111 = [1,2,3,4];

console.log(Math.min(...arr11111))

function f2(...values) {
  console.log(values)
}

f2(1,2,3,4,5)

// 
const arr1 = [1,2,3];
const arr2 = [...arr1];

arr1[0] = 7

console.log(arr1)
console.log(arr2)

// 
const obj2 = {...object}

obj2.name = "John"
obj2.contact.phone = "asdasdasda"

console.log(object)
console.log(obj2)

// 
let a = 11;
let b = 22;

[b,a] = [a,b]

console.log(a,b)