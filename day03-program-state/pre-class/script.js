// global scope
var globalVariable = 0;
var previousRoll = 0;
var totalRoll = 0;
var totalWin = 0;

var introScopeMain = function (input) {
  // Attempt the Follow Along exercise from the Intro to Scope module below with introScopeMain as the main function.
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = "you win";
  }

  return myOutputValue;
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    if (previousRoll != 0) {
      myOutputValue = `Your last roll was ${previousRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You WIN! `;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You WIN!`;
    }
  } else {
    if (previousRoll != 0) {
      myOutputValue = `Your last roll was ${previousRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose! `;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
    }
  }
  previousRoll = randomDiceNumber;
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var randomDiceNumber = rollDice();
  var winPercent = (totalWin / totalRoll) * 100;
  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    if (previousRoll != 0) {
      myOutputValue = `Your last roll was ${previousRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You WIN! You win ${winPercent}% of the time.`;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You WIN!`;
    }
    totalWin += 1;
  } else {
    if (previousRoll != 0) {
      myOutputValue = `Your last roll was ${previousRoll}. You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose! You win ${winPercent}% of the time.`;
    } else {
      myOutputValue = `You just rolled a ${randomDiceNumber}. You guessed ${input}. You lose!`;
    }
  }
  previousRoll = randomDiceNumber;
  totalRoll += 1;
  return myOutputValue;
};

var rollCount = [0, 0, 0, 0, 0, 0];

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var randomDiceNumber = rollDice();
  var myOutputValue = "you lose";
  rollCount[randomDiceNumber - 1] += 1;
  var maxValue = 0;
  var indexMaxValue = 0;
  for (var i = 0; i < rollCount.length; i++) {
    if (maxValue < rollCount[i]) {
      indexMaxValue = i + 1;
      maxValue = rollCount[i];
    }
  }
  if (randomDiceNumber == input) {
    myOutputValue = `You just rolled a ${randomDiceNumber}. ${indexMaxValue} is your most rolled number. You guessed ${input}. You WIN! `;
  } else {
    myOutputValue = `You just rolled a ${randomDiceNumber}. ${indexMaxValue} is your most rolled number. You guessed ${input}. You lose! `;
  }
  return myOutputValue;
};

var totalPoints = 0;

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = `you win 2 points. You have ${totalPoints} points`;
    totalPoints += 2;
  } else if (randomDiceNumber == input - 1 || randomDiceNumber == input + 1) {
    myOutputValue = `you win 1 points. You have ${totalPoints} points`;
    totalPoints += 1;
  } else {
    myOutputValue = `you lose. You have ${totalPoints} points`;
  }
  return myOutputValue;
};

var totalPoints2 = 0;

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue = "you lose";

  if (randomDiceNumber == input) {
    myOutputValue = `you win 5 points. You have ${totalPoints2} points`;
    totalPoints2 += 5;
  } else if (randomDiceNumber == input - 1 || randomDiceNumber == input + 1) {
    myOutputValue = `you win 4 points. You have ${totalPoints2} points`;
    totalPoints2 += 4;
  } else if (randomDiceNumber == input - 2 || randomDiceNumber == input + 2) {
    myOutputValue = `you win 3 points. You have ${totalPoints2} points`;
    totalPoints2 += 3;
  } else if (randomDiceNumber == input - 3 || randomDiceNumber == input + 3) {
    myOutputValue = `you win 2 points. You have ${totalPoints2} points`;
    totalPoints2 += 2;
  } else if (randomDiceNumber == input - 4 || randomDiceNumber == input + 4) {
    myOutputValue = `you win 1 points. You have ${totalPoints2} points`;
    totalPoints2 += 1;
  } else {
    myOutputValue = `you lose. You have ${totalPoints2} points`;
  }
  return myOutputValue;
};

var mode = "green";

var followAlongMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }
  return myOutputValue;
};

var modeRed = "green";

var redModeMain = function (input) {
  // Attempt the Red Mode exercise from the Program State for Game Modes module below with redModeMain as the main function.
  if (input == "greenmode") {
    modeRed = "green";
  } else if (input == "bluemode") {
    modeRed = "blue";
  } else if (input == "redmode") {
    modeRed = "red";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (modeRed == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  } else if (modeRed == "red") {
    myOutputValue =
      "We are all liberals till our liberties are at risk due to others' liberties. -realities";
  }
  return myOutputValue;
};
