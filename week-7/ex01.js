/*
============================================
; Title:  ex01.js
; Author: Professor Krasso
; Date:   20 April 2023
; Description: Exception handling example
;===========================================
*/

'use strict'

/**
 * Solves the equations of the form x + y = a
 * @param {number} x The first value to add
 * @param {number} y The second value to add
 * @returns {number} Returns the sum of x and y
 *
 * @example
 *    add(5, 5)
 */
function add (x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw Error('inputs must be numbers')
  }

  return x + y
}

/**
 * Main program function
 * @returns {void}
 */
function main () {
  /**
   * Try/catch block to handle thrown errors.
   */
  try {
    /**
     * Sum of two values
     * @const {number}
    */
    const sum = add(5, 5)

    // Write the results to the terminal window.
    console.log('The sum is', sum)
  } catch (err) {
    console.error('got err:', err.message)
  } // end catch block.
} // end main function.

main() // call the main function.