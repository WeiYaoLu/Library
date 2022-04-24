let popUpForm = document.querySelector(".popUp");
let newbutton = document.querySelector(".make");
let closebutton = document.querySelector(".close");
newbutton.addEventListener('click', () => popUpForm.style.display = 'block');
closebutton.addEventListener('click', () =>popUpForm.style.display = 'none');

let add = document.getElementById('addButton');
add.addEventListener('click', addToLibrary);


let cards = document.querySelector("cards");
let myLibrary = [];
function Book(title,author,pages,read){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + 'pg';
    this.read = form.read.checked;
}
let newBook;
function addToLibrary(){
    event.preventDefault();
    popUpForm.style.display = 'none';

    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    setBook();
    updateDisplay();
    console.table(myLibrary);
    form.reset();
}

function updateDisplay(){
    const display = document.querySelector(".cards");
    const card = document.querySelectorAll(".card");
    card.forEach(card => display.removeChild(card));

    for(let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(book){
    const cards = document.querySelector(".cards");
    const card = document.createElement('div'); 
    card.classList.add('card');

    const title = document.createElement('div');
    title.textContent = book.title;

    const author = document.createElement('div');
    author.textContent = book.author;

    const pages = document.createElement('div');
    pages.textContent = book.pages;

    const read = document.createElement('div');
    if(book.read == 'yes') read.textContent = 'yes';
    else read.textContent = 'no';

    cards.appendChild(card);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(pages);
}

function setBook(){
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}