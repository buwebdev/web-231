/*
============================================
; Title:  arrays.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to define and output array values
;===========================================
*/

// array of numerical values
const numbers = [15, 22, 37, 14, 5]

// iterate over the array and output the results
console.log('-- DISPLAYING NUMBERS ARRAY --')
let index = 1
for (let x = 0; x < numbers.length; x++) {
  console.log(index + '.' + numbers[x])
  index++
}

// new line
console.log("\n")

// array of string values
const names = ['Steve', 'John', 'Chris', 'Adam', 'Jerry']

/**
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */
function getNames(arr) {
  let index = 1

  for (let j = 0; j < arr.length; j++) {
    console.log(index + '.' + arr[j])
    index++
  }
}

// call the getNames() function and output the contents of the names array
console.log('-- DISPLAYING STRING ARRAY --')
getNames(names)
