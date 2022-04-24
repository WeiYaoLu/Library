let popUpForm = document.querySelector(".popUp");
let newbutton = document.querySelector(".make");
console.log(newbutton);
newbutton.addEventListener('click', () => popUpForm.style.display = 'block');




let cards = document.querySelector("cards");
let myLibrary = [];
function Book(title,author,pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.info = function(){
    let s = title + ", " + author + ", " + pages + " pages";
    read ? s += " read" : s += " not read yet"; 
    return s;
}

function addToLibrary(){
    myLibrary.push(b);
}

function makeform(){
    let newform = document.querySelector
}
