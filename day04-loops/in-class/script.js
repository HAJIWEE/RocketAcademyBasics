var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var counter = 0;
  var myOutputValue = "";
  while (counter < input) {
    myOutputValue = myOutputValue + "👍";
    counter++;
  }
  return myOutputValue;
};
//try see see can hor windows key + . 😊😂🤣
var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.

  var counterInside = 0;
  var counterOutside = 0;
  var myOutputValue = "";
  while (counterOutside < input) {
    while (counterInside < input) {
      myOutputValue = myOutputValue + "👍";
      counterInside++;
    }
    myOutputValue = myOutputValue + "</br>";
    counterOutside++;
    counterInside = 0;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.

  var counterOutside = 0;
  var counterInside = 0;
  var myOutputValue = "";

  while (counterOutside < input) {
    while (counterInside <= counterOutside) {
      myOutputValue = myOutputValue + "👍";
      counterInside++;
    }
    myOutputValue = myOutputValue + "</br>";
    counterOutside++;
    counterInside = 0;
  }

  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var counterInside = 0;
  var counterOutside = 0;
  var myOutputValue = "";

  while (counterOutside < input) {
    if (counterOutside == 0 || counterOutside == input - 1) {
      //check whether is first or last line
      while (counterInside < input) {
        myOutputValue = myOutputValue + "😆";
        counterInside++;
      }
      myOutputValue = myOutputValue + "</br>";
      counterOutside++;
      counterInside = 0;
    } else {
      while (counterInside < input) {
        if (counterInside == 0 || counterInside == input - 1) {
          // check if first or last coloumn
          myOutputValue = myOutputValue + "😆";
        } else {
          myOutputValue = myOutputValue + "👍";
        }
        counterInside++;
      }
      myOutputValue = myOutputValue + "</br>";
      counterOutside++;
      counterInside = 0;
    }
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var counterInside = 0;
  var counterOutside = 0;
  var myOutputValue = "";

  while (counterOutside < input) {
    if (counterOutside == 0 || counterOutside == input - 1) {
      //check whether is first or last line
      while (counterInside < input) {
        myOutputValue = myOutputValue + "😆";
        counterInside++;
      }
      myOutputValue = myOutputValue + "</br>";
      counterOutside++;
      counterInside = 0;
    } else {
      while (counterInside < input) {
        if (counterInside == 0 || counterInside == input - 1) {
          // check if first or last coloumn
          myOutputValue = myOutputValue + "😆";
        } else if (
          counterInside == (input - 1) / 2 &&
          counterOutside == (input - 1) / 2
        ) {
          // check if center piece
          myOutputValue = myOutputValue + "😒";
        } else {
          myOutputValue = myOutputValue + "👍";
        }
        counterInside++;
      }
      myOutputValue = myOutputValue + "</br>";
      counterOutside++;
      counterInside = 0;
    }
  }
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
