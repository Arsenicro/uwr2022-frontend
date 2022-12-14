const newNumber = document.getElementById('newNumber') as HTMLInputElement;
const count = document.getElementById('count') as HTMLInputElement;
const form = document.getElementById('form');

const addNumbers = (a: string | number, b: string | number) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  
  throw new Error("error!")
}

form!.addEventListener('submit', (e) => {
  e.preventDefault();
  count.value = addNumbers(count.value, newNumber.value) + '';
  newNumber.value = "";
})