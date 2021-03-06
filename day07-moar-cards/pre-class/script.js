var deck = [
  {
    name: "ace",
    suit: "hearts",
    rank: 1
  },
  {
    name: "2",
    suit: "hearts",
    rank: 2
  },
  {
    name: "3",
    suit: "hearts",
    rank: 3
  },
  {
    name: "4",
    suit: "hearts",
    rank: 4
  },
  {
    name: "5",
    suit: "hearts",
    rank: 5
  },
  {
    name: "6",
    suit: "hearts",
    rank: 6
  },
  {
    name: "7",
    suit: "hearts",
    rank: 7
  },
  {
    name: "8",
    suit: "hearts",
    rank: 8
  },
  {
    name: "9",
    suit: "hearts",
    rank: 9
  },
  {
    name: "10",
    suit: "hearts",
    rank: 10
  },
  {
    name: "jack",
    suit: "hearts",
    rank: 11
  },
  {
    name: "queen",
    suit: "hearts",
    rank: 12
  },
  {
    name: "king",
    suit: "hearts",
    rank: 13
  },
  {
    name: "ace",
    suit: "diamonds",
    rank: 1
  },
  {
    name: "2",
    suit: "diamonds",
    rank: 2
  },
  {
    name: "3",
    suit: "diamonds",
    rank: 3
  },
  {
    name: "4",
    suit: "diamonds",
    rank: 4
  },
  {
    name: "5",
    suit: "diamonds",
    rank: 5
  },
  {
    name: "6",
    suit: "diamonds",
    rank: 6
  },
  {
    name: "7",
    suit: "diamonds",
    rank: 7
  },
  {
    name: "8",
    suit: "diamonds",
    rank: 8
  },
  {
    name: "9",
    suit: "diamonds",
    rank: 9
  },
  {
    name: "10",
    suit: "diamonds",
    rank: 10
  },
  {
    name: "jack",
    suit: "diamonds",
    rank: 11
  },
  {
    name: "queen",
    suit: "diamonds",
    rank: 12
  },
  {
    name: "king",
    suit: "diamonds",
    rank: 13
  },
  {
    name: "ace",
    suit: "clubs",
    rank: 1
  },
  {
    name: "2",
    suit: "clubs",
    rank: 2
  },
  {
    name: "3",
    suit: "clubs",
    rank: 3
  },
  {
    name: "4",
    suit: "clubs",
    rank: 4
  },
  {
    name: "5",
    suit: "clubs",
    rank: 5
  },
  {
    name: "6",
    suit: "clubs",
    rank: 6
  },
  {
    name: "7",
    suit: "clubs",
    rank: 7
  },
  {
    name: "8",
    suit: "clubs",
    rank: 8
  },
  {
    name: "9",
    suit: "clubs",
    rank: 9
  },
  {
    name: "10",
    suit: "clubs",
    rank: 10
  },
  {
    name: "jack",
    suit: "clubs",
    rank: 11
  },
  {
    name: "queen",
    suit: "clubs",
    rank: 12
  },
  {
    name: "king",
    suit: "clubs",
    rank: 13
  },
  {
    name: "ace",
    suit: "spades",
    rank: 1
  },
  {
    name: "2",
    suit: "spades",
    rank: 2
  },
  {
    name: "3",
    suit: "spades",
    rank: 3
  },
  {
    name: "4",
    suit: "spades",
    rank: 4
  },
  {
    name: "5",
    suit: "spades",
    rank: 5
  },
  {
    name: "6",
    suit: "spades",
    rank: 6
  },
  {
    name: "7",
    suit: "spades",
    rank: 7
  },
  {
    name: "8",
    suit: "spades",
    rank: 8
  },
  {
    name: "9",
    suit: "spades",
    rank: 9
  },
  {
    name: "10",
    suit: "spades",
    rank: 10
  },
  {
    name: "jack",
    suit: "spades",
    rank: 11
  },
  {
    name: "queen",
    suit: "spades",
    rank: 12
  },
  {
    name: "king",
    suit: "spades",
    rank: 13
  }
];

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

var shuffledDeck = shuffleCards(deck);

var followObjectsMain = function (input) {
  // Attempt the Follow Along exercise from the Objects module below with followObjectsMain as the main function.
  var comCard = shuffledDeck.pop();
  var playerCard = shuffledDeck.pop();

  var myOutputValue = `Computer had ${comCard.name} of ${comCard.suit}. Player had ${playerCard.name} of ${playerCard.suit}.`;

  if (comCard.rank > playerCard.rank) {
    myOutputValue += "</br>computer wins.";
  } else if (comCard.rank < playerCard.rank) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }

  return myOutputValue;
};

var newShuffledDeck = shuffleCards(deck);

var highestCardsMain = function (input) {
  // Attempt the Highest of 2 Cards exercise from the Objects module below with highestCardsMain as the main function.
  var comCard = [];
  var playerCard = [];

  comCard.push(newShuffledDeck.pop());
  playerCard.push(newShuffledDeck.pop());
  comCard.push(newShuffledDeck.pop());
  playerCard.push(newShuffledDeck.pop());

  var myOutputValue = `Computer had ${comCard[0].name} of ${comCard[0].suit} and ${comCard[1].name} of ${comCard[1].suit}. 
  </br>Player had ${playerCard[0].name} of ${playerCard[0].suit} and ${playerCard[1].name} of ${playerCard[1].suit}.`;

  if (
    (comCard[0].rank > playerCard[0].rank &&
      comCard[0].rank > playerCard[1].rank) ||
    (comCard[1].rank > playerCard[0].rank &&
      comCard[1].rank > playerCard[1].rank)
  ) {
    myOutputValue += "</br>computer wins.";
  } else if (
    (playerCard[0].rank > comCard[0].rank &&
      playerCard[0].rank > comCard[1].rank) ||
    (playerCard[1].rank > comCard[0].rank &&
      playerCard[1].rank > comCard[1].rank)
  ) {
    myOutputValue += "</br>Player wins.";
  } else {
    myOutputValue += "</br>Its a tie.";
  }
  return myOutputValue;
};

var followCreatingMain = function (input) {
  // Attempt the Follow Along exercise from the Creating Objects with Loops module below with followCreatingMain as the main function.
  var cardDeck = [];
  var suits = ["hearts", "diamonds", "clubs", "spades"];

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
        rank: rank
      };
      cardDeck.push(card);
    }
  }
  var myOutputValue = `Done. card one is ${cardDeck[0].name} of ${cardDeck[0].suit}
  </br>last card is ${cardDeck[51].name} of ${cardDeck[51].suit}`;
  return myOutputValue;
};
