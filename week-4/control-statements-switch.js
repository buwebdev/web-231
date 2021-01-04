/*
============================================
; Title:  control-statements-switch.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Displays a string message if the choice variable equals C
;===========================================
*/

// variable
const choice = 'C'

// switch statement
switch (choice) {
  case 'A':
    console.log('A')
    break
  case 'B':
    console.log('B')
    break
  case 'C':
    console.log('Winner winner, chicken dinner!')
    break
  case 'D':
    console.log('D')
    break
  default:
    console.log('Invalid Choice')
    break
}
