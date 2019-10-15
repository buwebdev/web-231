/*
============================================
; Title:  predicates-ex2.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to declare and and use JavaScript predicates
;===========================================
*/

// array of strings
let fruits = ["apple", "orange", "mango"];

/**
 * Params: element, value
 * Response: true/false
 * Description: Returns true/false given the comparision
 */
function getFruit(el, value) {
  return el === value
}

console.log(" --Selected value-- ");
// output
console.log(
  fruits.filter // built-in JavaScript function for returning a subset of records
  (
    function (el) {
      return getFruit(el, "mango") // use the getFruit function to return a matching fruit
    }
  )[0] // return the first element in the return array
);
