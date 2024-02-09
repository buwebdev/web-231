/*    JavaScript 7th Edition
      Chapter 3
      Chapter case

      Tipton Turbines
      Baseball Schedule Data
      Author: 
      Date:   

      Filename: schedule.js
*/

// date of games played
let gameDates = ["2024-7-28", "2024-8-1", "2024-8-2", "2024-8-3",
                 "2024-8-4", "2024-8-6", "2024-8-8", "2024-8-9", "2024-8-10",
                 "2024-8-11", "2024-8-12", "2024-8-14", "2024-8-16", "2024-8-17",
                 "2024-8-18", "2024-8-20", "2024-8-22", "2024-8-23", "2024-8-24",
                 "2024-8-25", "2024-8-28", "2024-8-30", "2024-8-31"];

// game opponents
let gameOpponents = ["Bettendorf", "Marion", "Clinton", "Clinton",
                     "Clinton", "Urbandale", "Cedar Falls", "Cedar Falls", "Cedar Falls",
                     "Bettendorf", "Bettendorf", "Ames", "Ames", "Ames",
                     "Waukee", "Waukee", "Mason City", "Mason City", "Mason City",
                     "Clinton", "Marion", "Cedar Falls", "Cedar Falls"];

// game locations: h (home) or a (away)
let gameLocations = ["h", "a", "h", "h", "h", "h", "a", "a", "a", "a", "a", "h", "h", "h",
                     "a", "a", "a", "a", "a", "a", "h", "h", "h"];

// runs scored in each game
let runsScored =    [2, 4, 2, 1, 0, 2, 2, 1, 8, 3, 4, 7, 4, 1, 2, 0, 8, 6, 3, 0, 5, 7, 3];

// runs allowed in each game
let runsAllowed =   [1, 2, 0, 5, 3, 3, 1, 5, 3, 1, 3, 6, 7, 4, 6, 3, 2, 4, 1, 0, 3, 2, 4];

// innings played in each game
let gameInnings =   [9, 9, 9, 6, 9, 9, 12, 7, 9, 9, 9, 11, 9, 4.5, 9, 9, 9, 9, 9, 0, 2, 9, 10];

// game outcome: W (win), L (lose), S (suspended prior to completion), P (postponed to later date)
let gameResults =    ["W", "W", "W", "L", "L", "L", "W", "L", "W", "W", "W", "W", "L", "S", 
                      "L", "L", "W", "W", "W", "P", "S", "W", "L"];
                      
                      
                      
                      