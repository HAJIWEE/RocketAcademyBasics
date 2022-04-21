var buttons = document.querySelector("#buttons");
var button1 = document.querySelector("#button1");
var image1 = document.getElementById("player-hand");

var button2 = document.createElement("button");
button2.id = "button2";
button2.innerText = "stand";

var button3 = document.createElement("button");
button3.innerText = "run";
button3.id = "button3";

button1.addEventListener("click", function () {
  var result = hit();
  var output = document.querySelector("#output-div");
  output.innerHTML = result;
});

button2.addEventListener("click", function () {
  var result = stand();
  var output = document.querySelector("#output-div");
  output.innerHTML = result;
});

button3.addEventListener("click", function () {
  var result = run();
  var output = document.querySelector("#output-div");
  output.innerHTML = result;
});

var comHand = [];
var playerHand = [];
var mode = 0;
var playerRank = 0;
var comRank = 0;
var running = false;

var end = function () {
  playerHand = [];
  comHand = [];
  button1.innerText = "Start";
  buttons.removeChild(button2);
  mode = 0;
  return;
};

var run = function () {
  buttons.removeChild(button3);
  end();
  return "Player Runs";
};

var createDeck = function () {
  // Create non-shuffled deck
  var cardDeck = [];
  var suits = ["♣️", "♦️", "❤️", "♠️"];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuit = suits[i];
    for (var rank = 1; rank <= 13; rank += 1) {
      var cardName = rank;
      var offset = 0;
      if (rank == 1) {
        cardName = "ace";
      } else if (rank == 11) {
        cardName = "jack";
        offset = 1;
      } else if (rank == 12) {
        cardName = "queen";
        offset = 2;
      } else if (rank == 13) {
        cardName = "king";
        offset = 3;
      }
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rank - offset
      };
      cardDeck.push(card);
    }
  }
  return cardDeck;
};

var cardDeck = createDeck();

var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var draw = function () {
  for (var i = 0; i < 2; i += 1) {
    playerHand.push(shuffleCards(cardDeck).pop());
    image1.src = "10_of_clubs.png";
    comHand.push(shuffleCards(cardDeck).pop());
  }

  playerRank = checkRankAce(playerHand);
  comRank = checkRankAce(comHand);

  if (playerRank === 21 && comRank !== 21) {
    end();
    return "</br>BLACK JACK. Player wins";
  } else if (comRank === 21 && playerRank !== 21) {
    end();
    return ` & ${comHand[1].name} of ${comHand[1].suit}</br>BLACK JACK. computer wins`;
  } else if (comRank === 21 && playerRank === 21) {
    end();
    return ` & ${comHand[1].name} of ${comHand[1].suit}</br>BLACK JACKs. its a TIE!`;
  }

  while (comRank < 17) {
    comHand.push(shuffleCards(cardDeck).pop());
    comRank = checkRankAce(comHand);
  }

  return "</br>Click Hit to draw card or Stand to end turn";
};

var checkRankAce = function (input) {
  var ace = false;
  var sumOfCard = 0;

  if (input[0].name === "ace" && input[1].name === "ace") {
    return 21;
  }

  for (var b = 0; b < input.length; b += 1) {
    if (input[b].name === "ace") {
      ace = true;
    }
    sumOfCard += input[b].rank;
  }
  if (ace === true && sumOfCard <= 11) {
    sumOfCard += 10;
  }
  return sumOfCard;
};

var winningCondition = function (input) {
  var myOutputValue = "";
  var winlose = false;

  if (input === "stand") {
    winlose = true;
    if (comRank > 21 && playerRank > 21) {
      //both explode
      myOutputValue += "</br>Both lose, ";
    } else if (comRank > 21 && playerRank <= 21) {
      //banker explode
      myOutputValue += `</br>Player WINS,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
      myOutputValue += `</br>`;
    } else if (playerRank > 21 && comRank <= 21) {
      //player explode
      myOutputValue += "</br>Player loses, ";
    } else if (comRank > playerRank) {
      //banker nearer to 21
      myOutputValue += `</br>Player loses,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
    } else if (comRank === playerRank) {
      //equal but never explode
      myOutputValue += `</br>Its a TIE,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
    } else if (comRank < playerRank) {
      //player nearer to 21
      myOutputValue += `</br>Player WINS,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
    }
  } else if (input === "hit") {
    if (playerRank === 21 && comRank !== 21) {
      //player wins
      winlose = true;
      myOutputValue = "</br>21! Player wins";
    } else if (playerRank > 21 && comRank <= 21) {
      //player explode
      winlose = true;
      myOutputValue += "</br>Player loses";
    } else if (comRank > 21 && playerRank > 21) {
      //both explode
      winlose = true;
      myOutputValue += "</br>Both lose";
    }
  }
  if (winlose === true) {
    end();
  }
  return myOutputValue;
};

var hit = function () {
  var myOutputValue = "";

  if (mode === 0) {
    button1.innerText = "Hit";
    mode = 1;
    var result1 = draw();
    myOutputValue =
      `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}.
      </br>Computer's hand: HIDDEN & ${comHand[0].name} of ${comHand[0].suit}` +
      result1;
    buttons.appendChild(button2);
    if (playerRank === 16) {
      buttons.appendChild(button3);
      running = true;
    }
  } else if (mode === 1) {
    if (running === true) {
      buttons.removeChild(button3);
      running = false;
    }
    playerHand.push(shuffleCards(cardDeck).pop());
    playerRank = checkRankAce(playerHand);
    myOutputValue = `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}`;
    for (var n = 2; n < playerHand.length; n += 1) {
      myOutputValue += ` & ${playerHand[n].name} of ${playerHand[n].suit}`;
    }
    myOutputValue += winningCondition("hit");
  }
  return myOutputValue;
};

var stand = function (input) {
  var myOutputValue = "";

  if (mode === 0) {
    mode = 1;
    var result1 = draw();
    myOutputValue =
      `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}.
      </br>Computer's hand: HIDDEN & ${comHand[0].name} of ${comHand[0].suit}` +
      result1;
  } else if (mode === 1) {
    myOutputValue = `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}`;
    for (var n = 2; n < playerHand.length; n += 1) {
      myOutputValue += ` & ${playerHand[n].name} of ${playerHand[n].suit}`;
    }
    if (playerRank >= 16) {
      myOutputValue += winningCondition("stand");
    } else if (playerRank < 16) {
      myOutputValue = `card value too low please draw`;
    }
  }
  return myOutputValue;
};
