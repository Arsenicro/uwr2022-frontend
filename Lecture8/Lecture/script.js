const getData = async () => {
  const response = await fetch("http://localhost:3000/books/11", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Do obsługi błędów
  console.log(response.ok);

  const data = await response.json();

  document.getElementById("books").innerHTML = data.map(
    (book) => `
      <li>${book.title}, ${book.author} (${book.pages})</li>
    `
  ).join('');
};

getData();

document.getElementById("addBook").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector('[name="title"]').value;
  const author = document.querySelector('[name="author"]').value;
  const pages = document.querySelector('[name="pages"]').value;

  fetch('http://localhost:3000/books', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({title, author, pages})
  })
})
