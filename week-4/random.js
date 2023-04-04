/*
============================================
; Title:  random.js
; Author: Professor Krasso
; Date:   4 April 2023
; Description: Starter code for Assignment 4. Use the
;   the random number expression to generate a random number between
;   1 and 10.
;===========================================
*/

const rnd = Math.floor((Math.random() * 10) + 1) // Generates a random number between 1 and 10

/**
 * Unit test function
 */
function main () {
  console.log('Random number between 1 and 10:', rnd)
}

main()