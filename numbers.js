var score;
score = 0;
alert(score);
score += 100;
alert(score);

var secondsPerMinute = 60;
var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var age = prompt('how old are you?')

var secondsPerDay = secondsPerMinute * minutesPerHour * hoursPerDay

document.write('There are ' + secondsPerDay + ' seconds in a day.');
console.log('There are ' + secondsPerDay + ' seconds in a day.');

var yearsAliveInSeconds = secondsPerMinute * minutesPerHour * hoursPerDay *daysPerWeek * weeksPerYear * age;

var HTMLBadges = prompt('How many HTML badges do you have?');
var CSSBadges = prompt('How many CSS badges do you have?');
var totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
alert('Wow! You have ' + totalBadges + ' badges!');

var dieRoll = Math.floor(Math.random() * 6) + 1;
alert('You rolled a ' + dieRoll);


var input1 = prompt("Please type a starting number");
var bottomNumber =parseInt(input1);
var input = prompt('Please type a number');
var topNumber = parseInt(input);
var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
var message = "<p>" + randomNumber + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);