function add1(a, b) {
  return a + b;
}

const add2 = function (a, b) {
  return a + b;
}

const add3 = (a, b) => {
  return a + b;
}

const add4 = (a, b) => a + b

console.log(add1(1,3))
console.log(add2(1,3))
console.log(add3(1,3))
console.log(add4(1,3))



const user = {
  name: "Alice",
  secondName: "Kathleen",
  surname: "Young",
  age: 18,
  contact: {
    phone: '111-111-111',
    email: 'kathleen@young.com'
  },
  getName: function() {
    const f1 = function() { return this.name }
    const f2 = () => { return this.name }
    const f3 = () => { 
      const f4 = () => {
        return this.name
      }

      return f4()
     }

    return f3();
  }
}

console.log(user.getName())