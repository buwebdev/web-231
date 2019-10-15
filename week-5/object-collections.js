/*
============================================
; Title:  object-collections.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create an object collection and output the contents
;===========================================
*/

// collection of objects
const famousPoets = [
  {
    firstName: 'William',
    lastName: 'Wordsworth'
  },
  {
    firstName: 'William',
    lastName: 'Shakespeare'
  },
  {
    firstName: 'Percy',
    lastName: 'Shelley'
  },
  {
    firstName: 'Robert',
    lastName: 'Frost'
  },
  {
    firstName: 'Maya',
    lastName: 'Angelou'
  }
];

// output
console.log('-- DISPLAYING  A LIST OF FAMOUS COMPOSERS --')
let index = 1
famousPoets.forEach( (poet) => {
  console.log(index + '. ' + poet.firstName + ' ' + poet.lastName)
  index++
})
