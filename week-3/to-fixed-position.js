/*
============================================
; Title:  func-to-fixed-position.js
; Author: Professor Krasso
; Date:   3 January 2021
; Description: Demonstrates how to use JavaScripts built-in toFixed position function
;===========================================
*/

let numberWithOneDecimal = "12.34";
let numberWithTwoDecimals = "123.456";
const numberWithThreeDecimals = "78.91011";

console.log(parseFloat(numberWithOneDecimal).toFixed(1));
console.log(parseFloat(numberWithTwoDecimals).toFixed(2));
console.log(parseFloat(numberWithThreeDecimals).toFixed(3));
