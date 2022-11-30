/* console.log(document.getElementById("header"))


console.log(document.getElementsByTagName("h1"))

console.log(document.getElementsByClassName("box"))


console.log(document.querySelector("#box > p:nth-child(2)"))
console.log(document.querySelectorAll("#box > p"))


//document.getElementById("header").style.color = "red"
document.getElementById("header").classList.add("color", "background")
document.getElementById("header").classList.remove("color")

document.getElementById("header").innerText = "Alice"

const text = "Asdasdasf";

console.log("Inner", document.getElementById("header").outerHTML)

document.getElementById("header").innerHTML = `<button>${text}</button>`

const getP = () => {
  const p = document.createElement("p");

  p.innerText = "Hello!"

  return p;
}

document.querySelector("#box > p:nth-child(2)").append(getP())
document.querySelector("#box > p:nth-child(2)").prepend(getP())

//.before() .after()

//document.querySelector("#box > p:nth-child(3)").remove()
document.querySelector("#box > p:nth-child(3)").replaceWith(getP())


 */

console.log(document.querySelector("#box > p:nth-child(2)").parentElement)
console.log(document.querySelector("#box > p:nth-child(2)")) 
console.log(document.querySelector("#box > p:nth-child(2)").nextElementSibling)
console.log(document.querySelector("#box").children)

console.log(document.querySelector("#box > p:nth-child(2)").parentNode)
console.log(document.querySelector("#box > p:nth-child(2)")) 
console.log(document.querySelector("#box > p:nth-child(2)").nextSibling)
console.log(document.querySelector("#box").childNodes)