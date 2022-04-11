//For submission
//function to generate dice roll
var rollDice = function () {
  var dice = Math.floor(Math.random() * 6) + 1;
  return dice;
};

//generate each roll collective value
var playerValue = function (choice, rolls) {
  //"2 1 3" <- choice, rolls = [5, 6, 1]
  var sequence = choice.split(" "); //spilt choice string into list choice -> [2,1,3]
  var sum = ""; //initialise sum as a string so we can concatenate
  for (var b = 0; b < rolls.length; b += 1) {
    //b = 0, 1,2
    //if sum is integer or number 6 + 5 + 1 = 12. if sum is str '6'+'5'+'1' = '651'
    sum = sum + rolls[sequence[b] - 1]; //concatenating the str -> 651
  }
  return parseInt(sum); //pass back as integer so we can do comparison
};

var playerNo = 0; //initialise as first player
var numPlayer = 2; //initialise minimum number of player as 2
var numDice = 2; //initialise minimum number of dice as 2
var mode = 4; //initialise initial mode
var rounds = 1; //initialise minimum number of rounds per game as 1
var rolls = []; //storage for all players' all rolls --> [[player1rolls],[player2rolls], [3,4,5]]
var playerResults = []; //storage for all players' result

var main = function (input) {
  var myOutputValue = "";

  // Getting game parameters
  if (mode == 4) {
    myOutputValue = `Enter number of players.`;
    mode = 5;
  } else if (mode == 5) {
    numPlayer = input;
    for (var i = 0; i < input; i += 1) {
      playerResults.push(0); //if input = 3 playerResult =[0,0,0]
    }
    myOutputValue = `OK. ${numPlayer} players selected.</br></br>
    Enter number of rounds to play.`;
    mode = 6;
  } else if (mode == 6) {
    rounds = input;
    myOutputValue = `OK. ${numPlayer} of players selected.</br></br>
    ${rounds} number of rounds per game.</br></br>
    Choose number of dice per round.`;
    mode = 7;
  } else if (mode == 7) {
    numDice = input;
    myOutputValue = `OK. ${numPlayer} of players selected.</br></br>
    ${rounds} number of rounds per game.</br></br>
    ${numDice} number of dice per round.</br></br>Let's Begin`;
    mode = 1;
  }

  //Start game
  else if (mode == 1) {
    //individual player's dice rolls
    var roll = []; //individual players' every row
    //random roll for each dice up to selected number of dice
    for (var i = 0; i < numDice; i += 1) {
      roll.push(rollDice());
    }
    //saving each players' dice rolls to global scope
    rolls.push(roll);
    myOutputValue = `Welcome Player ${playerNo + 1}.</br>
    You rolled ${roll}.</br>
    Choose the order of the dice seperated by space e.g.: 1 2 3 4.`;
    mode = 2;
  } else if (mode == 2) {
    // passing players' selected sequence to playerValue function with their dice rolls
    var sum = playerValue(input, rolls[playerNo]);
    myOutputValue = `Player ${playerNo + 1}.</br>
    Your number is ${sum}`;
    playerResults[playerNo] = playerResults[playerNo] + sum; //playerResult[0](0) = playerResult[0](0)  + sum
    playerNo++;
    if (playerNo != numPlayer) {
      myOutputValue =
        myOutputValue + `</br>It is now Player ${playerNo + 1}'s turn`;
    }
    //saving each players' dice roll sum into result
    mode = 1;
  } else if (mode == 3) {
    //initializing winning variables
    var winningPlayer = 0;
    var winningVal = 0;
    var runnerUpPlayer = 0;
    var runnerUpVal = 0;

    // Checking for which players' result is the highest
    for (var index = 0; index <= playerResults.length; index += 1) {
      var currentVal = playerResults[index];
      if (currentVal > winningVal) {
        winningPlayer = index + 1;
        winningVal = currentVal;
      }
    }

    // Checking for second highest
    for (var index2 = 0; index2 <= playerResults.length; index2 += 1) {
      var secondVal = playerResults[index2];
      if (secondVal > runnerUpVal && secondVal < winningVal) {
        runnerUpPlayer = index2 + 1;
        runnerUpVal = secondVal;
      }
      //check for ties
      else if (index2 != winningPlayer - 1 && secondVal == winningVal) {
        runnerUpPlayer = index2 + 1;
        runnerUpVal = "tied";
      }
    }

    myOutputValue = `Winner! Player ${winningPlayer}</br></br>Leaderboard:</br>
    Player ${winningPlayer}: ${playerResults[winningPlayer - 1]}</br>
    Player ${runnerUpPlayer}: ${playerResults[runnerUpPlayer - 1]}`;

    //reseting the round
    mode = 1;
    playerNo = 0;
    rolls = [];
    rounds -= 1;
  }

  //reseting the game when all rounds are over
  if (rounds == 0) {
    mode = 4; //start new game
    rounds = 1;
  }

  //moving the game into the result page when all players have rolled and chose.
  if (playerNo == numPlayer) {
    mode = 3;
  }
  return myOutputValue;
};
