const newNumber = document.getElementById('newNumber') as HTMLInputElement;
const count = document.getElementById('count') as HTMLInputElement;
const form = document.getElementById('form');

const addNumbers = (a: string, b: string) => {
  return Number(a) + Number(b);
}

form!.addEventListener('submit', (e) => {
  e.preventDefault();
  count.value = addNumbers(count.value, newNumber.value) + '';
  newNumber.value = "";
})