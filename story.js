var questions = 3
// '[3 questions left]'
var questionsLeft = ' [' + questions + ' questions left]';
var adjective = prompt('Please type an adjective' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var sentence = "<h2>There once was a " + adjective;
var verb = prompt('Please type a verb' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
var noun = prompt('Please type a noun' + questionsLeft);
alert('All done. Ready for the message');
sentence += ' programmer who wanted to use JavaScript to ' + verb;
sentence += ' the ' + noun + '.</h2>';
document.write(sentence);
console.log('end of story');