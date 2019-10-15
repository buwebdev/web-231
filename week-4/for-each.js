/*
============================================
; Title:  for-each.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to output an array using the built-in JavaScript foreach function
;===========================================
*/

// array of strings
const fruits = ['apple', 'orange', 'mango', 'pear', 'grape', 'watermelon']

console.log('-- DISPLAYING MY FAVORITE FRUITS --')
let index = 1

/**
 * Params: callback function
 * Response: console message
 * Description: Outputs the contents of an array to the console window
 */
fruits.forEach(function (fruit) {
  console.log(index + '.' + fruit)
  index++
});
