'use strict'

/*
============================================
; Title:  ex03.js
; Author: Professor Krasso
; Date:   20 April 2023
; Description: Exception handling example
;===========================================
*/

/**
 * Main program function.
 */
function main () {

  /**
   * @const {string}
   */
  const strNum = '5'

  /**
   * Parses a string value to a floating number
   * @const {number}
   */
  const parsedNum = parseFloat(strNum) // Call JavaScripts built-in parseFloat() function.

  console.log(typeof parsedNum) // write variables type to the terminal window.
  console.log(parsedNum) // write the parsed number to the terminal window.

  /**
   * @const {string}
   */
  const foo = 'foo'

  /**
   * @const {NaN}
   */
  const parsedFoo = parseFloat(foo) // Call JavaScript's built-in parseFloat() function

  console.log(typeof parsedFoo) // write the variables type to the terminal window.
  console.log(parsedFoo) // write the variable to the terminal window.

} // end of main function.

main() // call the main function.