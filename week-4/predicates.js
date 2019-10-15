/*
============================================
; Title:  predicates.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to declare and and use JavaScript predicates
;===========================================
*/

/**
 * Params: comparable value
 * Response: true/false
 * Description: Returns true/false given the comparision
 */
function predicate_example(x) {
  return x > 8
}

// array of numbers
let even_numbers = [2, 4, 6, 8, 10]

// call the built-in JavaScript filter function and pass-in the predicate function
const filtered_numbers = even_numbers.filter(predicate_example)

// output
console.log(filtered_numbers[0] + ' is greater than 8')
