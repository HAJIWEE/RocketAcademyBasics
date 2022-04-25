var buttons = document.querySelector("#buttons");
var button1 = document.querySelector("#button1");

var drawn = document.getElementById("hitcards");
drawn.style.overflow = "hidden";

var image1 = document.getElementById("player-hand1");
var image2 = document.getElementById("player-hand2");
var image3 = document.getElementById("comhand1");
var image4 = document.getElementById("comhand2");

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

var run = function () {
  buttons.removeChild(button3);
  end();
  return "Player Runs";
};

var createDeck = function () {
  // Create non-shuffled deck
  var cardDeck = [];
  var suits = ["clubs", "diamonds", "hearts", "spades"];

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
    comHand.push(shuffleCards(cardDeck).pop());
  }

  playerRank = checkRankAce(playerHand);
  comRank = checkRankAce(comHand);

  if (playerRank === 21 && comRank !== 21) {
    end();
    return "BLACK JACK. Player wins";
  } else if (comRank === 21 && playerRank !== 21) {
    end();
    var card4 = `./PNG-cards-1.3/${comHand[1].name}_of_${comHand[1].suit}.png`;
    image4.src = card4;
    return `BLACK JACK. computer wins`;
  } else if (comRank === 21 && playerRank === 21) {
    end();
    return ` & ${comHand[1].name} of ${comHand[1].suit}BLACK JACKs. its a TIE!`;
  }

  while (comRank < 17) {
    comHand.push(shuffleCards(cardDeck).pop());
    comRank = checkRankAce(comHand);
  }

  showhand();

  return "Click Hit to draw card or Stand to end turn";
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
      myOutputValue += "Both lose, ";
    } else if (comRank > 21 && playerRank <= 21) {
      //banker explode
      myOutputValue += `Player WINS`;
    } else if (playerRank > 21 && comRank <= 21) {
      //player explode
      myOutputValue += "Player loses, ";
    } else if (comRank > playerRank) {
      //banker nearer to 21
      myOutputValue += `Player loses`;
    } else if (comRank === playerRank) {
      //equal but never explode
      myOutputValue += `Its a TIE`;
    } else if (comRank < playerRank) {
      //player nearer to 21
      myOutputValue += `Player WINS`;
    }
  } else if (input === "hit") {
    if (playerRank === 21 && comRank !== 21) {
      //player wins
      winlose = true;
      myOutputValue = "21! Player wins";
    } else if (playerRank > 21 && comRank <= 21) {
      //player explode
      winlose = true;
      myOutputValue = "Player loses";
    } else if (comRank > 21 && playerRank > 21) {
      //both explode
      winlose = true;
      myOutputValue += "Both lose";
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
    image4.src = "./PNG-cards-1.3/backdeafault.png";
    while (drawn.lastChild) {
      drawn.removeChild(drawn.lastChild);
    }
    button1.innerText = "Hit";
    mode = 1;
    var result1 = draw();
    myOutputValue = result1;
    buttons.appendChild(button2);
    if (playerRank === 16) {
      buttons.appendChild(button3);
    }
  } else if (mode === 1) {
    while (drawn.lastChild) {
      drawn.removeChild(drawn.lastChild);
    }
    playerHand.push(shuffleCards(cardDeck).pop());
    playerRank = checkRankAce(playerHand);
    for (var i = 2; i < playerHand.length; i += 1) {
      var newlist = document.createElement("li");
      newlist.id = `hitlist_${i}`;
      newlist.class = "comleft";
      newlist.style.overflow = "hidden";
      var image5 = document.createElement("img");
      image5.alt = "poker card";
      image5.style.width = "100px";
      image5.style.height = "145px";
      var currentCard = playerHand[i];
      var cardnew =
        "./PNG-cards-1.3/" +
        currentCard.name +
        "_of_" +
        currentCard.suit +
        ".png";
      image5.src = cardnew;
      newlist.appendChild(image5);
      drawn.appendChild(newlist);
    }
    console.log(playerRank);
    myOutputValue = winningCondition("hit");
  }
  return myOutputValue;
};

var stand = function (input) {
  var myOutputValue = "";

  if (mode === 0) {
    image4.src = "./PNG-cards-1.3/backdeafault.png";
    while (drawn.lastChild) {
      drawn.removeChild(drawn.lastChild);
    }
    button1.innerText = "Hit";
    mode = 1;
    var result1 = draw();
    myOutputValue = result1;
    buttons.appendChild(button2);
    if (playerRank === 16) {
      buttons.appendChild(button3);
    }
  } else if (mode === 1) {
    if (playerRank >= 16) {
      myOutputValue += winningCondition("stand");
    } else if (playerRank < 16) {
      myOutputValue = `card value too low please draw`;
    }
    for (var i = 2; i < playerHand.length; i += 1) {
      var newlist = document.createElement("li");
      newlist.id = `hitlist_${i}`;
      newlist.class = "comleft";
      newlist.style.overflow = "hidden";
      var image5 = document.createElement("img");
      image5.alt = "poker card";
      image5.style.width = "100px";
      image5.style.height = "145px";
      var currentCard = playerHand[i];
      var cardnew =
        "./PNG-cards-1.3/" +
        currentCard.name +
        "_of_" +
        currentCard.suit +
        ".png";
      image5.src = cardnew;
      newlist.appendChild(image5);
      drawn.appendChild(newlist);
    }
  }
  return myOutputValue;
};

var showhand = function () {
  var card1 = `./PNG-cards-1.3/${playerHand[0].name}_of_${playerHand[0].suit}.png`;
  var card2 = `./PNG-cards-1.3/${playerHand[1].name}_of_${playerHand[1].suit}.png`;
  var card3 = `./PNG-cards-1.3/${comHand[0].name}_of_${comHand[0].suit}.png`;
  image1.src = card1;
  image2.src = card2;
  image3.src = card3;
  return;
};

var end = function () {
  var card = `./PNG-cards-1.3/${comHand[1].name}_of_${comHand[1].suit}.png`;
  image4.src = card;
  for (var i = 2; i < comHand.length; i += 1) {
    var newlist = document.createElement("li");
    newlist.id = `hitlist_${i}`;
    newlist.style.float = "right";
    newlist.style.overflow = "hidden";
    var image5 = document.createElement("img");
    image5.alt = "poker card";
    image5.style.width = "100px";
    image5.style.height = "145px";
    var currentCard = comHand[i];
    var cardnew =
      "./PNG-cards-1.3/" +
      currentCard.name +
      "_of_" +
      currentCard.suit +
      ".png";
    image5.src = cardnew;
    newlist.appendChild(image5);
    drawn.appendChild(newlist);
  }
  playerHand = [];
  comHand = [];
  button1.innerText = "Start";
  buttons.removeChild(button2);
  mode = 0;
  return;
};
