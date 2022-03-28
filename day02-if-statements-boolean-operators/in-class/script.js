var lucky11Main = function (input) {
  //input is a string
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  //roll 2 dice.
  var myOutputValue = "hello LOSER";
  var randomDecimal1 = Math.random() * 6; //0-0.9999... * 6
  var randomDie1 = Math.floor(randomDecimal1) + 1; // example: 5.8989 -> 5 then plus 1 = 6
  var randomDecimal2 = Math.random() * 6; //0-0.9999... * 6
  var randomDie2 = Math.floor(randomDecimal2) + 1; // example: 5.8989 -> 5 then plus 1 = 6
  //add 2 dice value
  var totalValue = randomDie1 + randomDie2;
  //check input is equal to any die
  if (input == randomDie1 || input == randomDie2) {
    //If input is equal to value of die 1 or 2 then
    myOutputValue = `WINNER!!!! RIGHT GUESS: ${input}`; //change output to this ""
  }
  //check 2 dice value is equal to 11
  if (totalValue === 11) {
    myOutputValue = "WINNER!!!! dice add to 11";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    var myOutputValue = "Rice";
  }
  if (input == "hokkien mee" || input == "laksa") {
    myOutputValue = "noodle";
  }
  if (input == "roti prata" || input == "bak kut teh") {
    myOutputValue = "other";
  }
  return myOutputValue;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "wrong";
  var decimal1 = Math.random() * 10;
  var digit1 = Math.floor(decimal1);
  var decimal2 = Math.random() * 10;
  var digit2 = Math.floor(decimal2);
  var decimal3 = Math.random() * 10;
  var digit3 = Math.floor(decimal3);
  var decimal4 = Math.random() * 10;
  var digit4 = Math.floor(decimal4);
  if (
    input == digit1 ||
    input == digit2 ||
    input == digit3 ||
    input == digit4
  ) {
    myOutputValue = `You Won! Your guess: ${input}. Winning numbers: ${digit1}${digit2}${digit3}${digit4}`;
  }
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  //input is the dish name
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "Pay up Peasant!";
  // what is the random cooked dish?
  var randomDecision = Math.random() * 6;
  var randomChoice = Math.floor(randomDecision) + 1; // 1 to 6 randomly
  var dishName = "";
  switch (randomChoice) {
    case 1:
      dishName = "roti prata";
      break;
    case 2:
      dishName = "nasi lemak";
      break;
    case 3:
      dishName = "hokkien mee";
      break;
    case 4:
      dishName = "bak kut teh";
      break;
    case 5:
      dishName = "laksa";
      break;
    default:
      dishName = "chicken rice";
      break;
  }
  // When is the meal free?
  // Ans: When input(customer choice) is equal to the cooked dish
  // Check if input = dishName
  if (input == dishName) {
    myOutputValue = "You got a free meal";
  }
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "You lose";
  var decimal1 = Math.random() * 10;
  var digit1 = Math.floor(decimal1);
  var decimal2 = Math.random() * 10;
  var digit2 = Math.floor(decimal2);
  var decimal3 = Math.random() * 10;
  var digit3 = Math.floor(decimal3);
  var decimal4 = Math.random() * 10;
  var digit4 = Math.floor(decimal4);
  var resulting4Digit = digit1 * 1000 + digit2 * 100 + digit3 * 10 + digit4;
  if (resulting4Digit - 1000 < input && input < resulting4Digit + 1000) {
    myOutputValue = `You Won! Your guess: ${input}. Winning number range: ${
      resulting4Digit - 1000
    } to ${resulting4Digit + 1000}`;
  }
  return myOutputValue;
};

var dish = function (input) {
  var randomDecision = Math.random() * 4;
  var randomChoice = Math.floor(randomDecision) + 1; // 1 to 4 randomly
  var dishName = "";
  if (input == "rice") {
    switch (
      randomChoice //Assume Uncle's rice dishes are "chicken rice", "nasi lemak", and "bak kut teh".
    ) {
      case 1:
        dishName = "roti prata"; //Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
        break;
      case 2:
        dishName = "nasi lemak";
        break;
      case 3:
        dishName = "bak kut teh";
        break;
      default:
        dishName = "chicken rice";
        break;
    }
  }
  if (input == "noodle") {
    //Assume Uncle's noodle dishes are "hokkien mee", "laksa", and "beef hor fun".
    switch (randomChoice) {
      case 1:
        dishName = "roti prata"; //Roti prata is neither rice nor noodle, but Uncle can randomly choose to include it as one of the two dishes if he feels like it.
        break;
      case 2:
        dishName = "hokkien mee";
        break;
      case 3:
        dishName = "laksa";
        break;
      default:
        dishName = "beef hor fun";
        break;
    }
  }
  return dishName;
};

var hawkerFoodOmakaseMain = function (input) {
  //Customers can input either "rice" or "noodle"
  //Uncle will choose either 2 random rice or 2 random noodle dishes for them.
  var myOutputValue = "";
  var dish1 = dish(input); //dish1 = dishname in dish() run 1
  var dish2 = dish(input); //dish2 = dishname in dish() run 2
  while (dish2 == dish1) {
    dish2 = dish(input);
  }
  //Output at the end if sambal is included. Not all dishes come with sambal, for example roti prata and bak kut teh don't come with sambal.
  if (
    (dish1 != "roti prata" && dish1 != "bak kut teh") ||
    (dish2 != "roti prata" && dish2 != "bak kut teh")
  ) {
    //got sambal
    var myOutputValue = `Menu: <br>- ${dish1}<br>- ${dish2}<br>- Sambal Provided`;
  } else {
    var myOutputValue = `Menu: <br>- ${dish1}<br>- ${dish2}<br>- No Sambal Provided`;
  }

  // *OPTIONAL Uncle charges more for omakase and uses premium descriptions for his dishes.
  // *OPTIONAL Feel free to get creative. To create a new line in the output box you can use the string '<br>', which generates a new line in HTML output.

  return myOutputValue;
};

// TRUE || FALSE = TRUE
// TRUE && FALSE = FALSE
// TRUE && TRUE = TRUE

//DISH 1 IS CHICKEN RICE
