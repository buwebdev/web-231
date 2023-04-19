/*
============================================
; Title:  composer.js
; Author: Professor Krasso
; Date:   19 April 2023
; Description: Demonstrates how to work with
;   string arrays and dynamic HTML table data.
;===========================================
*/

// String arrays for composers and genres
const composers = ['Ludwig van Beethoven', 'Johann Sebastian Bach', 'Wolfgang Amadeus Mozart', 'Johannes Brahms', 'Richard Wagner']
const genres = ['Classical', 'Rock', 'Pop', 'Jazz', 'Blues']

/**
 * This function handles the btnDisplay onclick event.
 */
function display () {
  // Capture the users selected radio item
  const choice = document.querySelector('input[name="choice"]:checked').value

  const resultsEl = document.getElementById('results') // Create a reference to the results div

  /**
   * If choice is equal to composers, build a string variable and assign
   * it to the result div's innerHTML section.
   */
  if (choice === 'composers') {
    let tblComposers = `
      <h3>Composer Listing</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
    `
    /**
     * for...of loop.  Iterates over the composers string array
     * and appends the array element to the tblComposers variable.
     */
    for (const composer of composers) {
      tblComposers += `
        <tr>
          <td>${composer}</td>
        </tr>`
    }
    tblComposers += `</tbody></table>`
    resultsEl.innerHTML = tblComposers // assign the variable to the innerHTML section.
    return
  }

  /**
   * If the choice is equal to genre, build a string variable and assign
   * it tot he result div's innerHTML section.
   */
  if (choice === 'genre') {
    let tblGenre = `
      <h3>Genre Listing</h3>
      <table>
        <thead>
          <tr>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
    `
    /**
     * for...of loop.  Iterates over the genre string array and appends
     * the array element to the tblGenre variable.
     */
    for (const genre of genres) {
      tblGenre += `
        <tr>
          <td>${genre}</td>
        </tr>
      `
    }
    tblGenre += `</tbody></table>`
    resultsEl.innerHTML = tblGenre // assign the variable to the innerHTML section.
    return
  }
}