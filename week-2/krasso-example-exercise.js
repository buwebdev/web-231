/*
============================================
; Title:  krasso-example-exercise.js
; Author: Professor Krasso 
; Date:   20 February 2019
; Description: Demonstrates how to call the header.js file 
;              in an assignment. 
;===========================================
*/

// Require statement that imports the header.js file from my root directory.
const header = require('./header.js');

// Call the console.log() function and output a well-formatted header
console.log(header.display('Richard', 'Krasso', 'Example Exercise 2.2'));

// Welcome message 
console.log('\n--Welcome to Example Exercise 2.2--'); 