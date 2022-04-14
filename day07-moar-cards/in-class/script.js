var createDeck = function () {
  // Create non-shuffled deck
  var cardDeck = [];
  var suits = ["♣️", "♦️", "❤️", "♠️"];

  for (var i = 0; i < suits.length; i += 1) {
    var currentSuit = suits[i];
    for (var rank = 1; rank <= 13; rank += 1) {
      var cardName = rank;
      if (rank == 1) {
        cardName = "ace";
      } else if (rank == 11) {
        cardName = "jack";
      } else if (rank == 12) {
        cardName = "queen";
      } else if (rank == 13) {
        cardName = "king";
      }
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: i + 4 * rank - 3
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

var shuffledDeck = shuffleCards(cardDeck); //We have a shuffled deck

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var playerCard = shuffledDeck.pop();

  var myOutputValue = `You drew ${playerCard.name} of ${playerCard.suit}`;
  return myOutputValue;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var comCard = [];
  var playerCard = [];

  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());
  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());

  var myOutputValue = `Computer had ${comCard[0].name} of ${comCard[0].suit} and ${comCard[1].name} of ${comCard[1].suit}. 
  </br>Player had ${playerCard[0].name} of ${playerCard[0].suit} and ${playerCard[1].name} of ${playerCard[1].suit}.`;

  if (
    (comCard[0].rank < playerCard[0].rank &&
      comCard[0].rank < playerCard[1].rank) ||
    (comCard[1].rank < playerCard[0].rank &&
      comCard[1].rank < playerCard[1].rank)
  ) {
    myOutputValue += "</br>computer wins.";
  } else if (
    (playerCard[0].rank < comCard[0].rank &&
      playerCard[0].rank < comCard[1].rank) ||
    (playerCard[1].rank < comCard[0].rank &&
      playerCard[1].rank < comCard[1].rank)
  ) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var comCard = [];
  var playerCard = [];

  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());
  comCard.push(shuffledDeck.pop());
  playerCard.push(shuffledDeck.pop());

  var myOutputValue = `Computer had ${comCard[0].name} of ${comCard[0].suit} and ${comCard[1].name} of ${comCard[1].suit}. 
  </br>Player had ${playerCard[0].name} of ${playerCard[0].suit} and ${playerCard[1].name} of ${playerCard[1].suit}.`;

  if (
    (comCard[0].rank < playerCard[0].rank &&
      comCard[0].rank < playerCard[1].rank) ||
    (comCard[1].rank < playerCard[0].rank &&
      comCard[1].rank < playerCard[1].rank) ||
    ((comCard[0].rank == "12" || comCard[1].rank == "12") &&
      (playerCard[0].rank != "12" || playerCard[0].rank != "12"))
  ) {
    myOutputValue += "</br>computer wins.";
  } else if (
    (playerCard[0].rank < comCard[0].rank &&
      playerCard[0].rank < comCard[1].rank) ||
    (playerCard[1].rank < comCard[0].rank &&
      playerCard[1].rank < comCard[1].rank) ||
    ((playerCard[0].rank == "12" || playerCard[1].rank == "12") &&
      (comCard[0].rank != "12" || comCard[0].rank != "12"))
  ) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var comCard = shuffledDeck.pop();
  var playerCard = [];
  var playerLowCardRank = 13;

  for (var i = 0; i < input; i += 1) {
    playerCard.push(shuffledDeck.pop());
  }

  var myOutputValue = `Computer had ${comCard.name} of ${comCard.suit}.</br>Player had `;

  for (var b = 0; b < input; b += 1) {
    myOutputValue =
      myOutputValue + `</br>${playerCard[b].name} of ${playerCard[b].suit}`;
    if (playerCard[b].rank < playerLowCardRank) {
      playerLowCardRank = playerCard[b].rank;
    }
  }
  if (comCard.rank > playerLowCardRank) {
    myOutputValue += "</br>computer wins.";
  } else if (playerLowCardRank > comCard.rank) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }

  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "Done above by changing the card deck generation code";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var comCard = shuffledDeck.pop();
  var playerCard = [];
  var playerLowCardRank = 52;
  var wildCard = shuffledDeck[getRandomIndex(shuffledDeck.length)];

  for (var i = 0; i < input; i += 1) {
    playerCard.push(shuffledDeck.pop());
  }

  var myOutputValue = `Computer had ${comCard.name} of ${comCard.suit}.</br>Player had `;

  for (var b = 0; b < input; b += 1) {
    myOutputValue =
      myOutputValue + `</br>${playerCard[b].name} of ${playerCard[b].suit}`;
    if (playerCard[b].rank == wildCard.rank) {
      myOutputValue =
        myOutputValue +
        `</br>Wild card was ${wildCard.name} of ${wildCard.suit}</br>Player wins.`;
      return myOutputValue;
    }
    if (playerCard[b].rank < playerLowCardRank) {
      playerLowCardRank = playerCard[b].rank;
    }
  }

  if (comCard.rank > playerLowCardRank) {
    myOutputValue += "</br>computer wins.";
  } else if (playerLowCardRank > comCard.rank) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }

  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var comCard = shuffledDeck.pop();
  var playerCard = [];
  var playerLowCardRank = 52;
  var wildCard = shuffledDeck[getRandomIndex(shuffledDeck.length)];

  for (var i = 0; i < input; i += 1) {
    playerCard.push(shuffledDeck.pop());
  }

  var myOutputValue = `Computer had ${comCard.name} of ${comCard.suit}.</br>Player had `;

  for (var b = 0; b < input; b += 1) {
    myOutputValue =
      myOutputValue + `</br>${playerCard[b].name} of ${playerCard[b].suit}`;
    if (playerCard[b].rank == wildCard.rank) {
      myOutputValue =
        myOutputValue +
        `</br>Wild card was ${wildCard.name} of ${wildCard.suit}</br>Player wins.`;
      return myOutputValue;
    }
    if (playerCard[b].rank < playerLowCardRank) {
      playerLowCardRank = playerCard[b].rank;
    }
  }

  if (comCard.rank > playerLowCardRank) {
    myOutputValue += "</br>computer wins.";
  } else if (playerLowCardRank > comCard.rank) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }

  return myOutputValue;
};

var getCard = function (input) {
  var cardinfo = input.split(" of ");

  if (cardinfo[1] == "heart") {
    cardinfo[1] = "❤️";
  } else if (cardinfo[1] == "club") {
    cardinfo[1] = "♣️";
  } else if (cardinfo[1] == "diamond") {
    cardinfo[1] = "♦️";
  } else if (cardinfo[1] == "spade") {
    cardinfo[1] = "♠️";
  }

  var card;
  for (var i = 0; i < cardDeck.length; i += 1) {
    if (cardDeck[i].name == cardinfo[0] && cardDeck[i].suit == cardinfo[1]) {
      card = cardDeck[i];
    }
  }
  return card;
};

var begin = true;
var wildCard;

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var comCard = shuffledDeck.pop();
  var playerCard = [];
  var playerLowCardRank = 52;

  if (begin == true) {
    wildCard = getCard(input);
    if (wildCard == null) {
      return "Error wrong format";
    }
    begin = false;
    var myOutputValue = "Now enter number of cards to draw";
  } else if (begin == false) {
    for (var i = 0; i < input; i += 1) {
      playerCard.push(shuffledDeck.pop());
    }

    var myOutputValue = `Computer had ${comCard.name} of ${comCard.suit}.</br>Player had `;

    for (var b = 0; b < input; b += 1) {
      myOutputValue =
        myOutputValue + `</br>${playerCard[b].name} of ${playerCard[b].suit}`;
      if (playerCard[b].rank == wildCard.rank) {
        myOutputValue =
          myOutputValue +
          `</br>Wild card was ${wildCard.name} of ${wildCard.suit}</br>Player wins.`;
        return myOutputValue;
      }
      if (playerCard[b].rank < playerLowCardRank) {
        playerLowCardRank = playerCard[b].rank;
      }
    }

    if (comCard.rank > playerLowCardRank) {
      myOutputValue += "</br>computer wins.";
    } else if (playerLowCardRank > comCard.rank) {
      myOutputValue += "</br>Player wins.";
    } else {
      myOutputValue += "</br>Its a tie.";
    }
  }
  return myOutputValue;
};

var player1 = [];
var player2 = [];
var mode = 1;

var moarCardsLowCard2PMain = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mode = 0;

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue =
    "Bot: Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)";
  var responseToUser = {
    yes:
      "Bot: Wow! Me too! I've been working on the Blackjack project. Makes my day!",
    no: "Oh ok, just normally happy ;)",
    maybe: "It seems the very thought of coding makes people happy!"
  };

  if (mode == 1) {
    if (input == "yes") {
      myOutputValue = responseToUser.yes;
    } else if (input == "no") {
      myOutputValue = responseToUser.no;
    } else if (input == "maybe") {
      myOutputValue = responseToUser.maybe;
    }
    mode = 0;
  } else {
    mode = 1;
  }

  return myOutputValue;
};

var mode2 = 0;
var question = 0;

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var qnsAndAnswers = [
    {
      question:
        "Bot: Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)",
      yes:
        "Bot: Wow! Me too! I've been working on the Blackjack project. Makes my day!",
      no: "Oh ok, just normally happy ;)",
      maybe: "It seems the very thought of coding makes people happy!"
    },
    {
      question:
        "Do you enjoy coding most during the day, night, or both? (day/night/both)",
      day:
        "Ah yes, when the sun is high in the sky, I can feel its energy too.",
      night: "Under the calm and gentle moon, I also find my focus.",
      both: "Indeed, I could code 24/7 if I didn't have to sleep!"
    }
  ];

  var myOutputValue = "";

  if (mode2 == 0) {
    question = getRandomIndex(2);
    myOutputValue = qnsAndAnswers[question].question;
    mode2 = 1;
  }
  //answers part
  else {
    if (question == 0) {
      if (input == "yes") {
        myOutputValue = qnsAndAnswers[0].yes;
      } else if (input == "no") {
        myOutputValue = qnsAndAnswers[0].no;
      } else if (input == "maybe") {
        myOutputValue = qnsAndAnswers[0].maybe;
      }
    } else if (question == 1) {
      if (input == "day") {
        myOutputValue = qnsAndAnswers[1].day;
      } else if (input == "night") {
        myOutputValue = qnsAndAnswers[1].night;
      } else if (input == "both") {
        myOutputValue = qnsAndAnswers[1].both;
      }
    }
    mode2 = 0;
  }

  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
