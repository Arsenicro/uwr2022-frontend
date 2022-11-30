const table = document.getElementsByTagName("table")[0];
const element = document.getElementById("first")
let highlighted;

table.addEventListener("click", function(e) {
  const target = e.target;

  if(target.tagName !== "TD") return;

  if (highlighted) {
    highlighted.classList.remove("red");
  }
  highlighted = target;
  target.classList.add("red")
})

element.addEventListener("click", (e) => {
  e.stopPropagation();
})
