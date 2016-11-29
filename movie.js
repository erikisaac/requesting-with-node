console.log("movie.js is running in node!");

'use strict'

// // returns a random number between a min (inclusive) and max (exclusive) range
// function randomizer(min, max) {
//   return parseInt(Math.random() * (max - min) + min);
// }

// module.exports = randomizer;

function movie(film) {
	toPrint = "This worked!";
	return toPrint;
}

// var movie1 = $.get("http://www.omdbapi.com/?t=Star+Wars&?y=1977&?type=movie");

// console.log("This shold be Star Wars: " + movie1);

module.exports = movie;