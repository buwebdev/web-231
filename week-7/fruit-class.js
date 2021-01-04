/*
============================================
; Title:  fruit-class.js
; Author: Professor Krasso
; Date:   3 January 2021
; Description: Demonstrates how to create JavaScript classes with constructors
;===========================================
*/

/**
 * Fruit Class
 * Id and Type are required fields
 */
class Fruit
{
    constructor(id, type)
    {
        this.id = id;
        this.type = type;
    }
}

/**
 * Create 3 new fruit objects.
 */
const apple = new Fruit(100, "Apple");
const pear = new Fruit(101, "Pear");
const orange = new Fruit(102, "Orange");

/**
 * Display the contents of each fruit object to the console window.
 */
console.log(`ID: ${apple.id}\nType: ${apple.type}`);

console.log("");

console.log(`ID: ${pear.id}\nType: ${pear.type}`);

console.log("");

console.log(`ID: ${orange.id}\nType: ${orange.type}`);

console.log("");
