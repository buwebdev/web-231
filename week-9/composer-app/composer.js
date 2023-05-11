/*
============================================
; Title:  composer.js
; Author: Professor Krasso
; Date:   11 May 2023
; Description: Main JavaScript file for the Composer App
;===========================================
*/

'use strict'

/**
 * Person class with a name property and one method.
 * @class
 */
class Person {
  /**
   * @param {string} name Somebody's name.
   */
  constructor (name) {
    this.name = name
  } // end constructor.

  /**
   * Method that returns somebody's name
   * @returns {string}
   */
  getName () {
    return this.name
  } // end getName() method
} // end Person class

/**
 * Composer class that extends the Person object with a name property and
 * one method.
 * @class
 */
class Composer extends Person {
  /**
   * @param {string} name
   */
  constructor (name) {
    super(name) // call the Person's constructor.
  } // end constructor

  /**
   * @returns {string} Composers preferred genre
   */
  getGenre () {
    return 'classical music!'
  } // end getGenre() method
} // end Composer class

/**
 * Registered onclick event for the Submit button in the HTML page.
 */
function submit () {
  let resultsEl = document.getElementById('results') // Reference the results element.
  let resultMsg = `<h3>Composer Listing</h3>` // Create the initial part of a string template.

  /*
   * If mozart is selected, create a new Composer object, call the getGenre() method from the
   * Composer object, and call the getName() method from the Person object.
   */
  if (document.getElementById('mozart').checked) {
    displayComposer('mozart', resultMsg, resultsEl) // Call to the displayComposer function.
  } else if (document.getElementById('beethoven').checked) {
    displayComposer('beethoven', resultMsg, resultsEl) // Call to the displayComposer function.
  } else if (document.getElementById('brahms').checked) {
    displayComposer('brahms', resultMsg, resultsEl) // Call to the displayComposer function.
  } else if (document.getElementById('wagner').checked) {
    displayComposer('wagner', resultMsg, resultsEl) // Call to the displayComposer function.
  } else if (document.getElementById('debussy').checked) {
    displayComposer('debussy', resultMsg, resultsEl) // Call to the displayComposer function.
  } else {
    resultsEl.innerHTML = '' // Reset the resultsEl innerHTML to an empty string.
    alert('Invalid selection, please try again!') // Display an windows alert message for invalid selections.
  } // end else
} // end submit function

/**
 * Displays the selected composers name and genre
 * @param {string} radio Radio button's ID
 * @param {string} msg Message to display
 * @param {string} resultsEl Reference to the results HTML div
 */
function displayComposer (radio, msg, resultsEl) {
  const name = document.getElementById(radio).value
  const composer = new Composer(name)
  msg += `<p class="composer-listing">${composer.getName()} plays ${composer.getGenre()}</p>`
  resultsEl.innerHTML = msg
} // end displayComposer() function.