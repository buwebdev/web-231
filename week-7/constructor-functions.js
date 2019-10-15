/*
============================================
; Title:  constructor-functions.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to work with constructor functions
;===========================================
*/

// object
const book = {
  title: 'JavaScript: The Definitive Guide, 6th edition',
  author: 'Flanagan',
  publicationDate: '2011'
};

// output
console.log(' -- DISPLAYING THE COURSES TEXTBOOK --')
console.log(book.title);

console.log(""); // new line

/**
 * Params: title, author
 * Response: void
 * Description: sets the title and author of an object
 */
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// create 3 new objects
const books = [
  new Book('Don Quixote', 'Miguel De Cervantes'),
  new Book('A Tale of Two Cities', 'Charles Dickens'),
  new Book('The Lord of the Rings', 'J.R.R. Tolkien')
];

// output
console.log('-- DISPLAYING A LIST OF MY FAVORITE BOOKS --')
let index = 1
for (let x = 0; x < books.length; x++) {
  console.log(index + '. ' + books[x].title)
  index++
}
