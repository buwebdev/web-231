/*
============================================
; Title:  function-properties.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to define and call function properties
;===========================================
*/

// function property definitions
dog.bark = "Woof! Woof!"
cat.meow = "Meow! Meow!"

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function dog() {
  return dog.bark
}

/**
 * Params: none
 * Response: function property value
 * Description: returns the value assigned to a function property
 */
function cat() {
  return cat.meow
}

// output
console.log('What does a dog say? \n    >> ' + dog())
// new line
console.log('\n')
// output
console.log('What does a cat say? \n    >> ' + cat())
