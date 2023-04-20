'use strict'

/**
 * Displays a persons full name
 * @param {string} firstName The first name
 * @param {string} lastName The last name
 * @returns {string} Returns full name
 */
function myName (firstName, lastName) {
  if (typeof firstName !== 'string' || typeof lastName !== 'string') {
    throw Error('inputs must be strings') // Throw a new error
  } // end of if block

  return firstName + ' ' + lastName
} // end of myName function

/**
 * The main program function
 */
function main () {
  /**
   * @const {string}
   */
  const first = 'Ludwig'

  /**
   * @const {string}
   */
  const last = 'Beethoven'

  /**
   * Try/catch block to handle potential thrown errors.
   */
  try {
    /**
     * Full name
     * @const {string}
    */
    const name = myName(first, last)

    // Write the results to the terminal window.
    console.log('My name is', name)
  } catch (err) {
    console.error('got err:', err.message)
  } // end catch block.
} // end of main function.

main() // Call the main function.