console.log("app.js is running in node!");


'use strict'
var movie = require("./movie");
var threeFavouriteMovies = [];
threeFavouriteMovies.forEach(function(film){
  // your code here
  // console.log(film);
  threeFavouriteMovies[0] = movie();
});

console.log(threeFavouriteMovies[0]);

var text = movie();

console.log(text);

// var a = ["a", "b", "c"];

// a.forEach(function(element) {
//     console.log(element);
// });

// const randomNumber = require("./randomizer");

// const winningNumbers = [];
// for(let i = 0; i < 10; i++) {
//   winningNumbers.push(randomNumber(0,100));
// }

// console.log("tonight's winning numbers are", winningNumbers, "!");

// const testExport = require("./movie");

// theResult = testExport();

// console.log(theResult);




