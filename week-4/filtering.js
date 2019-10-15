/*
============================================
; Title:  filtering.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to filter values in an array
;===========================================
*/

// array of string values
const names = ['Steve', 'John', 'Chris', 'Adam', 'Jerry']

// output
console.log("-- DISPLAYING NAMES --");
for (let j = 0; j < names.length; j++) {
  console.log(names[j]);
}

// new line
console.log("\n");

// output
console.log(" -- SELECTED VALUE --");
console.log(getName(names, "John"));

// new line
console.log("\n");

// output
console.log(" -- SELECTED VALUE --");
console.log(getName(names, "Adam"));

/**
 * Params: array, filterValue
 * Response: array element
 * Description: Returns a filtered value from an array
 */
function getName(arr, filterValue) {
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === filterValue) {
      return arr[k];
    }
  }
}
