/*
============================================
; Title:  array-sort.js
; Author: Professor Krasso
; Date:   1 January 2018
; Description: Demonstrates how to sort a string array
;===========================================
*/

// string array of states
const states = ['Nebraska', 'Iowa', 'Minnesota', 'Alabama', 'Florida']

// unsorted array using JavaScript's built-in forEach() function
console.log('-- DISPLAYING AN UNSORTED ARRAY --');
states.forEach(state => console.log(state));

// sorted array using JavaScript's built-in sort() and forEach() functions
console.log('\n-- DISPLAYING A SORTED ARRAY --');
states.sort().forEach(state => console.log(state));
