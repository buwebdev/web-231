/*  JavaScript 7th Edition
    Chapter 1
    Chapter case

    Tinley Xeriscapes
    Author: 
    Date:   

    Filename: js01b.js
*/

//define variables containing plant filenames
let blanket = "blanket.jpg";
let rugosa = "rugosa.jpg";
let bluestem = "bluestem.jpg";

//add event handlers to the list items
document.getElementById("blanket").onclick = function() {
   document.getElementById("plantImg").src = blanket;
}
document.getElementById("rugosa").onclick = function() {
   document.getElementById("plantImg").src = rugosa;
}
document.getElementById("bluestem").onclick = function() {
   document.getElementById("plantImg").src = bluestem;
}

/*
   Information on available plants
   including link to USDA website
*/

let captionText = "<p>Plant choices for " +
                  "<a href='http://planthardiness.ars.usda.gov'>" +
                  "hardiness zones</a>" +
                  " 5a - 6b </p>";

document.getElementById("imgCaption").innerHTML = captionText;