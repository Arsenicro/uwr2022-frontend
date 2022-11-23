const promise = new Promise((resolve) => {
  setTimeout(() => {
    console.log("I have user data!")
    resolve()
  }, 1000)
})

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Shoping List!")
    resolve()
  }, 1000)
})

promise
  .then(() => { return promise2 })
  .then(() => { console.log("Shoped!") })

// async await

// await login()
// await shopingList()