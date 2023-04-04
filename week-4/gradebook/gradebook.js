/*
============================================
; Title:  gradebook.js
; Author: Professor Krasso
; Date:   4 April 2023
; Description: Demonstrates how to work with
;   user input and if...else if...else statements.
;===========================================
*/

/**
 * onclick function for the Calculate Exam Button in the gradebook.html file.
 */
function calcExamGrade () {
  const score = document.getElementById('txtScore').value // Captures the users inputted value.
  let resultsEl = document.getElementById('letter-results') // Reference to the letter-results div

  /**
   * Grade variables for each string message.  Includes CSS classes for styling.
   */
  const a = '<span class="green">You scored an A on the exam. Outstanding!</span>'
  const b = '<span class="blue">You scored a B on the exam. Great job!</span>'
  const c = '<span class="yellow">You scored a C on the exam.<span>'
  const d = '<span class="yellow">You scored a D on the exam.</span>'
  const f = '<span class="red">You scored an F on the exam.</span>'
  const error = '<span class="red">Input must be a number.</span>'

  /**
   * if...else if...else decision tree to determine the users
   * exam grade. The last else statements displays an error message
   * for invalid entries.
   */
  if (score >= 90) resultsEl.innerHTML = a
  else if (score >= 80) resultsEl.innerHTML = b
  else if (score >= 70) resultsEl.innerHTML = c
  else if (score >= 60) resultsEl.innerHTML = d
  else if (score >= 0) resultsEl.innerHTML = f
  else resultsEl.innerHTML = error
}