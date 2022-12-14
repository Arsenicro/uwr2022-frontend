

interface User5<T> {
  name: string;
  surname: string;
  permissions: T;
}

const user22: User5<'admin'|'user'> = {
  name: 'Alice',
  surname: 'Young',
  permissions: "admin"
}

const addToObject = <T extends object>(object: T, property: string, value: string) => {
  return {...object, [property]: value}
}

addToObject({}, 'asdf', 'asdf')

// fetch<{name: string}>(...) response

const set = new Set<number>()

//set.add("asdf")



