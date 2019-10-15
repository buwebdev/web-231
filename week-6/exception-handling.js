/*
============================================
; Title:  exception-handling.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create a try/catch/finally block
;===========================================
*/

try {
  // variables
  let x = 0
  let y = 1
  const sum = y / x

  // if statement
  if (sum === Infinity) throw 'DivideByZeroException'

  // output
  console.log(sum)
} catch (err) {
  console.log('Catch clause: ' + err)
} finally {
  console.log('Finally clause reached...')
}
