const objectUser = {
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

class User {
  constructor(user) {
    this.name = user.name;
    this.surname = user.surname;
    this.age = user.age;
  }

  get fullName() {
    return [this.name, this.surname].join(' ');
  }
  set fullName(fullName) {
    return [this.name, this.surname] = fullName.split(' ')
  }

  getUserName() {
    return this.name;
  }

  // Co?
  getUserSurname = () => {
    return this.surname;
  }
}

class Admin extends User {
  #isAdmin = true;

  constructor(user) {
    super(user);
  }

  get isAdmin() {
    return this.#isAdmin;
  }

  set isAdmin(isAdmin) {

  }
}

const user = new User(objectUser);

console.log(user.getUserSurname());

const admin = new Admin(objectUser);

console.log(admin.getUserSurname());
console.log(admin.fullName);

admin.fullName = "John Smith"

console.log(admin.surname);

console.log(admin.isAdmin);


console.log(admin instanceof Admin)
console.log(admin instanceof User)

console.log(user instanceof Admin)
console.log(user instanceof User)
