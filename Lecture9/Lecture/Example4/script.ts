interface User {
  name: string
  surname: string;
  email: string,
}

type User2 = {
  name: string
  surname: string;
  email: string,
}

type Contact = {
  contact: string
}

type Type = string | number;

interface User {
  contact: string
}

type Type2 = 'Alice' | 'John'

const asdf: Type2 = 'Alice'

const user: User = {
  name: 'Alice',
  surname: 'Young',
  email: 'email@email.com',
  contact: ''
}