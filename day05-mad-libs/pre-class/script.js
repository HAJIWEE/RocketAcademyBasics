var guesses = [];

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var followArraysMain = function (input) {
  // Attempt the Follow Along exercise from the Arrays module below with followArraysMain as the main function.
  // Add user input to array
  guesses.push(input);

  //Generate random dice number
  var randomDiceNumber = rollDice();

  var myOutputValue = `You lose. Your Guesses: ${guesses}`;

  if (randomDiceNumber == input) {
    myOutputValue = `You win. Your Guesses: ${guesses}`;
  }

  return myOutputValue;
};

var names = [];

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.

  var found = false;

  for (var index = 0; index < names.length; index += 1) {
    var currentName = names[index];
    if (currentName == input) {
      found = true;
    }
  }
  if (!found) {
    names.push(input);
  }
  var myOutputValue = `All names: ${names}`;
  return myOutputValue;
};
