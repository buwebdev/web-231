'use strict'

/**
 * Builds a string from the functions arguments
 * @param {string} firstName The composers first name
 * @param {string} lastName The composers last name
 * @returns {string} Returns the composers full name
 */
function getComposer (firstName, lastName) {
  const fname = parseFloat(firstName)
  const lname = parseFloat(lastName)

  if (!isNaN(fname) || !isNaN(lname)) {
    throw Error('inputs must be strings') // throw error
  } // end if block.

  if (firstName.length === 0 || lastName.length === 0) {
    throw Error('inputs are required') // throw error
  } // end if block

  return firstName + ' ' + lastName // return a concatenated string
} // end getComposer function

/**
 * Button submit event.
 */
function submit () {
  /**
   * @const {string}
   */
  const firstName = document.getElementById('txtFirstName').value

  /**
   * @const {string}
   */
  const lastName = document.getElementById('txtLastName').value

  /**
   * @const {HTML}
   */
  const resultsEl = document.getElementById('composer-results')

  /**
   * @type {string}
   */
  let output = `
    <h3>Composer Listing</h3>
  `

  /**
   * Try/catch block to handle thrown errors
   */
  try {
    /**
     * Composer full name
     * @const {string}
     */
    const composer = getComposer(firstName, lastName)

    output += `<p>Name: ${composer}</p>` // Append the composer name to the output string.
    resultsEl.innerHTML = output // Assign the output string to the innerHTML of the result div.
  } catch (err) {
    output += `<p style="color: red;">ERROR: ${err.message}</p>` // Append the error message to the output string.
    resultsEl.innerHTML = output // Assign the output string to the innerHTML of the result div.
  } // end catch block.
} // end submit event.