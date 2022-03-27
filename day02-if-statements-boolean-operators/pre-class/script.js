var orangeJuiceMain = function (numGuest, guestGlass) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  const orangesPerGlass = 4; //constant variable of 4 oranges reqired to make a glass of orange juice
  var requiredOranges = orangesPerGlass * guestGlass * numGuest;
  var myOutputValue = `Requires ${requiredOranges} to meet demand.`;
  return myOutputValue;
};

var paintMain = function (costOfPaint, numOfRoom, numOfCoat) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var areaOfRoom = 3 * 3;
  var litreOfPaint = (numOfRoom * areaOfRoom * numOfCoat) / 300;
  var costOfPaint = litreOfPaint * costOfPaint;
  var myOutputValue = `It will cost: $${costOfPaint}`;
  return myOutputValue;
};

var randomDiceMain = function () {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDecimal = Math.random() * 6;
  var randomDice = Math.floor(randomDecimal) + 1;
  var myOutputValue = `Dice rolled: ${randomDice}`;
  return myOutputValue;
};

var secretPhraseMain = function (input) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  var myOutputValue = "Wrong code, you spy";
  if (input == "Bunker and Badasses") {
    myOutputValue = "Hello fellow person of culture";
  } else if (input == "Wonderlands") {
    myOutputValue = "close but no cigar";
  }
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "You lose!";
  var randomDecimal = Math.random() * 6;
  var randomDice = Math.floor(randomDecimal) + 1;
  var guessedNum = input;
  if (guessedNum == randomDice) {
    myOutputValue = `You WIN!!!`;
  }
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var myOutputValue = "You lose!";
  var randomDecimal = Math.random() * 6;
  var randomDice = Math.floor(randomDecimal) + 1;
  var guessedNum = input * 2;
  if (guessedNum == randomDice) {
    myOutputValue = `You WIN!!!`;
  }
  return myOutputValue;
};
