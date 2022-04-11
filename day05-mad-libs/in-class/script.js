var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input == "create") {
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdjective = adjectives[randomInteger];
    var myOutputValue =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdjective +
      " wife.";
  } else {
    var found = false;
    myOutputValue = "";
    for (var index = 0; index < adjectives.length; index += 1) {
      var currentName = adjectives[index];
      if (currentName == input) {
        found = true;
      }
    }
    if (!found) {
      adjectives.push(input);
    }
  }
  return myOutputValue;
};

var adjectives = [];
var mode = true;

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  var myOutputValue = "ok";
  if (input == "create") {
    mode = false;
  }

  if (mode == true) {
    var found = false;
    for (var index = 0; index < adjectives.length; index += 1) {
      var currentName = adjectives[index];
      if (currentName == input) {
        found = true;
      }
    }
    if (!found) {
      adjectives.push(input);
    }
  } else if (mode == false) {
    if (input == "input") {
      mode = true;
    }
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdjective = adjectives[randomInteger];
    myOutputValue =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdjective +
      " wife.";
  }
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.

  var myOutputValue = "ok";

  if (input == "create") {
    mode = false;
  } else if (input == "input") {
    mode = true;
  }

  if (mode == true) {
    var found = false;
    var inputArray = input.split(" ");
    for (var index = 0; index < adjectives.length; index += 1) {
      var currentName = adjectives[index];
      for (var index = 0; index < inputArray.length; index += 1) {
        if (currentName == inputArray[index]) {
          found = true;
        }
      }
    }
    if (!found) {
      for (var index = 0; index < inputArray.length; index += 1) {
        adjectives.push(inputArray[index]);
      }
    }
  } else if (mode == false) {
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdjective = adjectives[randomInteger];
    myOutputValue =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdjective +
      " wife.";
  }

  return myOutputValue;
};

var exclamation = [];
var adjectives = [];
var Noun = [];
var adverb = [];
var mode = true;

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.

  if (input == "create") {
    mode = false;
  } else if (input == "input") {
    mode = true;
  }
  if (mode == true) {
    var inputArray = input.split(" ");
    var myOutputValue = "ok";

    if (inputArray[0] == "exclamation") {
      var found = false;
      for (var index = 0; index < exclamation.length; index += 1) {
        var currentName = exclamation[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          exclamation.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adverb") {
      var found = false;
      for (var index = 0; index < adverb.length; index += 1) {
        var currentName = adverb[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adverb.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adjective") {
      var found = false;
      for (var index = 0; index < adjectives.length; index += 1) {
        var currentName = adjectives[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adjectives.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "noun") {
      var found = false;
      for (var index = 0; index < Noun.length; index += 1) {
        var currentName = Noun[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          Noun.push(inputArray[index2]);
        }
      }
    }
  } else if (mode == false) {
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdj = adjectives[randomInteger];
    var randomDecimal2 = Math.random() * adverb.length;
    // take off the decimal
    var randomInteger2 = Math.floor(randomDecimal2);
    var randomAdverb = adverb[randomInteger2];
    var randomDecimal3 = Math.random() * exclamation.length;
    // take off the decimal
    var randomInteger3 = Math.floor(randomDecimal3);
    var randomExclamation = exclamation[randomInteger3];
    var randomDecimal4 = Math.random() * Noun.length;
    // take off the decimal
    var randomInteger4 = Math.floor(randomDecimal4);
    var randomNoun = Noun[randomInteger4];
    myOutputValue = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;
  }

  return myOutputValue;
};

var exclamation = [];
var adjectives = [];
var Noun = [];
var adverb = [];
var popularExclamation = [];
var popularAdjectives = [];
var popularNoun = [];
var popularAdverb = [];
var mode = true;

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.

  if (input == "create") {
    mode = false;
  } else if (input == "input") {
    mode = true;
  }
  if (mode == true) {
    var inputArray = input.split(" ");
    var myOutputValue = "ok";

    if (inputArray[0] == "exclamation") {
      var found = false;
      for (var index = 0; index < exclamation.length; index += 1) {
        var currentName = exclamation[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          exclamation.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adverb") {
      var found = false;
      for (var index = 0; index < adverb.length; index += 1) {
        var currentName = adverb[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adverb.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adjective") {
      var found = false;
      for (var index = 0; index < adjectives.length; index += 1) {
        var currentName = adjectives[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adjectives.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "noun") {
      var found = false;
      for (var index = 0; index < Noun.length; index += 1) {
        var currentName = Noun[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          Noun.push(inputArray[index2]);
        }
      }
    }
  } else if (mode == false) {
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdj = adjectives[randomInteger];
    popularAdjectives.push(randomAdj);

    var randomDecimal2 = Math.random() * adverb.length;
    // take off the decimal
    var randomInteger2 = Math.floor(randomDecimal2);
    var randomAdverb = adverb[randomInteger2];
    popularAdverb.push(randomAdverb);

    var randomDecimal3 = Math.random() * exclamation.length;
    // take off the decimal
    var randomInteger3 = Math.floor(randomDecimal3);
    var randomExclamation = exclamation[randomInteger3];
    popularExclamation.push(randomExclamation);

    var randomDecimal4 = Math.random() * Noun.length;
    // take off the decimal
    var randomInteger4 = Math.floor(randomDecimal4);
    var randomNoun = Noun[randomInteger4];
    popularNoun.push(randomNoun);

    myOutputValue = `${randomExclamation}! he said ${randomAdverb} as he jumped into his convertible ${randomNoun} and drove off with his ${randomAdj} wife.`;

    if (input == "adverb") {
      count = {};
      var maxCount = 0;
      var maxOften = "";
      for (var i = 0; i < popularAdverb.length; i += 1) {
        var currentName = popularAdjectives[i];
        var counts = (count[currentName] = (count[currentName] || 0) + 1);
        if (counts > maxCount) {
          maxCount = counts;
          maxOften = currentName;
        }
        myOutputValue = `most popular abverb is ${maxOften}`;
      }
    } else if (input == "Noun") {
      count = {};
      var maxCount = 0;
      var maxOften = "";
      for (var i = 0; i < popularNoun.length; i += 1) {
        var currentName = popularNoun[i];
        var counts = (count[currentName] = (count[currentName] || 0) + 1);
        if (counts > maxCount) {
          maxCount = counts;
          maxOften = currentName;
        }
        myOutputValue = `most popular Noun is ${maxOften}`;
      }
    } else if (input == "adjective") {
      count = {};
      var maxCount = 0;
      var maxOften = "";
      for (var i = 0; i < popularAdjectives.length; i += 1) {
        var currentName = popularAdjectives[i];
        var counts = (count[currentName] = (count[currentName] || 0) + 1);
        if (counts > maxCount) {
          maxCount = counts;
          maxOften = currentName;
        }
        myOutputValue = `most popular Adjectives is ${maxOften}`;
      }
    } else if (input == "Exclamation") {
      var maxCount = 0;
      var maxOften = "";
      for (var i = 0; i < popularExclamation.length; i += 1) {
        var currentName = popularExclamation[i];
        var counts = (count[currentName] = (count[currentName] || 0) + 1);
        if (counts > maxCount) {
          maxCount = counts;
          maxOften = currentName;
        }
        myOutputValue = `most popular Exclamation is ${maxOften}`;
      }
    }
  }
  return myOutputValue;
};

var exclamation = [];
var adjectives = [];
var Noun = [];
var adverb = [];
var mode = true;

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  if (input == "create") {
    mode = false;
  } else if (input == "input") {
    mode = true;
  }
  if (mode == true) {
    var inputArray = input.split(" ");
    var myOutputValue = "ok";

    if (inputArray[0] == "exclamation") {
      var found = false;
      for (var index = 0; index < exclamation.length; index += 1) {
        var currentName = exclamation[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          exclamation.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adverb") {
      var found = false;
      for (var index = 0; index < adverb.length; index += 1) {
        var currentName = adverb[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adverb.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "adjective") {
      var found = false;
      for (var index = 0; index < adjectives.length; index += 1) {
        var currentName = adjectives[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          adjectives.push(inputArray[index2]);
        }
      }
    } else if (inputArray[0] == "noun") {
      var found = false;
      for (var index = 0; index < Noun.length; index += 1) {
        var currentName = Noun[index];
        for (var index2 = 1; index2 < inputArray.length; index2 += 1) {
          if (currentName == inputArray[index2]) {
            found = true;
          }
        }
      }
      if (!found) {
        for (var index2 = 1; index < inputArray.length; index += 1) {
          Noun.push(inputArray[index2]);
        }
      }
    }
  } else if (mode == false) {
    var randomDecimal = Math.random() * adjectives.length;
    // take off the decimal
    var randomInteger = Math.floor(randomDecimal);
    var randomAdj = adjectives[randomInteger];
    var randomDecimal2 = Math.random() * adverb.length;
    // take off the decimal
    var randomInteger2 = Math.floor(randomDecimal2);
    var randomAdverb = adverb[randomInteger2];
    var randomDecimal3 = Math.random() * exclamation.length;
    // take off the decimal
    var randomInteger3 = Math.floor(randomDecimal3);
    var randomExclamation = exclamation[randomInteger3];
    var randomDecimal4 = Math.random() * Noun.length;
    // take off the decimal
    var randomInteger4 = Math.floor(randomDecimal4);
    var randomNoun = Noun[randomInteger4];

    var MadLib = [
      `She asked ${randomAdverb} for the ${randomNoun} and when they were rude, she said ${randomExclamation} and hung up the ${randomAdj} phone.`,
      `It was a ${randomAdj}, cold November day. I woke up to the ${randomAdj} smell of ${randomNoun} roasting in the ${randomNoun} downstairs.`
    ];

    var randomDecimal5 = Math.random() * 2;
    // take off the decimal
    var randomInteger5 = Math.floor(randomDecimal5);
    var RandomMadLib = MadLib[randomInteger5];
    myOutputValue = RandomMadLib;
  }
  return myOutputValue;
};
