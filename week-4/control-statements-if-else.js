/*
============================================
; Title:  control-statements-if-else.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Displays a string message if the choice variable equals C
;===========================================
*/

// variable
const choice = "C";

// if...else statements
if (choice === "A") {
  console.log("A");
} else if (choice === "B") {
  console.log("B");
} else if (choice === "C") {
  console.log("Winner winner, chicken dinner!");
} else if (choice === "D") {
  console.log("D");
} else {
  console.log("Invalid choice");
}
