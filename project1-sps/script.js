var userWin = 0; //number of time user win
var comWin = 0; //number of time computer win
var draws = 0; //number of draws
var mode = true; //true if normal scissor paper stone false if reversed.

var main = function (input) {
  var myOutputValue = "Input scissors, paper or stone"; //user input error default output
  //generate random choice for computer
  var randomDigit = Math.floor(Math.random() * 3); //random number from 0 to 2 0,1,2
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
  } //Generated a random choice for the computer

  if (mode == true) {
    // check for reverse mode
    if (input == comChoice) {
      //check draw conditions which means user input is same as computer's choice
      myOutputValue = `ITS A DRAW! </br>input scissors, paper or stone to continue. </br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
      draws += 1;
    } else if (
      //check losing conditions
      (input == "scissors" && comChoice == "stone") || //stone beat scissors
      (input == "stone" && comChoice == "paper") || //paper beat stone
      (input == "paper" && comChoice == "scissors") //scissors beat paper
    ) {
      comWin += 1;
      myOutputValue = `Computer chose ${comChoice},</br>You chose ${input} so you lose! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (
      //check winning conditions
      (input == "scissors" && comChoice == "paper") ||
      (input == "stone" && comChoice == "scissors") ||
      (input == "paper" && comChoice == "stone")
    ) {
      userWin += 1;
      myOutputValue = `Computer chose ${comChoice},,</br>You chose ${input} so you win! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (input == "reverse") {
      mode = !mode; //mode true !mode = false
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
      myOutputValue = `Computer chose ${comChoice},</br>You chose ${input} so you win! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (
      //check winning conditions
      (input == "scissors" && comChoice == "paper") ||
      (input == "stone" && comChoice == "scissors") ||
      (input == "paper" && comChoice == "stone")
    ) {
      comWin += 1;
      myOutputValue = `Computer chose ${comChoice},</br>You chose ${input} so you lose! </br>Input scissors, paper or stone to continue.</br>You won: ${userWin}</br>Computer won: ${comWin}</br>Draws : ${draws}`;
    } else if (input == "reverse") {
      mode = !mode;
    }
  }
  return myOutputValue;
};
