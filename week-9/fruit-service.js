/*
============================================
; Title:  fruit-service.js
; Author: Professor Krasso
; Date:   1 January 2021
; Description: Demonstrates how to use functions within a class
;===========================================
*/

class Fruit
{
    constructor(id, type)
    {
        this.id = id;
        this.type = type;
    }
}

class FruitService
{
    fruits = []; // array of fruit objects

    constructor()
    {
    }

    /**
     * Returns an array of fruit objects
     * @returns {Fruit[]}
     */
    getFruits()
    {
        this.fruits = [
            new Fruit(100, "Apple"),
            new Fruit(101, "Orange"),
            new Fruit(102, "Pear")
        ]

        return this.fruits;
    }

    /**
     * Returns a single fruit object by ID
     * @param id String
     * @returns {Fruit}
     */
    getFruit(id)
    {
        for (const fruit of this.fruits)
        {
            if (fruit.id === id)
            {
                return fruit
            }
        }
    }
}

const fruitService = new FruitService(); // create a new instance of the FruitService class

let myFruits = fruitService.getFruits(); // call the getFruits function()

/**
 * Output the results of getFruits() function
 */
console.log("--DISPLAYING MY FRUIT LIST--")
for (const fruit of myFruits)
{
    console.log(`ID: ${fruit.id}\nType: ${fruit.type}\n`);
}

console.log(""); // new line for spacing

const myFavoriteFruit = fruitService.getFruit(101); // call the getFruit function and pass-in fruit id 101

/**
 * Output the results of the getFruit() function
 */
console.log("--DISPLAYING MY FAVORITE FRUIT--");
console.log(`ID: ${myFavoriteFruit.id}\nType: ${myFavoriteFruit.type}`);
