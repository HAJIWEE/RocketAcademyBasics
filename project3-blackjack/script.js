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

var comHand = [];
var playerHand = [];
var mode = 0;
var playerRank = 0;
var comRank = 0;

var draw = function () {
  for (var i = 0; i < 2; i += 1) {
    playerHand.push(shuffleCards(cardDeck).pop());
    comHand.push(shuffleCards(cardDeck).pop());
  }

  playerRank = checkRankAce(playerHand);
  comRank = checkRankAce(comHand);

  while (comRank < 17) {
    comHand.push(shuffleCards(cardDeck).pop());
    comRank = checkRankAce(comHand);
  }

  if (playerRank === 21 && comRank !== 21) {
    playerHand = [];
    comHand = [];
    mode = 0;
    return "</br>BLACK JACK. Player wins";
  } else if (comRank === 21 && playerRank !== 21) {
    playerHand = [];
    comHand = [];
    mode = 0;
    return ` & ${comHand[1].name} of ${comHand[1].suit}</br>BLACK JACK. computer wins`;
  } else if (comRank === 21 && playerRank === 21) {
    playerHand = [];
    comHand = [];
    mode = 0;
    return ` & ${comHand[1].name} of ${comHand[1].suit}</br>BLACK JACKs. its a TIE!`;
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

var hit = function (input) {
  var myOutputValue = "";

  if (mode === 0) {
    mode = 1;
    var result1 = draw();
    myOutputValue =
      `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}.
      </br>Computer's hand: HIDDEN & ${comHand[0].name} of ${comHand[0].suit}` +
      result1;
  } else if (mode === 1) {
    playerHand.push(shuffleCards(cardDeck).pop());
    playerRank = checkRankAce(playerHand);
    myOutputValue = `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}`;
    for (var n = 2; n < playerHand.length; n += 1) {
      myOutputValue += ` & ${playerHand[n].name} of ${playerHand[n].suit}`;
    }
    if (playerRank === 21) {
      myOutputValue += "</br>Player wins, click any button to start new game";
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (playerRank > 21 && comRank <= 21) {
      myOutputValue += "</br>Player loses, click any button to start new game";
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (playerRank > 21 && comRank > 21) {
      myOutputValue += "</br>Both lose, click any button to start new game";
      playerHand = [];
      comHand = [];
      mode = 0;
    }
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
    console.log(playerRank);
    console.log(comRank);
    myOutputValue = `Player's hand: ${playerHand[0].name} of ${playerHand[0].suit} & ${playerHand[1].name} of ${playerHand[1].suit}`;
    for (var n = 2; n < playerHand.length; n += 1) {
      myOutputValue += ` & ${playerHand[n].name} of ${playerHand[n].suit}`;
    }
    if (comRank > 21 && playerRank <= 21) {
      myOutputValue += `</br>Player WINS,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
      myOutputValue += `</br>click any button to start new game`;
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (playerRank > 21 && comRank <= 21) {
      myOutputValue += "</br>Player loses, click any button to start new game";
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (comRank > playerRank && comRank <= 21) {
      myOutputValue += `</br>Player loses,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
      myOutputValue += `</br>click any button to start new game`;
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (playerRank > 21 && comRank > 21) {
      myOutputValue += "</br>Both lose, click any button to start new game";
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (comRank === playerRank) {
      myOutputValue += `</br>Its a TIE,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
      myOutputValue += `</br>click any button to start new game`;
      playerHand = [];
      comHand = [];
      mode = 0;
    } else if (comRank < playerRank && playerRank <= 21) {
      myOutputValue += `</br>Player WINS,</br>Computer's hand: ${comHand[0].name} of ${comHand[0].suit}`;
      for (var f = 1; f < comHand.length; f += 1) {
        myOutputValue += `& ${comHand[f].name} of ${comHand[f].suit}`;
      }
      myOutputValue += `</br>click any button to start new game`;
      playerHand = [];
      comHand = [];
      mode = 0;
    }
  }

  return myOutputValue;
};
