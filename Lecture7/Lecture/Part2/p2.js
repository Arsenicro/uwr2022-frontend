const header = document.getElementById("header");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

function changeColor(e) {
  console.log(e)
  console.log(this)
  header.style.color = "red";
}

function changeText(e) {
  header.innerText = "World!";
}

button2.onclick = changeColor


button3.addEventListener("click", function(e) {
  console.log(e)
  console.log(this)
  header.style.color = "red";
})

button3.addEventListener("click", function(e) {
  header.innerText = "World!";
})

document.querySelector("div").addEventListener("click", function(e) {
  alert("div");
}) //, {capture: true}

document.querySelector("div > p").addEventListener("click", function(e) {
  alert("p");
})

document.querySelector("div > p > button").addEventListener("click", function(e) {
  alert("button2");
})

document.querySelector("div > p > button").addEventListener("click", function(e) {
  //e.stopPropagation();
  e.stopImmediatePropagation()
  alert("button");
})
