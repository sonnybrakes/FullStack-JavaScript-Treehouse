var answer = prompt('What programming language is the name of a gem?');
if (answer.toUpperCase() === 'RUBY') {
  document.write("<h1>That's right! " + answer + " is correct.</h1>")
}
  else {
    document.write('<h1>Check your answer and try again.</h1>')
  }

var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

if (parseInt(guess) === randomNumber) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
}

if ( true ) {
  document.write('The condition is true');
} else {
  document.write('The condition is false');
}

/* The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attempts to
guess the number. */

// assume the player didn't guess correctly
var correctGuess = false;

// generate random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');
if (parseInt(guess) === randomNumber) {
  correctGuess = true
}
if ( correctGuess ) {
  document.write('<p>You guessed the number!</p>');
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if player is
1. correct
2. guessed too high
3. guessed too low
*/

if (parseInt(guess) === randomNumber ) {
  correctGuess = true;
} else if ( parseInt(guess) < randomNumber ) {
  var guessMore = prompt('Try again. The number I am thinking of is more than ' + guess);
    if (parseInt(guessMore) === randomNumber ) {
      correctGuess = true;
    }
} else if ( parseInt(guess) > randomNumber ) {
  var guessLess = prompt('Try again. The number I am thinking of is less than ' + guess);
    if (parseInt(guessLess) === randomNumber ) {
      correctGuess = true;
    }
  }

// test if player is correct and output response
if ( correctGuess ) {
  document.write('<p>You guess the number!</p>')
} else {
  document.write('<p>Sorry. The number was ' + randomNumber + '.</p>')
}

// code challenge

// quiz begins, no answers correct

var correct = 0;

// ask questions
var answer1 = prompt("Name a programming language that's also a gem");
if ( answer1.toUpperCase() === 'RUBY' ) {
  correct += 1;
}
var answer2 = prompt("Name a programming language that's also a snake");
if ( answer2.toUpperCase() === 'PYTHON' ) {
  correct += 1;
}
var answer3 = prompt("What language do you use to style web pages?");
if ( answer3.toUpperCase() === 'CSS' ) {
  correct += 1;
}
var answer4 = prompt("What language do you use to build the structure of web pages?");
if ( answer4.toUpperCase() === 'HTML') {
  correct += 1;
}
var answer5 = prompt("What language do you use to add interactivity to a web page?");
if ( answer5.toUpperCase() === 'JAVASCRIPT') {
  correct += 1;
}

// output results
  document.write("<p>You got " + correct + " out of 5 questions correct.</p>");

// output rank
if ( correct === 5) {
  document.write("<p><strong>You earned a gold crown!</strong></p>");
} else if ( correct >= 3 ) {
  document.write("<p><strong>You earned a silver crown!</strong></p>");
} else if ( correct >= 1) {
  document.write("<p><strong>You earned a bronze crown!</strong></p>");
} else {
  document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}