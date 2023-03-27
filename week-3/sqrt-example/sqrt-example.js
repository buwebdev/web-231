/*
============================================
; Title:  sqrt-example.js 
; Author: Professor Krasso
; Date:   27 March 2023 
; Description: Demonstrates how to capture a
    a value from an HTML input field, squares 
    the value, and assigns it to the innerHTML
    of an HTML div. 
;===========================================
*/

function calcSquareRoot () {
    // Captured value the HTML pages input field. 
    const txtSqrt = document.getElementById('txtSqrt').value 

    // Calls JavaScripts built-in Math.sqrt() function to square the inputted value. 
    const squareRoot = Math.sqrt(txtSqrt) 
    
    // Assigns the results from the square root function to the innerHTML of the sqrt-results div.
    document.getElementById('sqrt-results').innerHTML = squareRoot.toFixed(2) 
}