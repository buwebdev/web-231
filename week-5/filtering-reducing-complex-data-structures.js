/*
============================================
; Title:  filtering-reducing-complex-data-structures.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to filter list of collection objects
;===========================================
*/

// object collection
const famousPoets = [
  {
    firstName: "William",
    lastName: "Wordsworth"
  },
  {
    firstName: "William",
    lastName: "Shakespeare"
  },
  {
    firstName: "Percy",
    lastName: "Shelley"
  },
  {
    firstName: "Robert",
    lastName: "Frost"
  },
  {
    firstName: "Maya",
    lastName: "Angelou"
  }
]

// return a new list of objects with only the lastName field
let lastNames = famousPoets.map((poet) => {
  return poet.lastName
})

// output
console.log('-- DISPLAYING MY FAVORITE COMPOSERS LAST NAMES --')
index = 1
lastNames.forEach((lastName) => {
  console.log(index + '. ' + lastName)
  index++
})
