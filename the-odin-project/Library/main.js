// library array
const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read;
}

// toggle isRead
Book.prototype.isRead = function() {
  this.read = !this.read;
}

function isRead(index) {
  myLibrary[index].isRead();
  render();
}

// render
function render() {
  let libraryEL = document.querySelector("#library");
  libraryEL.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-card");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h5 class="author">${book.author}</h5>
      </div>
      <div class="card-body">
        <p>${book.pages} pages</p>
        <p class="read-status">Status: ${book.read ? 'Read' : 'Not Read'}</p>
        <button class="remove-button" onclick="removeBook(${i})">Remove</button>
        <button class="toggle-read-button" onclick="isRead(${i})">Toggle Read</button>
      </div>
    `;
    libraryEL.appendChild(bookEl);
  }

}

// removes book
function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  render();
}

// displays the form
let newBookButton = document.querySelector(".abutton");
newBookButton.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

// stops error when submitting to the backend
document.querySelector("#new-book-form").addEventListener("submit", function(event) {
  event.preventDefault();
  addBookToLibrary();
})