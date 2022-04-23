let myLibrary = [];
function Book(title,author,pages,read){
    this.read = false;
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

