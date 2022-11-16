const elem = "surnameasda"

const obj = {
  'name': "Alice",
  [elem]: "Young",
  f1: function() {
    return this.name;
  }
}

const obj2 = {
  name: "John",
}

const f2 = function() {
  return this.name
}

obj.f2 = f2;
obj2['f2'] = f2

console.log(f2())



for (element in obj) {
  console.log(element)
}

const arr = [1,2,3,4]

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const arr2 = arr.map(function (a) { return a*2; })

arr.forEach(function (value) { console.log(value) })

console.log(arr2)
