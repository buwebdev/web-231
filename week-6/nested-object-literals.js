/*
============================================
; Title:  nested-object-literals.js
; Author: Professor Krasso
; Date:   25 June 2017
; Description: Demonstrates how to create and display nested objects
;===========================================
*/

// object with nested object
const customer = {
  id: 1,
  name: "John Doe",

  // nested object
  order: {
    id: 100,
    amount: 99.99
  }
}

// output
console.log(customer.name + "'s invoice total is $" + customer.order.amount)
console.log('Order number ' + customer['order']['id'] + ' has an invoice total of $' + customer["order"]["amount"])
