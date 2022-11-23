console.log("1")
console.log("2")

/* setTimeout(() => {
  console.log("3");
}, 2000) */

console.log("4")


console.log("5")

function getShopingList(userData, callback) {
  setTimeout(() => {
    console.log("I have user data!")
    callback("product")
  }, 1000)
}


function login(username, password, callback) {
  setTimeout(() => {
    console.log("I have user data!")
    callback({data: "Sth"})
  }, 1000)
}

login("Alice", "Young123", (data) => { getShopingList(data, () => {
  //...
}) });


const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("I have user data!")
    resolve()
  }, 1000)
})

promise.then(() => {
  console.log("Here!")
})

