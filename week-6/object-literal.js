/*
============================================
; Title:  object-literal.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create an object and output the properties
;===========================================
*/

// object
const person = {
  firstName: "John",
  lastName: "Doe"
}

// output
console.log('Full name by dot notation: ' + person.firstName + ' ' + person.lastName)
console.log('Full name by bracket notation: ' + person["firstName"] + ' ' + person["lastName"])
