class AddError extends Error {
  constructor(message) {
    super(message);
  }
}

function add(a,b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new AddError("Type error");
  }

  return a + b;
}

console.log(add(1,2))

function f() {
  try {
    // Coś
    add("1",2);
    // Dalej coś
  } catch (e) {
    if (e instanceof AddError) {
      console.log("Error! " + e)
    } else {
      throw e;
    }
  } finally {

  }
}

f()