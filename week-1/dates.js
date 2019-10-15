/*
============================================
; Title:  dates.js
; Author: Professor Krasso
; Date:   30 November 2018
; Description: Demonstrates the usage of dates in Node.js
;===========================================
*/

// variables
let date = new Date()
let now = date.toLocaleDateString()
let nowV2 = date.toLocaleDateString('en-US')

// output
console.log(' -- DATE WITH DASHES --')
console.log(now)

console.log('') // new line

console.log(' -- DATE WITH SLASHES --')
console.log(nowV2)
