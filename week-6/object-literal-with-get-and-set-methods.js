/*
============================================
; Title:  object-literal-with-get-and-set-methods.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create an object with get/set functions
;===========================================
*/

let person = {
  fullName: "John Doe",

  get name() {
    return this.fullName;
  },

  set name(val) {
    this.fullName = val;
  }
}

// output
console.log(' -- BEFORE -- ')
console.log(person.name)

// reassign the name
person.name = "Jane Doe"

console.log("") // new line

// output
console.log(' -- AFTER --')
console.log(person.name)
