var userWin = 0;
var comWin = 0;
var draws = 0;
var mode = true;

var main = function (input) {
  var myOutputValue = "Input scissors, paper or stone"; //user input error default output
  var randomDigit = Math.floor(Math.random() * 3);
  var comChoice = "";
  switch (randomDigit) {
    case 1:
      comChoice = "scissors";
      break;
    case 2:
      comChoice = "paper";
      break;
    default:
      comChoice = "stone";
      break;
  }

  if (mode == true) {
    // check for reverse mode
    if (input == comChoice) {
      //check draw conditions
      myOutputValue = `ITS A DRAW! </br>input scissors, paper or stone to continue. </br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
      draws += 1;
    } else if (
      //check losing conditions
      (input == "scissors" && comChoice == "stone") ||
      (input == "stone" && comChoice == "paper") ||
      (input == "paper" && comChoice == "scissors")
    ) {
      comWin += 1;
      myOutputValue = `Computer chose ${comChoice}, you lose! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (
      //check winning conditions
      (input == "scissors" && comChoice == "paper") ||
      (input == "stone" && comChoice == "scissors") ||
      (input == "paper" && comChoice == "stone")
    ) {
      userWin += 1;
      myOutputValue = `Computer chose ${comChoice}, you win! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (input == "reverse") {
      mode = !mode;
    }
  } else {
    if (input == comChoice) {
      //check draw conditions
      myOutputValue = `ITS A DRAW! </br>input scissors, paper or stone to continue. </br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
      draws += 1;
    } else if (
      //check losing conditions
      (input == "scissors" && comChoice == "stone") ||
      (input == "stone" && comChoice == "paper") ||
      (input == "paper" && comChoice == "scissors")
    ) {
      userWin += 1;
      myOutputValue = `Computer chose ${comChoice}, you win! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (
      //check winning conditions
      (input == "scissors" && comChoice == "paper") ||
      (input == "stone" && comChoice == "scissors") ||
      (input == "paper" && comChoice == "stone")
    ) {
      comWin += 1;
      myOutputValue = `Computer chose ${comChoice}, you lose! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (input == "reverse") {
      mode = !mode;
    }
  }
  return myOutputValue;
};
