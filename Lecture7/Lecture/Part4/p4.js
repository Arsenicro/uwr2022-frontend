const form = document.getElementById("addForm");
const input = document.getElementById("newName");
const list = document.getElementById("list");

const tab = [];

function rerender() {
  list.innerHTML = tab.map((value) => `<li>${value}</li>`).join('')
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  tab.push(input.value);
  input.value = "";
  rerender()
})


form.addEventListener("submit", function(e) {
  e.preventDefault();
  const element = document.createElement("li");
  element.innerText = input.value;
  element.addEventListener()
  list.append(element)
  input.value = "";
})