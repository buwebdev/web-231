/*
============================================
; Title:  to-fixed-position.js
; Author: Professor Krasso
; Date:   7 December 2017
; Description: Displays a toFixed position value
;===========================================
*/

let v = 33.3;
let place = 1;

function formatNumber(val, numOfPos) {
  return val.toFixed(numOfPos)
}

console.log('Formatted number: ' + formatNumber(v, place))
