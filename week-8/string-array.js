/*
============================================
; Title:  arrays.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to define and output array values
;===========================================
*/

// array of string values
const names = ['Steve', 'John', 'Chris', 'Adam', 'Jerry'];

// call the getNames() function and output the contents of the names array
console.log('-- DISPLAYING STRING ARRAY --')

for (const name of names)
{
    console.log(name);
}
