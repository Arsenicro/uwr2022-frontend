const user = {
  name: "Alice",
  secondName: "Kathleen",
  surname: "Young",
  age: 18,
  contact: {
    phone: '111-111-111',
    email: 'kathleen@young.com'
  },
  getName() {
    return this.name;
  }
}

const admin = {
  name: "John",
  isAdmin: true,
  doAdminStuff() {
    return "Admin Stuff!"
  }
}

const superAdmin = {
  name: "Kamil",
  doSuperAdminStuff() {
    return "Admin Stuff!"
  }
}

admin.__proto__ = user;
Object.setPrototypeOf(superAdmin, admin);

console.log(superAdmin.getName())

// Tak się nie robi!
String.prototype.isAlice = function() {
  return this.toLocaleLowerCase() === 'alice'
}

console.log('Alice'.isAlice())