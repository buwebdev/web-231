"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Image List

      Filename:lightbox_data.js
*/

// Title of the slideshow
let lightboxTitle = "My Western Vacation";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Sky Pond (Rocky Mountain National Park)";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";
imgCaptions[8]="Teton Crest Trail (Grand Teton National Park)";
imgCaptions[9]="The Notch Trail (Badlands National Park)";
imgCaptions[10]="Sprague Lake (Rocky Mountain National Park)";
imgCaptions[11]="Longs Peak Trail (Rocky Mountain National Park)";

// Count of images in the slideshow
let imgCount = imgFiles.length;
